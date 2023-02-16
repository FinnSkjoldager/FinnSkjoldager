import {Component, ViewChild, AfterViewInit} from "@angular/core";
import {DayPilot, DayPilotCalendarComponent} from "@daypilot/daypilot-lite-angular";
import { DataServiceTimeplanSchedule } from "./timeplan-schedule.dataservice";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-timeplan-schedule',
  //templateUrl: './timeplan-schedule.component.html',
  //styleUrls: ['./timeplan-schedule.component.css']
  template: '<daypilot-calendar [config]="config" #calendar></daypilot-calendar>',
  styles: ['']
})
export class TimeplanScheduleComponent implements AfterViewInit {
  @ViewChild("calendar")
  calendar!: DayPilotCalendarComponent;

  config: DayPilot.CalendarConfig = {
    viewType: "Resources",
    locale: "da-dk",
    //theme: "themefinn",
    //theme: "scheduler_green",
 /*
    scale: "Day",
    timeHeaders = [
        { groupBy: "Month", format: "MMMM yyyy" },
        { groupBy: "Day", format: "d" }
    ];
    */
    startDate: new DayPilot.Date("2022-09-01"),
    onTimeRangeSelected: async args => {
      const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");

      const dp = this.calendar.control;
      dp.clearSelection();
      if (modal.canceled) {
        return;
      }

      dp.events.add({
        start: args.start,
        end: args.end,
        id: DayPilot.guid(),
        text: modal.result,
        resource: args.resource
      });

    }
  };

  constructor(private ds: DataServiceTimeplanSchedule) {
  }

  ngAfterViewInit(): void {

    const from = this.config.startDate as DayPilot.Date;
    const to = from.addDays(1);

    forkJoin([
      this.ds.getResources(),
      this.ds.getEvents(from, to)
    ]).subscribe(data => {
        const options = {
          columns: data[0],
          events: data[1]
        };
        this.calendar.control.update(options);
    });

  }
}


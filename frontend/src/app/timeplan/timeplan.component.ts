import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {
  DayPilot,
  DayPilotCalendarComponent,
  DayPilotMonthComponent,
  DayPilotNavigatorComponent,
} from '@daypilot/daypilot-lite-angular';
import { MyEvent } from './myevent';
import { TimeplanService } from './timeplan.service';

@Component({
  selector: 'app-timeplan',
  templateUrl: './timeplan.component.html',
  styleUrls: ['./timeplan.component.css'],
})
export class TimeplanComponent {
  @ViewChild('day') day!: DayPilotCalendarComponent;
  @ViewChild('week') week!: DayPilotCalendarComponent;
  @ViewChild('month') month!: DayPilotMonthComponent;
  @ViewChild('navigator') nav!: DayPilotNavigatorComponent;
  @ViewChild('resources') resources!: DayPilotNavigatorComponent;
  events: DayPilot.EventData[] = [];
  date = null;
  colors = [
    { name: 'Blue', id: '#3c78d8' },
    { name: 'Green', id: '#6aa84f' },
    { name: 'Yellow', id: '#f1c232' },
    { name: 'Red', id: '#cc0000' },
  ];
  configNavigator: DayPilot.NavigatorConfig = {
    showMonths: 2,
    cellWidth: 25,
    cellHeight: 25,
    startDate: DayPilot.Date.today(),
    onVisibleRangeChanged: (args) => {
      this.getGootleCalendarEvents();
    },
  };

  constructor(public timeplanservice: TimeplanService) {
    this.viewWeek();
    //this.viewRessources();
  }
  ngAfterViewInit(): void {
    this.getGootleCalendarEvents();
  }
  myEventsToGoogleCalendarEvents(data: MyEvent[]) {
    let colorcount = 0;
    data.forEach((event) => {
      this.week.control.events.add(
        new DayPilot.Event({
          start: event.start,
          end: event.end,
          id: DayPilot.guid(),
          text: event.summary,
          barColor: this.colors[colorcount].id,
          resource: 'B'
        })
      );
      colorcount = colorcount + 1;
      if (colorcount == this.colors.length)colorcount=0;
    });
  }
  getGootleCalendarEvents() {
    this.timeplanservice.getAllEvents().subscribe((data: MyEvent[]) => {
      //console.log('getAllEvents ' + data);
      this.myEventsToGoogleCalendarEvents(data);
    });
  }
  selectTomorrow() {
    this.date = DayPilot.Date.today().addDays(1);
  }

  changeDate(date: DayPilot.Date): void {
    this.configDay.startDate = date;
    this.configWeek.startDate = date;
    this.configMonth.startDate = date;
    this.configResources.startDate = date;
  }
  configResources: DayPilot.CalendarConfig = {
    viewType: 'Resources',
    startDate: this.date,
    columns: [
      { name: 'Mødelokale A', id: 'A' },
      { name: 'Mødelokale B', id: 'B' },
      { name: 'Mødelokale C', id: 'C' },
      { name: 'Mødelokale D', id: 'D' },
      { name: 'Mødelokale E', id: 'E' },
      { name: 'Mødelokale F', id: 'F' },
    ],
  };
  configDay: DayPilot.CalendarConfig = {
    viewType: 'Day',
    timeFormat: 'Clock24Hours',
  };

  configWeek: DayPilot.CalendarConfig = {
    locale: "da-dk",
  viewType: "Week",
  //cellHeight: 10,
  businessBeginsHour: 8,
  businessEndsHour: 16,
    timeFormat: 'Clock24Hours',
    //locale: 'dk-dk',
    //hourWidth: 40,
    //headerTextWrappingEnabled: true,
    //theme: 'calendar_green',
    onTimeRangeSelected: async (args) => {
      const modal = await DayPilot.Modal.prompt(
        'Create a new event:',
        'Event 1'
      );
      const dp = args.control;
      dp.clearSelection();
      if (!modal.result) {
        return;
      }
      dp.events.add(
        new DayPilot.Event({
          start: args.start,
          end: args.end,
          id: DayPilot.guid(),
          text: modal.result,
        })
      );
    },
    onEventClick: async (args) => { 
      const form = [
        { name: 'Name', id: 'text' },
        { name: 'Start', id: 'start', type: 'datetime' },
        { name: 'End', id: 'end', type: 'datetime' },
        { name: 'Color', id: 'barColor', type: 'select', options: this.colors },
      ];
      let edata: DayPilot.EventData = args.e.data;
      const modal = await DayPilot.Modal.form(form, edata);
      const dp = args.control;
      dp.clearSelection();
      if (modal.canceled) {
        return;
      }
      //console.log('data', modal.result);
      dp.events.update(modal.result);
    },
  };

  configMonth: DayPilot.MonthConfig = {
  };

  viewDay(): void {
    this.configNavigator.selectMode = 'Day';
    this.configDay.visible = true;
    this.configWeek.visible = false;
    this.configMonth.visible = false;
    this.configResources.visible = false;
  }

  viewWeek(): void {
    this.configNavigator.selectMode = 'Week';
    this.configDay.visible = false;
    this.configWeek.visible = true;
    this.configMonth.visible = false;
    this.configResources.visible = false;
  }

  viewMonth(): void {
    this.configNavigator.selectMode = 'Month';
    this.configDay.visible = false;
    this.configWeek.visible = false;
    this.configMonth.visible = true;
    this.configResources.visible = false;
  }
  viewRessources(): void {
    this.configNavigator.selectMode = 'None';
    this.configDay.visible = false;
    this.configWeek.visible = false;
    this.configMonth.visible = false;
    this.configResources.visible = true;
  }
}

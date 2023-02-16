import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from './../data/utilities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  item='';
  julesti =  this.utilitiesService.getApiUrl() + '/assets/julen2022/';
  constructor(private utilitiesService: UtilitiesService) { }
  ngOnInit(): void {
  }

}

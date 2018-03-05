import { Component, OnInit } from '@angular/core';
import { EventService } from '../service/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../model/event.model';

@Component({
  //selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events:IEvent[];
  constructor(private eventservice: EventService, private route:ActivatedRoute) {
   }
  //   the private varible is equal to below code
  //   eventservice
  //   constructor() { 
  //     this.eventservice = eventservice
  //  }
  ngOnInit() {
    //this.eventservice.getEvents().subscribe(events => {this.events = events});
    this.events = this.route.snapshot.data['events'];
  }
}

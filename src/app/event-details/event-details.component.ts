import { Component, OnInit } from '@angular/core';
import { EventService } from '../service/event.service';
import { ActivatedRoute } from '@angular/router'
import { IEvent } from '../model/event.model';
import { ISession } from '../model/session.model';

@Component({
  //selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  addMode: boolean;
  event: IEvent;
  filterBy: string = 'all';
  
  constructor(private eventservice: EventService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    
    this.route.params.forEach((params: Params ) => {
      this.event = this.eventService.getEvent(+params['id'])
      this.addMode = false;
    })
    
    // this.event = this.eventservice.getEvent
    // (+this.route.snapshot.params['id']); // + is used to type convert to integer
  }

  addSession(){
    this.addMode = true;
  }

  saveNewSession(session:ISession){
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventservice.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession(){
    this.addMode = false;
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { EventService } from '../index';
import { EventService } from '../service/event.service'

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  event: any;

  isDirty:boolean = true;
  
  constructor( private router : Router, private eventService : EventService) { }

  ngOnInit() {
    this.event = {
      name: 'NG spectacular',
      date: '01/25/2018',
      time: '10AM',
      price: 500,
      location:{
        address:'Hartford Main Street',
        city: 'Hartford',
        country: 'USA'
      },
      onlineUrl: 'http://ngspectaculr.com',
      imageUrl: 'http://ngspectaculr.com/logo.png'
    };
  }

  saveEvent(formValues){
    // console.log(formValues);

    this.eventService.saveEvent(formValues);
    this.isDirty = false;

    this.router.navigate(['/events']);
  }

  cancel(){
    this.router.navigate(['/events']);
  }

}

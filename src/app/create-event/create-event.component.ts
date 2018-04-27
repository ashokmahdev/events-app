import { Component, OnInit ,Inject,ViewContainerRef} from '@angular/core';
import { Router } from '@angular/router';
// import { EventService } from '../index';
import { EventService } from '../service/event.service'
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {TOASTER_TOKEN,Toastr} from '../common/toastr.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  event: any;

  isDirty:boolean = true;
  
      //   constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
      //    this.toastr.setRootViewContainerRef(vcr);
      // }
      
  // constructor( private router : Router, private eventService : EventService,public toastr: ToastsManager, vcr: ViewContainerRef) { 
  //    this.toastr.setRootViewContainerRef(vcr);
  // }
  
   constructor( private router : Router, private eventService : EventService,
   @Inject(TOASTER_TOKEN) private toastr: Toastr) { 
     
  }

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
    this.eventService.saveEventNew(formValues).subscribe(
      data => {
        console.log("success saving event!");
        return true;
        },
      error => {
        console.log("Error saving event!");
        return false;
      }
    );
    this.isDirty = false;
    //console.log( this.toastr)
    this.toastr.success('You are awesome!', 'Success!');
    this.toastr.error('There was an Error', 'Error!');
    this.toastr.info('Events saved', 'Info!');
     this.toastr.warning('You are about to save', 'warning!');
     //this.router.navigate(['/events']);
  }

  cancel(){
    this.router.navigate(['/events']);
  }

}

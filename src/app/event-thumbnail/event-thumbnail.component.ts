import { Component, Input } from '@angular/core';
import { IEvent } from '../model/event.model';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent {
  @Input() event: IEvent;
  constructor() { }
  getStartTimeStyle() : any {
    if (this.event && this.event.time === '8:00 am') {
      return {color: 'green', 'font-weight' : 'bold' };
    } else {
      if (this.event && this.event.time === '12:00 pm') {
        return {color: 'blue', 'font-weight' : 'bold' };
      }
      return '';
    }
  }
}

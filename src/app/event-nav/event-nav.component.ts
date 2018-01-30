import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-event-nav',
  templateUrl: './event-nav.component.html',
  styleUrls: ['./event-nav.component.css']
})
export class EventNavComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

}

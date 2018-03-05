import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession } from '../model/session.model';
import { EventService } from '../service/event.service'

@Component({
  selector: 'app-event-nav',
  templateUrl: './event-nav.component.html',
  styleUrls: ['./event-nav.component.css']
})
export class EventNavComponent implements OnInit {
  searchTerm : string ="";
  foundSessions : ISession[];

  constructor(private auth:AuthService, private eventService:EventService) { }

  ngOnInit() {
  }

// We may wnat to do like this but thats not what we should do ..
// ..for one big reason that implementation of opening the modal will be tied to the nav bar
// we want to hide these details using directive
// onSearch(){
//   $('#id').modal()
// }

  searchSessions(searchTerm){
       this.eventService.searchSessions(searchTerm).subscribe(
      sesssions => {
        this.foundSessions =sesssions;
        console.log(searchTerm);
        console.log(this.foundSessions);
      }
    );
  }
}

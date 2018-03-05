import { Component, OnInit, Input ,OnChanges} from '@angular/core';
import { ISession } from '../model/session.model';
import { Session } from 'selenium-webdriver';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {

  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[] = []

  constructor() { }

  ngOnChanges() {
    if(this.sessions)
    {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) :this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  filterSessions(filter){
    if(filter === 'all'){
    this.visibleSessions = this.sessions.slice(0);
    }
    else{
      this.visibleSessions = this.sessions.filter(Session => { return Session.level.toLocaleLowerCase() === filter})
    }
  }

}

function sortByNameAsc(s1:ISession,s2:ISession) {
  //1 before 2 alphabetically
if(s1.name > s2.name) {
return 1
} else if(s1.name === s2.name) return 0
else return -1
}

function sortByVotesDesc(s1:ISession,s2:ISession) {
 return s2.voters.length - s1.voters.length;
}

import { Injectable,EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { IEvent } from '../model/event.model';
import { ISession } from '../model/session.model';

@Injectable()
export class EventService {

  constructor() { }

  getEvents(): Subject<IEvent[]> {
    let subject = new Subject<IEvent[]>();

    setTimeout(()=> {subject.next(EVENTS); subject.complete();},100);
    //return EVENTS;

    return subject;
  }

  getEvent(id:number) : IEvent{
    return EVENTS.find(event => event.id === id);
  }

  saveEvent(event){
    event.id = 999;
    event.session = [];
    
    EVENTS.push(event);
  }

  updateEvent(event){
    let index = EVENTS.findIndex(x=> x.id == event.id);
    EVENTS[index] = event;
  }
  
  searchSessions(searchTerm : string){
    var term = searchTerm.toLocaleLowerCase();
    var results : ISession[] = [];
    
    EVENTS.forEach(event => {
      
      //STEP1
      var matchingSessions = event.sessions.filter(
        session => session.name.toLocaleLowerCase().indexOf(term) > -1);
       
      //STEP2
      matchingSessions = matchingSessions.map( (session:any) => {
          session.evenId = event.id;   
          return session;       
          }
        )
        
      //STEP3 
      results = results.concat(matchingSessions);  
    })
    
    var emitter = new EventEmitter(true);
    
    setTimeout(() => {
        emitter.emit(results);
     },100);
    
    return emitter; 
  }

}
const EVENTS : IEvent[] = [
  {
    id: 1,
    name: 'Angular Learning Session',
    date: new Date('12/19/2017'),
    time: '12:00 pm',
    price: 99.99,
    imageUrl: './assets/angular.png',
    location: {
      address: '50 Prospect Street',
      city: 'Hartford',
      country: 'USA'
    },
    sessions: [
      {
        id: 1,
        name: "Introduction, Platform Overview and Architecture",
        presenter: "Ajith and Bipul",
        duration: 1,
        level: "Intermediate",
        abstract: `Learn all basic concepts of Angular with Angular Architecture.
        Basic Concepts on Component, Binding, Dependency Injection etc`,
        voters: ['bradgreen', 'igorminar', 'martinfowler']
      },
      {
        id: 2,
        name: "Understanding Angular CLI ",
        presenter: "Janny and Bipul",
        duration: 1,
        level: "Intermediate",
        abstract: `We all will know about setting up Angular Application.
        Using Angular CLI command for various operations on Angular Application`,
        voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
      },
      {
        id: 3,
        name: "Components, Templates, Services",
        presenter: "Bipul Kumar",
        duration: 1,
        level: "Beginner",
        abstract: `Deepdive into Angular Application Component Structure and 
        Hierarchy, Interpolation, Expression, Events, Statements, Services`,
        voters: []
      },
      {
        id: 4,
        name: "TypeScript Overview, VS Code, Commands",
        presenter: "Ashok Deviah",
        duration: 2,
        level: "Advanced",
        abstract: `Deepdive into understanding TypeScript Overview, VS Code, Commands`,
        voters: []
      },
      {
        id: 5,
        name: "Routing and Component Communication ",
        presenter: "Krishna/Ashok",
        duration: 2,
        level: "Intermediate",
        abstract: `Deepdive into Angular Application Routing and Component Communication`,
        voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
      }
    ]
  },
  {
    id: 2,
    name: 'Angular Training- St Paul',
    date: new Date('4/15/2037'),
    time: '9:00 am',
    price: 950.00,
    imageUrl: './assets/angular.png',
    onlineUrl: 'www.learning.travelers.com',
    sessions: [
      {
        id: 1,
        name: "Testing Angular 4 Workshop",
        presenter: "Pascal Precht & Christoph Bergdorf",
        duration: 4,
        level: "Beginner",
        abstract: `In this 6 hour workshop you will learn not only how to test Angular 4, 
        you will also learn how to make the most of your team's efforts. Other topics
        will be convincing your manager that testing is a good idea, and using the new
        protractor tool for end to end testing.`,
        voters: ['bradgreen', 'igorminar']
      },
      {
        id: 2,
        name: "Angular 4 and Firebase",
        presenter: "David East",
        duration: 3,
        level: "Intermediate",
        abstract: `In this workshop, David East will show you how to use Angular with the new
        ultra-real-time 5D Firebase back end, hosting platform, and wine recommendation engine.`,
        voters: ['bradgreen', 'igorminar', 'johnpapa']
      },
      {
        id: 3,
        name: "Reading the Angular 4 Source",
        presenter: "Patrick Stapleton",
        duration: 2,
        level: "Intermediate",
        abstract: `Angular 4's source code may be over 25 million lines of code, but it's really 
        a lot easier to read and understand then you may think. Patrick Stapleton will talk
        about his secretes for keeping up with the changes, and navigating around the code.`,
        voters: ['martinfowler']
      },
      {
        id: 4,
        name: "Hail to the Lukas",
        presenter: "Lukas Ruebbelke",
        duration: 1,
        level: "Beginner",
        abstract: `In this session, Lukas will present the 
        secret to being awesome, and how he became the President 
        of the United States through his amazing programming skills, 
        showing how you too can be success with just attitude.`,
        voters: ['bradgreen']
      },
    ]
  },
  {
    id: 3,
    name: 'NodeJS and Mongo DB',
    date: new Date('5/4/2037'),
    time: '9:00 am',
    price: 759.00,
    imageUrl: './assets/angular.png',
    location: {
      address: 'The Palatial America Hotel',
      city: 'Salt Lake City',
      country: 'USA'
    },
    sessions: [
      {
        id: 1,
        name: "How Elm Powers Angular 4",
        presenter: "Murphy Randle",
        duration: 2,
        level: "Intermediate",
        abstract: `We all know that Angular is written in Elm, but did you
        know how the source code is really written? In this exciting look
        into the internals of Angular 4, we'll see exactly how Elm powers
        the framework, and what you can do to take advantage of this knowledge.`,
        voters: ['bradgreen', 'martinfowler', 'igorminar']
      },
      {
        id: 2,
        name: "Angular and React together",
        presenter: "Jamison Dance",
        duration: 2,
        level: "Intermediate",
        abstract: `React v449.6 has just been released. Let's see how to use 
        this new version with Angular to create even more impressive applications.`,
        voters: ['bradgreen', 'martinfowler']
      },
      {
        id: 3,
        name: "Redux Woes",
        presenter: "Rob Wormald",
        duration: 1,
        level: "Intermediate",
        abstract: `Everyone is using Redux for everything from Angular to React to 
        Excel macros, but you're still having trouble grasping it? We'll take a look
        at how farmers use Redux when harvesting grain as a great introduction to 
        this game changing technology.`,
        voters: ['bradgreen', 'martinfowler', 'johnpapa']
      },
      {
        id: 4,
        name: "ng-wat again!!",
        presenter: "Shai Reznik",
        duration: 1,
        level: "Beginner",
        abstract: `Let's take a look at some of the stranger pieces of Angular 4,
        including neural net nets, Android in Androids, and using pipes with actual pipes.`,
        voters: ['bradgreen', 'martinfowler', 'igorminar', 'johnpapa']
      },
      {
        id: 5,
        name: "Dressed for Success",
        presenter: "Ward Bell",
        duration: 2,
        level: "Beginner",
        abstract: `Being a developer in 2037 is about more than just writing bug-free code. 
        You also have to look the part. In this amazing expose, Ward will talk you through
        how to pick out the right clothes to make your coworkers and boss not only
        respect you, but also want to be your buddy.`,
        voters: ['bradgreen', 'martinfowler']
      },
      {
        id: 6,
        name: "These aren't the directives you're looking for",
        presenter: "John Papa",
        duration: 2,
        level: "Intermediate",
        abstract: `Coinciding with the release of Star Wars Episode 18, this talk will show how
        to use directives in your Angular 4 development while drawing lessons from the new movie,
        featuring all your favorite characters like Han Solo's ghost and Darth Jar Jar.`,
        voters: ['bradgreen', 'martinfowler']
      },
    ]
  },
  {
    id: 4,
    name: 'UN Angular Summit',
    date: new Date('6/10/2037'),
    time: '8:00 am',
    price: 800.00,
    imageUrl: './assets/angular.png',
    location: {
      address: 'The UN Angular Center',
      city: 'New York',
      country: 'USA'
    },
    sessions: [
      {
        id: 1,
        name: "Diversity in Tech",
        presenter: "Sir Dave Smith",
        duration: 2,
        level: "Beginner",
        abstract: `Yes, we all work with cyborgs and androids and Martians, but 
        we probably don't realize that sometimes our internal biases can make it difficult for
        these well-designed coworkers to really feel at home coding alongside us. This talk will
        look at things we can do to recognize our biases and counteract them.`,
        voters: ['bradgreen', 'igorminar']
      },
      {
        id: 2,
        name: "World Peace and Angular",
        presenter: "US Secretary of State Zach Galifianakis",
        duration: 2,
        level: "Beginner",
        abstract: `Angular has been used in most of the major peace brokering that has
        happened in the last decade, but there is still much we can do to remove all
        war from the world, and Angular will be a key part of that effort.`,
        voters: ['bradgreen', 'igorminar', 'johnpapa']
      },
      {
        id: 3,
        name: "Using Angular with Androids",
        presenter: "Dan Wahlin",
        duration: 3,
        level: "Advanced",
        abstract: `Androids may do everything for us now, allowing us to spend all day playing 
        the latest Destiny DLC, but we can still improve the massages they give and the handmade
        brie they make using Angular 4. This session will show you how.`,
        voters: ['igorminar', 'johnpapa']
      },
    ]
  },
  {
    id: 5,
    name: 'Angular Training - Hawaii',
    date: new Date('2/10/2037'),
    time: '9:00 am',
    price: 400.00,
     imageUrl: './assets/angular.png',
    location: {
      address: 'Waikiki Beach',
      city: 'Hawaii',
      country: 'USA'
    },
    sessions: [
      {
        id: 1,
        name: "Gambling with Angular",
        presenter: "John Papa",
        duration: 1,
        level: "Intermediate",
        abstract: `No, this talk isn't about slot machines. We all know that 
        Angular is used in most waiter-bots and coke vending machines, but
        did you know that was also used to write the core engine in the majority
        of voting machines? This talk will look at how all presidential elections
        are now determined by Angular code.`,
        voters: ['bradgreen', 'igorminar']
      },
      {
        id: 2,
        name: "Angular 4 in 60ish Minutes",
        presenter: "Dan Wahlin",
        duration: 2,
        level: "Beginner",
        abstract: `Get the skinny on Angular 4 for anyone new to this great new technology.
        Dan Wahlin will show you how you can get started with Angular in 60ish minutes, 
        guaranteed!`,
        voters: ['bradgreen', 'igorminar', 'johnpapa']
      }
    ]
  }
]

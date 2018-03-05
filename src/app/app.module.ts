import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TOASTER_TOKEN ,Toastr}  from './common/toastr.service';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { 
  EventsListComponent,
  EventThumbnailComponent,
  EventNavComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventsListResolverService,
  Error404Component,
  CreateSessionComponent,
  DurationPipe
} from './index';


import { SessionListComponent } from './session-list/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';

//declare let toastr : any
//declare let toastr : Toastr

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventNavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    [BrowserModule,BrowserAnimationsModule, ToastModule.forRoot()],
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService, 
    EventRouteActivator,
    // { 
    //   provide:'TOASTER_TOKEN',
    //   useValue : 'toastr'
    // },
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventsListResolverService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty)
  return window.confirm('You have not saved the data. Do you really want to cancel?')

  return true;
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JQ_TOKEN,TOASTER_TOKEN,Toastr,SimpleModalComponent,ModalTriggerDirective} from './common/index';

declare let toastr : Toastr;
declare let jQuery : Object;

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
    SimpleModalComponent,
    DurationPipe,
    ModalTriggerDirective
  ],
  imports: [
    [BrowserModule, BrowserAnimationsModule, ToastModule.forRoot()], 
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService, 
    EventRouteActivator,
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    },
    {
      provide: TOASTER_TOKEN,
      useValue: toastr
    },
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

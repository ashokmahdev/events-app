import { Routes} from '@angular/router'

import {
    EventDetailsComponent,
    EventsListComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventsListResolverService,
    Error404Component,
    CreateSessionComponent
} from './index'

export const appRoutes : Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']  },  // We will talk about the placement of this route   
    { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolverService}  },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]  },  // events/1 or //events/foo
    { path: '', redirectTo: '/events', pathMatch: 'full' }, // default path where pathMatch can accept prefix or full
    { path: '404', component: Error404Component },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
    { path: 'events/session/new', component: CreateSessionComponent }
]
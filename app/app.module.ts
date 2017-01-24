import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule  } from '@angular/http';
import {Routes, RouterModule} from '@angular/router';

import { NavComponent }   from './nav.component';
import { AppComponent }   from './app.component';
import { UsersAddDeleteComponent }   from './users.add.delete.component';
import { UsersCardComponent }   from './users.card.component';
import { UsersLoadUploadComponent }   from './users.load.upload.component';
import { SearchComponent }   from './apps/app.search';

import { NotFoundComponent }   from './not-found.component';

import { User } from './share/user';
import { HttpService }   from './share/http.service';
import { SearchPipe }   from './share/searchPipe';
import { SortPipe }   from './share/sortPipe';
import { GlobalState }   from './global-state';


const appRoutes: Routes = [
    { path: '', component: AppComponent},
    { path: 'addDelete', component: UsersAddDeleteComponent},
    { path: 'loadUpload', component: UsersLoadUploadComponent},
    { path: 'cards', component: UsersCardComponent},
    // { path: '**', component: NotFoundComponent }
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), HttpModule, FormsModule, JsonpModule  ],
    declarations: [ SortPipe, SearchPipe, SearchComponent, NavComponent, AppComponent, UsersLoadUploadComponent, UsersCardComponent , UsersAddDeleteComponent, NotFoundComponent ],
    providers: 	  [ HttpService, User, GlobalState ],
    bootstrap:    [ NavComponent ]
})

export class AppModule { }
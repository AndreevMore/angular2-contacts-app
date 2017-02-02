import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule  } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { GridComponent }   from './components/grid/grid.component';
import { NavigationComponent }   from './components/navigation/navigation.component';
import { CardsComponent }   from './components/cards/cards.component';
import { BackupComponent }   from './components/backup/backup.component';
import { SearchComponent }   from './components/search/search.component';
import { EditorComponent }   from './components/editor/editor.component';
import { NotFoundComponent }   from './components/notFound/not-found.component';


import {WindowRef} from './service/WindowRef';
import { GlobalState }   from './service/global-state';
import { HttpService }   from './service/http.service';
import { User } from './models/user';
import { SearchPipe }   from './pipes/searchPipe';
import { SortPipe }   from './pipes/sortPipe';

const appRoutes: Routes = [
    { path: '', component: GridComponent},
    { path: 'edit', component: EditorComponent},
    { path: 'backup', component: BackupComponent},
    { path: 'cards', component: CardsComponent},
    // { path: '**', component: NotFoundComponent }
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), HttpModule, FormsModule, JsonpModule  ],
    declarations: [ SortPipe, SearchPipe, SearchComponent, NavigationComponent, GridComponent, BackupComponent, CardsComponent , EditorComponent, NotFoundComponent ],
    providers: 	  [ HttpService, User, GlobalState, WindowRef ],
    bootstrap:    [ NavigationComponent ]
})

export class AppModule { }
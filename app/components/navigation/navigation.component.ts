import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';


import { GlobalState }   from '../../service/global-state';
import { HttpService }   from '../../service/http.service';


import { NewUser } from '../../models/userNew';


import { GridComponent }   from '../../components/grid/grid.component';

@Component({
    selector: 'navigation',
    template: `			
	    			<div>
						<h2>navigation.component.ts</h2>

						<div class="panel-heading">
							<h1>Phone Book</h1> <span>total:{{usersCount}}</span>
						</div>
						
						<nav class="navbar navbar-default">
							<ul>
								<li><a routerLink="">Grid</a></li>
								<li><a routerLink="/edit">Editor</a></li>
								<li><a routerLink="/cards">Cards</a></li>
								<li><a routerLink="/backup">Backup</a></li>
							</ul>
						</nav>
						<router-outlet></router-outlet>
					</div>
             `,
    styles: [
	    		`
		    		ul {
					    list-style-type: none;
					    margin: 0;
					    padding: 0;
					    overflow: hidden;
					    background-color: #333;
					}

					li {
					    float: left;
					}

					li a {
					    display: block;
					    color: white;
					    text-align: center;
					    padding: 14px 16px;
					    text-decoration: none;
					}

					li a:hover:not(.active) {
					    background-color: #111;
					}

					.active {
					    background-color: #4CAF50;
					}
     			`
     		],
    providers: [HttpService]
})


export class NavigationComponent { 
	usersCount;

	constructor(private state: GlobalState){}
	
	ngOnInit(){
		this.state.subscribe('users:count', data=>{
			// console.log('subscribtion');
			this.usersCount = data;
		})
	}
}
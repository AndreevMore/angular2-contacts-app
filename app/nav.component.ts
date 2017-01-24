import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';

import { HttpService } from './share/http.service';
import { NewUser } from './share/userNew';
import { AppComponent }   from './app.component';
import { GlobalState }   from './global-state';


@Component({
    selector: 'nav-app',
    template: `			
    			<div class="col-lg-12 col-md-12"> 

					<div class="panel-heading">
						<h1>Phone Book</h1> <span>total:{{usersCount}}</span>
						
					
					</div>
		
					
					<div>
						<nav class="navbar navbar-default">
							<ul>
								<li><a routerLink="">Home - clean view</a></li>
								<li><a routerLink="/addDelete">add delete users</a></li>
								<li><a routerLink="/cards">card users</a></li>
								<li><a routerLink="/loadUpload">load upload users</a></li>
							</ul>
						</nav>
						<router-outlet></router-outlet>
					</div>
				</div>
             `,
    styles: [`

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
            // #form.ng-valid {
            //     background-color:yellow;
            // }
            // #form.ng-invalid {
            //     background-color:pink;
            // }
            // input.ng-valid {
            //     background-color: green;
            // }  
            // input.ng-invalid {
            //      background-color: red;
            // }
     		`],
    providers: [HttpService]
})


export class NavComponent { 
	usersCount;

	constructor(private state: GlobalState){}
	
	ngOnInit(){
		this.state.subscribe('users:count', data=>{
			console.log('subscribtion');
			this.usersCount = data;
		})
	}
}
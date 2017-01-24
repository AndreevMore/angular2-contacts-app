import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';

import { GlobalState }   from './global-state';
import { HttpService } from './share/http.service';
import { NewUser } from './share/userNew';
import { User } from './share/user';

import { NavComponent }   from './nav.component';

@Component({
    selector: 'my-app',
	template:   `
				<search-component [(inputValue)]="searchVal" ></search-component>

				<div class="col-lg-12 col-md-12"> 
					<div class="panel panel-default" >
						<table class="table">
							<thead> 
								<tr>
									<th (click)="currentSortString='name' "    >Name 	<i class="fa fa-sort-desc" ></i>   </th>
									<th (click)="currentSortString='password' ">Number 	</th>
									<th (click)="currentSortString='email' "   >Email 	</th>
								</tr>
							</thead>
							<tbody>
							 	<tr *ngFor="let user of users | search:searchVal | sort:currentSortString ">
							 		<td>{{user.name}}</td>
							 		<td>{{user.password}}</td>
							 		<td>{{user.email}}</td>
							 	</tr>
						</table>
					</div>
				</div>
				`,

	 styles: [`

	    		th{cursor:pointer}

     		`]	,				
    providers: [HttpService],
})


export class AppComponent implements OnInit { 

 // sortStatus = { 
 //           sortTarget: '',
 //           sortDirection:'' 
 //        };

	currentSortString: string = "name";
	searchVal: string = "";
	
    users: User[] = [];
    newUser: NewUser = new NewUser("", "", "");
    usersCount:number;

    constructor(private httpService: HttpService, private state: GlobalState) {}

	ngOnInit(){
        this.usersGet();
	}
	
	usersGet(){
		this.httpService.usersGet()
            .subscribe((data: Response) => {
            	this.users=data.json();
        		this.usersCount=this.users.length;
        		this.state.notifyDataChanged('users:count',this.users.length);
        		console.log('from app - ' + this.usersCount);
            },
        err => console.error(err),
        () => console.log('Contact list fetched...')
        );
	}

}


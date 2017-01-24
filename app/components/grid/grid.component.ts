import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';

import { NavigationComponent }   from '../../components/navigation/navigation.component';

import { NewUser } from '../../models/userNew';
import { User } from '../../models/user';

import { GlobalState }   from '../../service/global-state';
import { HttpService }   from '../../service/http.service';


@Component({
    selector: 'grid',
	template:   `

					<div>
						<h2>grid.component.ts</h2>

						<search [(inputValue)]="searchVal"></search>

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


export class GridComponent implements OnInit { 

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
        		// console.log('from app - ' + this.usersCount);
            },
        err => console.error(err),
        // () => console.log('Contact list fetched...')
        );
	}

}


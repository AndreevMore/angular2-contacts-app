import { Component, OnInit } from '@angular/core';
import { HttpService } from './share/http.service';
import { User } from './share/user';
import { NewUser } from './share/userNew';
import { NavComponent }   from './nav.component';
import { GlobalState }   from './global-state';

import { Http, Response} from '@angular/http';
import { FormsModule }   from '@angular/forms';

@Component({
    selector: 'users-add-delete',
	template:   `

				<div class="col-lg-12 col-md-12"> 
					
					<div id="form-group">

						<label>Введите имя:</label>
			            <input class="form-control" type="text" [(ngModel)]="newUser.name" placeholder="name"  name="name" #name="ngModel" required />
						<div [hidden]="name.valid || name.untouched" class="alert alert-danger">
                          Не указано имя
                        </div>

						<label>Введите число</label>
						<input class="form-control" type="text" [(ngModel)]="newUser.password" placeholder="number" requiered #phone="ngModel" name="phone" pattern="[0-9]{12}" required	 />
 						<div [hidden]="phone.valid || phone.untouched" class="alert alert-danger">
                          Некорректный телефон
                        </div>

						<label>Введите дату</label>
						<input class="form-control" type="email" [(ngModel)]="newUser.email" placeholder="email" name="email" #email="ngModel" pattern="[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}" required />
						<div [hidden]="email.valid || email.untouched" class="alert alert-danger">
                          Некорректный email
                        </div>

						<div class = "center">
							<button class="btn btn-success" (click)="userAdd()" [disabled]="name.invalid || email.invalid || phone.invalid"  >Добавить</button>
							<button class="btn btn-danger" (click)="usersDeleteSelected()">Удалить выбранные</button>
							<button class="btn btn-info" (click)="usersConsolePrint()">Печать в консоль</button>
						</div>
					</div>
					
					<div class="panel panel-default" >
						<table class="table">
							<thead> 
								<tr>
									<th>#</th>
									<th>Name</th>
									<th>Number</th>
									<th>Email</th>
									<th>checkbox</th>
									<th>delete</th>
								</tr>
							</thead>
							<tbody>
							 	<tr *ngFor="let user of users; let i = index">
							 		<th scope="row">{{i+1}}</th>
							 		<td>{{user.name}}</td>
							 		<td>{{user.password}}</td>
							 		<td>{{user.email}}</td>
							 		<td><input type="checkbox" [(ngModel)]="user.selected"><span>++++</span></td>
							 		<th><button class="delete btn btn-default" (click)="userDelete(user); $event.stopPropagation()">x</button></th>
							 	</tr>
						</table>
					</div>
				</div>
				`,

    styles: [`

	    		
				input.ng-touched.ng-invalid 	{border:solid red 2px;}
		        input.ng-touched.ng-valid 		{border:solid green 2px;}

			    .center 						{ text-align: center; }

				button							{width: 33%; margin: 10px auto;}
	    		div 							{padding: 10px}

     		`]	,		
    providers: [HttpService]
})
export class UsersAddDeleteComponent implements OnInit { 
	users: User[] = [];
	arrAll;
    newUser: NewUser = new NewUser("", "", "");
    usersCount:number;

    constructor(private httpService: HttpService, private state: GlobalState) {}

	ngOnInit(){
        this.usersGet();

	}
	usersConsolePrint(){
		console.log(this.users);
	}

	usersGet(){
		this.httpService.usersGet()
            .subscribe((data: Response) => {
            	this.users=data.json();
        		this.usersCount=this.users.length;
        		this.state.notifyDataChanged('users:count',this.users.length);
            });
	}

	userAdd(){
		let newUser = {'name': this.newUser.name, 'password': this.newUser.password, 'email': this.newUser.email};
		this.httpService.userAdd(newUser).subscribe((data) => { this.usersGet() });
		this.newUser.name = this.newUser.password =	this.newUser.email="";
	}

	userDelete(user): void{
		let id = user._id;
		this.httpService.userDelete(id).subscribe((data) => { this.usersGet() });
	}

	usersDeleteSelected(){
		let selected = this.users.filter((x) => x.selected);
		for (var i = 0; i < selected.length; ++i) {
			console.log(selected[i]._id)
			this.httpService.userDelete(selected[i]._id).subscribe((data) => { this.usersGet() });
		}


	}

}
import { Component} from '@angular/core';
import { Http, Response} from '@angular/http';
import { GlobalState }   from './global-state';

import { HttpService } from './share/http.service';

import { User } from './share/user';
import 'rxjs/Rx' ;


@Component({
    selector: 'users-load-upload',
    template: `<h3>Load & Upload</h3>
				<div>
					<h4>select file</h4>
					<p><input type="file" name="f">
   					<input type="submit" value="Отправить" (click)="getFile(file)" ></p>
				</div>
				<div>
					<h4>save file</h4>
					<button class="btn btn-info" (click)="saveFile()">Печать в консоль</button>
				</div>
		
    `
    ,
    styles: [`



     		`]
})
export class UsersLoadUploadComponent {
	users: User[] = [];

constructor(private httpService: HttpService, private state: GlobalState) {}
	
	getFile(file){
		
	} 

	saveFile(){
		this.httpService.usersGet()
			.subscribe((data: Response) => {
			this.users=data.json();
			console.log(this.users);
			var objContent =  JSON.stringify(this.users);
			console.log(objContent);

		});
	}
}
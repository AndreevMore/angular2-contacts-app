import { Component} from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx' ;


import { User } from '../../models/user';

import { GlobalState }   from '../../service/global-state';

import { HttpService }   from '../../service/http.service';


@Component({
    selector: 'backup',
    template: ` 
					<div>
						<h2>backup.component.ts</h2>

		    			<h3>Load & Upload</h3>
						
						<div>
							<h4>select file</h4>
							<p><input type="file" name="f">
		   					<input type="submit" value="Отправить" (click)="getFile(file)" ></p>
						</div>

						<div>
							<h4>save file</h4>
							<button class="btn btn-info" (click)="saveFile()">from file to base</button>
						</div>
					</div>
    `
    ,
    styles: [`



     		`]
})
export class BackupComponent {
	users: User[] = [];

constructor(private httpService: HttpService, private state: GlobalState) {}
	
	getFile(file){
			console.log('getFile function');
		
	} 

	saveFile(){
		this.httpService.usersGet()
			.subscribe((data: Response) => {
			this.users=data.json();
			// console.log(this.users);
			var objContent =  JSON.stringify(this.users);
			// console.log(objContent);
		});
	}
}
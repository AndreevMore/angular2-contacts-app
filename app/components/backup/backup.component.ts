import { Component} from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx' ;

import { NewUser } from '../../models/userNew';
import { User } from '../../models/user';


import { GlobalState }   from '../../service/global-state';
import { HttpService }   from '../../service/http.service';
import { WindowRef } from '../../service/WindowRef';

@Component({
    selector: 'backup',
    template:   ` 
					<div>
						<h2>backup.component.ts</h2>

		    			<h3>Load & Upload</h3>
						
						<div>
							<h4>from file to base</h4>
							<p><input type="file" name="f">
		   					<input type="submit" value="Отправить" (click)="getFile(evt)" ></p>
						</div>

						<div>
							<h4> base to file</h4>
							<button class="btn btn-info" (click)="saveFile()">from base to file</button>
						</div>
					</div>
    			`,
    styles: [   `



     		`]
})
export class BackupComponent {
	users: User[] = [];
	newUser: NewUser = new NewUser("", "", "");
	constructor(private httpService: HttpService, private state: GlobalState, private winRef: WindowRef) {
		 console.log('Window object', winRef.nativeWindow);
	}
	userAdd(){
		let newUser = {'name': this.newUser.name, 'password': this.newUser.password, 'email': this.newUser.email};
		this.httpService.userAdd(newUser).subscribe((data) => {  });
		this.newUser.name = this.newUser.password =	this.newUser.email="";
	}
	saveFile(){
	// if (window.File && window.FileReader && window.FileList && window.Blob) {
    //      console.log('APIs are supported in this browser.');
	//    } else {
	//      alert('The File APIs are not fully supported in this browser.');
	//    }


		this.httpService.usersGet()
			.subscribe((data: Response) => {
			var textToWrite=JSON.stringify(data.json());
            
        var date = new Date();

        var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
        var fileNameToSaveAs ='backup ' + date.getFullYear() +'/'+  date.getMonth()+1 +'/'+ date.getDate() +'('+ date.getHours() +':'+ date.getMinutes() +')';
        // document.getElementById("inputFileNameToSaveAs").value;

        var downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "Download File";
        
        if (this.winRef.nativeWindow.webkitURL != null){
            // Chrome allows the link to be clicked
            // without actually adding it to the DOM.
            downloadLink.href = this.winRef.nativeWindow.webkitURL.createObjectURL(textFileAsBlob);
        } else {
            // Firefox requires the link to be added to the DOM
            // before it can be clicked.
            downloadLink.href = this.winRef.nativeWindow.URL.createObjectURL(textFileAsBlob);
            // downloadLink.onclick = destroyClickedElement;
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
        }
        downloadLink.click();

		});
	}

// getFile(evt){
// 	        //Retrieve the first (and only!) File from the FileList object
//        var f = evt.target.files[0];
//        var object = {};
//        if (f) {
//            var r = new FileReader();
//            r.onload = function (e) {
//                var contents = e.target.result;
//                var json = JSON.parse(contents);

//                for (var i = 0; i < json.length; i++) {
//                    object = json[i];
//                    let newObject = {name : object.name, password : object.password, email : object.email};
//                    this.userAdd(newObject);
//                }
//            }
//            r.readAsText(f);
//        } else {
//            alert("Failed to load file");
//        }
		
// } 


}
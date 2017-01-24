import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';

import { User } from '../../models/user';

import { HttpService }   from '../../service/http.service';
  

@Component({
    selector: 'cards',
    template: `
    			<div>
    				<h2>cards.component.ts</h2>
    				
    				<h3>Users card view</h3>

					
					<div class="flip-card active-card" *ngFor="let user of users; let k = index  " >
						<div class="card label-info">
					    	<h6>{{ k+1 }}</h6>
						</div>
						<div class="well">
						    <h1>Card {{user._id}}</h1>
						    <h2> {{user.name}}</h2>
						    <h3> {{user.password}}</h3>
						    <h4> {{user.email}}</h4>
						</div>
					</div>

				</div>

    `,
    styles: [`

    		:focus {outline:none !important;}
				::-moz-focus-inner {border:0 !important;}

				@keyframes flip-in {
				    from {transform: rotateY(-90deg);-webkit-transform: rotateY(-90deg);}
				    to {transform: rotateY(0deg);-webkit-transform: rotateY(0deg);}
				}
				@-webkit-keyframes flip-in {
				    from {transform: rotateY(-90deg);-webkit-transform: rotateY(-90deg);}
				    to {transform: rotateY(0deg);-webkit-transform: rotateY(0deg);}
				}
				@keyframes flip-out {
				    from {transform: rotateY(0deg);-webkit-transform: rotateY(0deg);}
				    to {transform: rotateY(90deg);-webkit-transform: rotateY(90deg);}
				}
				@-webkit-keyframes flip-out {
				    from {transform: rotateY(0deg);-webkit-transform: rotateY(0deg);}
				    to {transform: rotateY(90deg);-webkit-transform: rotateY(90deg);}
				}
				@keyframes soften {
				    from {opacity: 1;-webkit-opacity: 1;}
				}
				@-webkit-keyframes soften {
				    from {opacity: 1;-webkit-opacity: 1;}
				}

				div.flip-card {
				    transition: transform 1s;
				    display: none;
				}
				div.active-card {
				    display: block;
				    transform: rotateY(0deg);
				}
				div.flip-in {
				    animation: flip-in 1s ease-out;
				    -webkit-animation: flip-in 1s;
				}
				div.flip-out {
				    animation: flip-out 1s ease-in;
				    -webkit-animation: flip-out 1s;
				}

				.card {
				    width: 100%;
				    height: 150px;
				    overflow: hidden;
				    position: relative;
				    border-radius: 3px 3px 0 0;
				    transition: opacity 0.2s;
				    -webkit-transition: opacity 0.2s;
				}

				.card:hover {
				    animation: soften 0.2s;
				    opacity: 0.8;
				    cursor: pointer;
				}

				.card h6 {
				    display: block;
				    position: relative;
				    text-align: center;
				    margin-top: 50px;
				    font-size: 6em;
				}

				.card img {
				    position:absolute;
				    left: -100%;
				    right: -100%;
				    top: -100%;
				    bottom: -100%;
				    margin: auto; 
				    min-height: 100%;
				    min-width: 100%;
				}

				.full-card {
				    position: relative;
				    transition: all 1.2s;
				}

				.full-card .btn-fab {
				    float: right;
				    margin-top: -28px;
				    margin-right: 14px;
				}


     		`]
    
})

export class CardsComponent implements OnInit { 

	currentSortString: string = "name";
	searchVal: string = "";
	
    users: User[] = [];
    usersCount:number;

    constructor(private httpService: HttpService) {}

	ngOnInit(){
        this.usersGet();
	}
	
	usersGet(){
		this.httpService.usersGet()
            .subscribe((data: Response) => {
            	this.users=data.json();
        		this.usersCount=this.users.length;
        		// console.log('from app - ' + this.usersCount);
            },
        err => console.error(err),
        () => console.log('Contact list fetched...')
        );
	}

}


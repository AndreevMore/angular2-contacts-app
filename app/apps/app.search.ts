import { Component, Input, Output, EventEmitter } from '@angular/core';

				// <div class="col-lg-12 col-md-12 input-group"> 
				// 	  <input type="text" placeholder="Search place" (ngModel)="inputValue" (ngModelChange)="inputValueChange($event)" >
				// </div>

@Component({
    selector: 'search-component',
	template:   `
				  <input type="text" placeholder="Search place" [ngModel]="inputValue" (ngModelChange)="oninputChange($event)" />
				`,

    styles: [`
	    		input {
					display: block;
				    width: 100%;
				    padding: .5rem .75rem;
					margin-bottom: 1rem;
				    				    font-size: 1rem;
				    line-height: 1.25;
				    color: #464a4c;
				    background-color: #fff;
				    background-image: none;
				    -webkit-background-clip: padding-box;
				    background-clip: padding-box;
				    border: 1px solid rgba(0,0,0,.15);
				    border-radius: .25rem;
				    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
				    transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
				    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
				    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
				    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
				}
     		`]
})

export class SearchComponent {

	@Input() inputValue:string;
    @Output() inputValueChange = new EventEmitter<string>();
    oninputChange(model: string){
    	
        this.inputValue = model;
        this.inputValueChange.emit(model);
	}




}


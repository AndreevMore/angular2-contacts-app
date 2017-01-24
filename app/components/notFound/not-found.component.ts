import { Component} from '@angular/core';
  
@Component({
    selector: 'not-found',
    template: `
    			<div class='componentInMe'>
    				<h2>not-found.component.ts</h2>
    				<h3>Sorry, Page Not Found</h3>  <span>404 :)</span>
    			</div>
    			`
})
export class NotFoundComponent { }
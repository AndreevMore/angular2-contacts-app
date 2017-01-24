import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "search",
  // pure: false
})

export class SearchPipe implements PipeTransform {

// transform(value, args) {
// return value.filter(user => (user.name.includes('xc')))
// }

    transform(value, anotherValue?: string) {
      let val = anotherValue;
      return value.filter((user)=>{
        return user.name.includes(val) || user.password.includes(val) || user.email.includes(val)
      });
    }

}
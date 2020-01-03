import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {

 static removespace(control:AbstractControl): ValidationErrors | null{
       if((control.value as string).indexOf(" ") >= 0 ){     //for counting white spaces we use string methods
           return{removespace:true}
       }else{
           return null;
       }
  }
}                                                                        
//create class
//create static method
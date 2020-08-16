import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  registerform:FormGroup;
  constructor(private fb:FormBuilder,
    private service:AuthService) { 
    this.registerform=fb.group({
      UserName:['',Validators.required],
      Password:['',Validators.required],
      ConfirmPassword:['',Validators.required]
    },{validator:matchingFields('Password','ConfirmPassword')})
    console.log(matchingFields('Password','ConfirmPassword'));
  }

  onSubmit(){
    console.log('register');
    delete this.registerform.value.ConfirmPassword;
    this.service.register(this.registerform.value).subscribe((data:any)=>{
      console.log("Data ",data);
      localStorage.setItem('userName',data.userName);
      localStorage.setItem('tokenvalue',data.token);
    },
    (error)=>alert(error.error.message));
  }
}
  function matchingFields(field1,field2){
    return form=>{
      if(form.controls[field1].value!==form.controls[field2].value)
      return {matchingFields:true};
    }

  

}

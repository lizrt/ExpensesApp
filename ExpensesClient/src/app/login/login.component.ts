import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
loginData={
  userName:'',
  password:''
}
  constructor(private service:AuthService,
    private router:Router) { }

  login(){
    console.log(this.loginData);
    this.service.login(this.loginData).subscribe((data:any)=>{
      console.log("Data",data);
      localStorage.setItem('userName',data.userName);
      localStorage.setItem('tokenvalue',data.token);
this.router.navigate(['/entries']);
    },
    (error)=>alert(error.error.message));
    
  }

}

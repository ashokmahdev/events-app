import { Component, OnInit,Inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { TOASTER_TOKEN ,Toastr}  from '../../common/toastr.service';
import { ViewContainerRef } from '@angular/core';
 import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

//constructor(private authService:AuthService, private router:Router , @Inject(TOASTER_TOKEN) private toastr : Toastr) { }
  //constructor(private authService:AuthService, private router:Router ) { }
   constructor(private authService:AuthService, private router:Router, public toastr: ToastsManager, vcr: ViewContainerRef) {
     this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
  }

  login(formValues){
    //console.log(formValues);
    this.authService.loginUser(formValues.userName, formValues.password);
    //this.toastr.success('Profile Saved')
     this.toastr.success('You are awesome!', 'Success!');
    //this.router.navigate(['events']);
  }

  cancel(){
    this.router.navigate(['events']);
  }
  
  
}

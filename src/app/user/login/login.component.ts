import { Component, OnInit,Inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { TOASTER_TOKEN ,Toastr}  from '../../common/toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router , @Inject(TOASTER_TOKEN) private toastr : Toastr) { }

  ngOnInit() {
  }

  login(formValues){
    //console.log(formValues);
    this.authService.loginUser(formValues.userName, formValues.password);
    this.toastr.success('Profile Saved')
    this.router.navigate(['events']);
  }

  cancel(){
    this.router.navigate(['events']);
  }
}

import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
//import { TOASTER_TOKEN ,Toastr}  from '../../common/toastr.service';
import { ViewContainerRef } from '@angular/core';
 import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  private firstName: FormControl;
  private lastName: FormControl;

    
  //constructor(private auth:AuthService, private router:Router, @Inject(TOASTER_TOKEN) private toastr : Toastr) { }
  //constructor(private auth:AuthService, private router:Router) {
  constructor(private auth:AuthService, private router:Router, public toastr: ToastsManager, vcr: ViewContainerRef) { 
     this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.firstName = new FormControl(this.auth.currentUser.firstName, 
                        [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  cancel(){
    this.router.navigate(['events']);
  }

  saveProfile(formValues){
    if(this.profileForm.valid){
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
      //this.router.navigate(['events']);
      //this.toastr.success('Profile Saved')
       this.toastr.success('You are awesome!', 'Success!');
    }    
  }

  validateLastName(){
    return this.lastName.valid || this.lastName.untouched;
  }

  
  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched;
  }

}

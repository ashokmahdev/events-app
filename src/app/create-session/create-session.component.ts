import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from '../model/session.model';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();

  newSessionForm: FormGroup;

  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;


  constructor() { }

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', 
                    [Validators.required, Validators.maxLength(200), this.restrictedWords]);

    this.newSessionForm = new FormGroup({
      name:  this.name,
      presenter:  this.presenter,
      duration:  this.duration,
      level:  this.level,
      abstract:  this.abstract,
    });

  }

  saveSession(formvalues){
    //console.log(formvalues);
    let session:ISession = {
      id: undefined,
      name: formvalues.name,
      presenter: formvalues.presenter,
      duration: +formvalues.duration,
      level: formvalues.level,
      abstract: formvalues.abstract,
      voters:[]
    };

    //console.log(formvalues);

    this.saveNewSession.emit(session);
  }

  cancel(){
    this.cancelAddSession.emit();
  }

  private restrictedWords(control: FormControl) :{[key: string] : any}
  {
    return control.value.includes('foo')
    ? {'restrictedWords': 'foo'} : null
  }

}

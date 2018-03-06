import {Component, Input, ViewChild, ElementRef,Inject} from '@angular/core'
import {JQ_TOKEN} from './jQuery.service'

@Component ({
    selector : 'simple-modal',
    template : `
            <div id="{{elementId}}" #modalContainer class="modal fade" tabindex="-1" >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                        <h4 class="modal-title"> {{title}}</h4>
                    </div>
                    <div class="modal-body" (click)="closeModal()">
                        <ng-content></ng-content>
                    </div>  
                  </div>
                </div>  
            </div>
    `,
    styles : [`
        .modal-body {height : 250px ; overflow-y : scroll;}
    `]
})


export class SimpleModalComponent {
    @Input() title :string;
    @Input() elementId :string;
    @Input() closeOnBodyClick :string;    
    @ViewChild('modalContainer') containerEl : ElementRef;
     
    constructor( @Inject(JQ_TOKEN) private $: any){   
    }
     //1) Get a handle to the component(modal) which we want to close by naming it #modalContainer
     //2) import ViewChild from angular core and create a containerEl view child of type ElementRef 
            //, previously we did this in constructor of modal-trigger
     //3) Import Jquery Token and inject dependency using constructor with @Inject
     //4) this.$(this.containerEl.nativeElement).modal('hide');
     
     // NOTE : viewchid way is better thank accesing using getElementByDomName
     closeModal(){
         if(this.closeOnBodyClick.toLocaleLowerCase() === "true"){
              this.$(this.containerEl.nativeElement).modal('hide');
         }
     }
}
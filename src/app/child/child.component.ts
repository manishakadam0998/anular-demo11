
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  childMessage:string="";
@Input()
  dataRecievedFromParentComponent!:string;

 @Output() sendData:EventEmitter<string>=new EventEmitter<string>();

 sendparent(){
  this.sendData.emit(this.childMessage)



 }
}

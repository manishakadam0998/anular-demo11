import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-insurance',
  templateUrl: './child-insurance.component.html',
  styleUrls: ['./child-insurance.component.css']
})
export class ChildInsuranceComponent {

  insuranceType:string="";
@Input() 
list!:number;
@Input()
list1!:number;
  @Output() sendInsurance:EventEmitter< string>= new EventEmitter<string>();

  selectInsuranceType(){
    this.sendInsurance.emit(this.insuranceType)
  }
}

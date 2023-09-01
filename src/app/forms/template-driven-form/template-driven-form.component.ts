import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  save(form:NgForm){
   console.log(form);
   console.log(form.value);
   console.log(form.dirty);
   console.log(form.pristine);


  }
}

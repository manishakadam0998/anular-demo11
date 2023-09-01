import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveExampleDirective } from './directive1/directive-example.directive';
import { StructuralComponent } from './structural/structural.component';
import { MyPipePipe } from './pipe/my-pipe.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { ParentInsuranceComponent } from './parent-insurance/parent-insurance.component';
import { ChildInsuranceComponent } from './child-insurance/child-insurance.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductList11Component } from './product-list11/product-list11.component';
import { TemplateDrivenFormComponent } from './forms/template-driven-form/template-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveExampleDirective,
    StructuralComponent,
    MyPipePipe,
    ParentComponent,
    ChildComponent,
    ProductListComponent,
    InputFieldComponent,
    ParentInsuranceComponent,
    ChildInsuranceComponent,
    CreateProductComponent,
    ProductList11Component,
    TemplateDrivenFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

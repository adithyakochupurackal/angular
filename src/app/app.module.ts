import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NewReactiveFormComponent } from './new-reactive-form/new-reactive-form.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';



@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    HttpComponent,
    ReactiveformComponent,
    NewReactiveFormComponent,
    FormbuilderComponent,
    
  

    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
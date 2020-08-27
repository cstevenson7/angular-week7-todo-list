import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoHomeComponent } from './todo-home/todo-home.component';
import { ReferenceCodeComponent } from './reference-code/reference-code.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

//all these imports just give us access to these modules to actually use it we have to add 
//below in the @ngModule bit
//Adding Dependency Injection import for the sahred module
import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [
    AppComponent,
    TodoHomeComponent,
    ReferenceCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

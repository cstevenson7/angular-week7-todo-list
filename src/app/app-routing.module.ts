import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Reference } from '@angular/compiler/src/render3/r3_ast';
import { ReferenceCodeComponent } from './reference-code/reference-code.component';
import { TodoHomeComponent } from './todo-home/todo-home.component';
//constant Routes type Routes that has a list

const routes: Routes = [
{
  path:'reference', component:ReferenceCodeComponent
},
{
path:'home', component:TodoHomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

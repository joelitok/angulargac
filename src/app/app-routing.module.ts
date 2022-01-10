import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployesComponent } from './components/employes/employes.component';
import { WorkunitComponent } from './components/workunit/workunit.component';

const routes: Routes = [
  {path:"employe",component:EmployesComponent},
  {path:"workunits",component:WorkunitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

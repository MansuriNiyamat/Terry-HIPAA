import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HipaaComponent} from './hipaa/hipaa.component';
 
const routes: Routes = [
  {
    path: '',
    component: HipaaComponent,
    children: [
      // {
      //   path: '',
      //   component: CustomersComponent,
      // },
      // {
      //   path: 'vehicles',
      //   component: VehiclesComponent,
      // },
      // { path: '', redirectTo: 'customers', pathMatch: 'full' },
      // { path: '**', redirectTo: 'customers', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HipaaRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'hipaa',
    loadChildren: () =>
      import('./hipaa/hipaa.module').then((m) => m.HipaaModule),
  },
  { path: '', redirectTo: 'hipaa', pathMatch: 'full' },
  { path: '**', redirectTo: 'hipaa', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HipaaComponent } from './hipaa/hipaa.component';
import {HipaaRoutingModule} from './hipaa-routing.module';
import { DemoNgZorroAntdModule } from './../ng-zorro-antd.module';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HipaaComponent],
  imports: [
    CommonModule,
    HipaaRoutingModule,
    DemoNgZorroAntdModule,
    AgGridModule.withComponents([]),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HipaaModule { }

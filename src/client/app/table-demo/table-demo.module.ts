import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDemoComponent } from './table-demo.component';
import { TableDemoRoutingModule } from './table-demo-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TableDataService } from '../shared/table-data/index';
import { Angular2DataTableModule } from 'angular2-data-table/release/index';

@NgModule({
  imports: [Angular2DataTableModule, CommonModule, TableDemoRoutingModule, SharedModule],
  declarations: [TableDemoComponent],
  exports: [TableDemoComponent],
  providers: [TableDataService]
})
export class TableDemoModule { }

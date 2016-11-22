import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableDemoComponent } from './table-demo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'table-demo', component: TableDemoComponent }
    ])
  ],
  exports: [RouterModule]
})
export class TableDemoRoutingModule { }

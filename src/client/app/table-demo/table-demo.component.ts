import { Component, OnInit } from '@angular/core';
import {TableDataService} from "../shared/table-data/table-data.service";

@Component({
  moduleId: module.id,
  selector: 'sd-table-demo',
  templateUrl: 'table-demo.component.html'
})
export class TableDemoComponent implements OnInit {

  errorMessage: string;

  tableData: any[] = [];

  rows: any[] = [];
  columns = [
    { name: 'ID' },
    { name: 'Name' }
  ];

  /**
   * @param {TableDataService} tableDataService - The injected TableDataService.
   */
  constructor(public tableDataService: TableDataService) {}

  /**
   * Get the tabeldata OnInit
   */
  ngOnInit() {
    this.getTableData();
  }

  /**
   * Handle the tableDataService observable
   */
  getTableData() {
    this.tableDataService.get()
      .subscribe(
        tableData => {
          this.rows = tableData;
          this.tableData = tableData;
        },
        error => this.errorMessage = <any>error
      );
  }

  search(event) {
    let val = event.target.value;

    // filter our data
    let tableData = this.tableData.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = tableData;
  }

}

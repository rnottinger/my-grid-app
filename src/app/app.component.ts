import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app';
  columnDefs;
  rowData;

  constructor() {
    // this.gridOptions = <GridOptions>{
    //   context: {
    //     componentParent: this
    //   },
    //   headerHeight: 30,
    //   rowHeight: 30,
    //   suppressClickEdit: false,
    //   rowSelection: 'multiple',
    //   onCellValueChanged: function (params) {
    //     // notice that the data always contains the keys rather than values after editing
    //     console.log("onCellValueChanged: ", params);
    //   }

    // }

    this.columnDefs = [
        {headerName: "Make", field: "make", width: 300},
        {headerName: "Model", field: "model", width: 300},
        {headerName: "Price", field: "price", width: 300}
    ];

    this.rowData = [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ];
  }
}

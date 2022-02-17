import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent } from './dialog/dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

type Option = {
  name: string;
};

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  constructor(
    private snackbar: MatSnackBar,
    private matDialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer
  ) {}
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  title = 'ng-material';
  notifications = 28;
  sidenavOpened = true;
  tabSelectedIndex = 0;
  selectValue = ['angular'];
  optionsAutocomplete = ['angular', 'react', 'vue'];
  optionsObjectAutocomplete: Option[] = [
    { name: 'angular' },
    { name: 'react' },
    { name: 'vue' },
  ];
  checkboxChecked: boolean = false;
  radioValue: string = '2';
  minDate = new Date();
  maxDate = new Date(2022, 1, 21);

  showSpinner = false;
  loadData() {
    this.showSpinner = true;
    setTimeout(() => (this.showSpinner = false), 5000);
  }

  log(status: string | number | null) {
    console.log(status);
  }

  displaySelect(option: any) {
    return option ? option.name : undefined;
  }

  radioChange(value: string) {
    this.radioValue = value;
    console.log(value);
  }

  dateFilter(date: Date | null) {
    const d = date?.getDay();
    return d !== 0 && d !== 6;
  }

  openSnackbar(message: string, action: string) {
    const snackbarRef = this.snackbar.open(message, action, { duration: 2000 });

    snackbarRef.afterDismissed().subscribe(() => {
      console.log('snackbar dismissed');
    });

    snackbarRef.onAction().subscribe(() => {
      console.log('snackbar on action');
    });
  }

  openDialog() {
    const dialogRef = this.matDialog.open(DialogComponent, {
      data: { name: 'Testing' },
      width: '50rem',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`dialog closed: ${result}`);
    });
  }

  logTableData(row: any) {
    console.log(row);
  }

  applyFilter(filter: any) {
    this.dataSource.filter = (filter.target.value as string)
      .trim()
      .toLowerCase();
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    console.log(sortState);
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

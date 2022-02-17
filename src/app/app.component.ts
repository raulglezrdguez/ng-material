import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent } from './dialog/dialog.component';

type Option = {
  name: string;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private snackbar: MatSnackBar, private matDialog: MatDialog) {}

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
}

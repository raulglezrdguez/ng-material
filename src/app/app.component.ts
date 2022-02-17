import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-material';
  notifications = 28;
  sidenavOpened = true;
  tabSelectedIndex = 0;
  selectValue = ['angular'];

  showSpinner = false;
  loadData() {
    this.showSpinner = true;
    setTimeout(() => (this.showSpinner = false), 5000);
  }

  log(status: string | number | null) {
    console.log(status);
  }
}

import { Component } from '@angular/core';

type Option = {
  name: string;
};
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
  optionsAutocomplete = ['angular', 'react', 'vue'];
  optionsObjectAutocomplete: Option[] = [
    { name: 'angular' },
    { name: 'react' },
    { name: 'vue' },
  ];
  checkboxChecked: boolean = false;
  radioValue: string = '2';

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
}

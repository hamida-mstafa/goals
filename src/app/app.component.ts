// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Goals';
// }
// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html'
//
// })
// export class AppComponent {
//   goal = 'Watching venom';
// }
import { Component } from '@angular/core';
import {Goal} from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  //moved to goal.ts
  // goals: [
  //   new Goal(1,'Watch Finding Nemo'),
  //      new Goal(2,'Buy Cookies'),
  //      new Goal(3, 'Get new Phone Case'),
  //      new Goal(4, 'Get Dog Food'),
  //      new Goal(5, 'Solve math homework'),
  //      new Goal(6, 'Plot my world domination plan'),
  //      ]

  constructor(){  }
}

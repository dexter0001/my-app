import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  root: any;
  el: any;
  rootDiv: any;

  constructor () {
  }


  addProgressBar() {

    this.rootDiv = document.getElementById('root-container');
    // create progress bar element
    const bar = document.createElement('progress');
    this.rootDiv.append(bar); 
    this.fillTheBar(bar);

    // created line break element
    const linebreak = document.createElement("br");
    this.rootDiv.append(linebreak);

  };

  fillTheBar(el: any) {

    setTimeout(() => {
      el.setAttribute('value', '50');
    }, 1000);
  
    // setTimeout(() => {
    //   el.setAttribute('value', '100');
    // }, 10000);

  }

}



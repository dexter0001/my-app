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

  items: any[] = [];
  uploadQueue = new Queue(this.items);


  constructor () {
  }

  addProgressBar() {

    this.rootDiv = document.getElementById('root-container');
    
    // create progress bar
    const bar = document.createElement('progress');
    bar.style.setProperty('width', '100%');
    
    // created line break
    const linebreak = document.createElement("br");
    
    // Push it to QUEUE 
    this.uploadQueue.enque(bar);
    
    for (let i = 0; i < this.uploadQueue.getItems().length; i++) {
      do {
        let element = this.uploadQueue.getItems();
        this.rootDiv.append(element[i]);
        this.fillTheBar(element[i]);
        this.uploadQueue.dequeue();
        this.rootDiv.append(linebreak);
      } while (i != this.uploadQueue.getItems().length);
    }

  };

  fillTheBar(el: any) {

    setTimeout(() => {
      el.setAttribute('value', '100');
    }, 2000);

  }

}

class Queue {
  items: any[];
  constructor(params: any[]) {
    this.items = params;
  }

  enque(item: any) {
    this.items.push(item);
  }

  dequeue() {
    // return and move first element of the queue
    return this.items.shift();
  }

  getItems() {
    return this.items;
  }
}

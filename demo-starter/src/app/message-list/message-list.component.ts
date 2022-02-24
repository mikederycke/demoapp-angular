import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  
  counter: number = 0;
  allowNewMessage = true;
  clickedMessage = `I have clicked this button ${this.counter} times!`

  onCreateMessage(){
    // Update the counter
    this.counter += 1;
    this.clickedMessage = `I have clicked this button ${this.counter} times!`
  }
  constructor() { }

  ngOnInit(): void {
  }

}

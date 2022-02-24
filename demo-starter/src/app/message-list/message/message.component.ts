import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  //Typing in typescript with :
  message: String = "This is a logical message"
  giveStatus(){
    return "Statusupdate: OK!"
  }


  
  constructor() { }

  ngOnInit(): void {
  }

}

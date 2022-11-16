import { Component, OnInit } from '@angular/core';
import { MessageService } from 'services/message.service';



@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

   message: any;
  constructor(private _messageService:MessageService) { }
 
  ngOnInit(): void {
    this._messageService.getMessage()
    .subscribe((data) => {
      console.log(data);
      this.message = data;
    })
  }

}

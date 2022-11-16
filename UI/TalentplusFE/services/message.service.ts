import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMessage } from 'Interfaces/imessage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private Client:HttpClient) { }
  private url = "https://localhost:5001/api/message";
  getMessage():Observable<any>{
    return this.Client.get<IMessage>(this.url);
  }
}

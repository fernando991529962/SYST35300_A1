import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageShareService {

  constructor() { }

  message = new BehaviorSubject('');
  sharedMessage = this.message.asObservable();

  setMessage(msg) {
    this.message.next(msg);
  }
}

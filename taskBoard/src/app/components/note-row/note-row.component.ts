import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'; // for receiving a message from parent
import { Output, EventEmitter } from '@angular/core'; // for sending a message to parent

@Component({
  selector: 'app-note-row',
  templateUrl: './note-row.component.html',
  styleUrls: ['./note-row.component.scss']
})
export class NoteRowComponent implements OnInit {

  @Input() noteText: string; // get param from parent


  // send string to parent:
  message = 'i am your child';
  @Output() MessageEvent = new EventEmitter<string>();

  sendMessageToParent() {
    this.MessageEvent.emit(this.message);
  }

  constructor() { }

  ngOnInit() {
  }

}

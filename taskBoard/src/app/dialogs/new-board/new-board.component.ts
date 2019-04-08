import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
// import { DialogData } from 'src/app/components/main-page/main-page.component'; // the interface we created
import { Iboard } from '../../interfaces/iboard';

@Component({
  selector: 'app-new-board',
  templateUrl: './new-board.component.html',
  styleUrls: ['./new-board.component.scss']
})
export class NewBoardComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewBoardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Iboard) {}

    // if we don't want to use an interface we will use this:
    // constructor(public thisDialogRef: MdDialogRef<NewBoardComponent>, @Inject(MD_DIALOG_DATA) public data: string) { }

  onNoClick(): void {
    this.dialogRef.close(); // case of cancel click the result will be an empty string.
  }

  ngOnInit() {
  }

}

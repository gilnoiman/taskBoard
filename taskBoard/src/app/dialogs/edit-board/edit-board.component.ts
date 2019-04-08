import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
// import { DialogData } from 'src/app/components/main-page/main-page.component'; // the interface we created
import { Iboard } from '../../interfaces/iboard';


@Component({
  selector: 'app-edit-board',
  templateUrl: './edit-board.component.html',
  styleUrls: ['./edit-board.component.scss']
})
export class EditBoardComponent implements OnInit {

  @ViewChild('boardName') boardName: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<EditBoardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Iboard) {}

    // if we don't want to use an interface we will use this:
    // constructor(public thisDialogRef: MdDialogRef<NewBoardComponent>, @Inject(MD_DIALOG_DATA) public data: string) { }

  onCancelClick(): void {
    this.dialogRef.close(); // case of cancel click the result will be an empty string.
  }

  onOkClick(): void {
    const result: object = {
      'Boardname': this.boardName.nativeElement.value,
      'BoardNum' : this.data.id
    };
    this.dialogRef.close(result); // case of cancel click the result will be an empty string.
  }

  ngOnInit() {
  }

}

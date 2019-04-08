import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NewBoardComponent } from 'src/app/dialogs/new-board/new-board.component';
import { EditBoardComponent } from 'src/app/dialogs/edit-board/edit-board.component';
import { BoardsService } from '../../boards.service';
import { Iboard } from 'src/app/interfaces/iboard';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  boardsList$: Iboard[];

  constructor(public dialog: MatDialog, private data: BoardsService) { }

  ngOnInit() {
    this.getBoardList(); // gets all previos boards data from the service
  }

  // gets all previos boards data from the service
  getBoardList() {
    this.data.getBoardListData().subscribe(
      data => {
        this.boardsList$ = data;
      }
    );
  }

  // Create New Board Dialog
  createNewBoard = function () {
    const dialogRef = this.dialog.open(NewBoardComponent, {
      width: '400px',
      data: { name: this.name, id: this.id } // 'This text is passed into the dialog'
    });

    // after closing the dialog:
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newBoard: Iboard = {
          id: this.boardsList$.length,
          name: result
        };

        this.boardsList$.push(newBoard);

        this.data.setLocalStorageBoards(this.boardsList$); // save the change in local storage
      }
    });
  };

  // Edit Board Dialog
  editBoard = function (boardNum) {
    event.stopPropagation(); // this is here to prevent the page from redirecting to another route (the parent click)

    // open dialog:
    const dialogRef = this.dialog.open(EditBoardComponent, {
      width: '400px',
      data: { name: this.boardsList$[boardNum].name, boardId: this.boardsList$[boardNum].id } // 'This text is passed into the dialog'
    });

    // after closing the dialog:
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.Boardname) {
        this.boardsList$[boardNum].name = result.Boardname;

        // update the local storage:
        this.data.setLocalStorageBoards(this.boardsList$);
      }
    });
  };


  deleteLocalStorage = function () {
    this.data.deleteLocalStorageBoards();

    // gets all previous boards data from the service
    this.getBoardList();
  };

}

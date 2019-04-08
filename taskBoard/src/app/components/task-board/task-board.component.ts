import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NewBoardComponent } from 'src/app/dialogs/new-board/new-board.component';
import { EditBoardComponent } from 'src/app/dialogs/edit-board/edit-board.component';
import { NotesService } from '../../notes.service';
import { Inotes } from 'src/app/interfaces/inotes';
import { ActivatedRoute } from '@angular/router';
// import { NoteRowComponent } from '../../components/note-row/note-row.component';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {

  boardId: string;
  notesList$: Inotes[];
  childsMessage: string;

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private data: NotesService) { }

  ngOnInit() {
    // get the boardId from the url routing
    this.route.paramMap.subscribe(params => {
      this.boardId = params.get('boardId');
    });

    // gets all previos notes data from the service
    this.data.getNotesListData().subscribe(
      data => {
        this.notesList$ = data;
      }
    );
  }

  receiveMessageFromChild ($event) {
    this.childsMessage = $event;
  }


}

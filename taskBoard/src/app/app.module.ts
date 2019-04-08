import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog'; // added for dialog
import {MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material'; // added for dialog
import { FormsModule } from '@angular/forms';
import { NewBoardComponent } from './dialogs/new-board/new-board.component';
import { EditBoardComponent } from './dialogs/edit-board/edit-board.component';
import { TaskBoardComponent } from './components/task-board/task-board.component';
import { HttpClientModule } from '@angular/common/http';
import { NoteRowComponent } from './components/note-row/note-row.component'; // for http requests

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainHeaderComponent,
    NewBoardComponent,
    EditBoardComponent,
    TaskBoardComponent,
    NoteRowComponent, // added for dialog
  ],

 // added for dialog
  entryComponents: [
    NewBoardComponent,
    EditBoardComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule, // added for dialog
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

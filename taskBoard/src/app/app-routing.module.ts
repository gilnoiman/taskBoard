import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TaskBoardComponent } from './components/task-board/task-board.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },

  {
    path: 'main-page',
    component: MainPageComponent
  },

  {
    path: 'task-board/:boardId',
    component: TaskBoardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

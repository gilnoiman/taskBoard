import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteRowComponent } from './note-row.component';

describe('NoteRowComponent', () => {
  let component: NoteRowComponent;
  let fixture: ComponentFixture<NoteRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

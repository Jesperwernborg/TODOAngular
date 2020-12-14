import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDoComponent } from './todo-do.component';

describe('TodoDoComponent', () => {
  let component: TodoDoComponent;
  let fixture: ComponentFixture<TodoDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

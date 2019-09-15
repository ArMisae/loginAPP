import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumntriggerComponent } from './columntrigger.component';

describe('ColumntriggerComponent', () => {
  let component: ColumntriggerComponent;
  let fixture: ComponentFixture<ColumntriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumntriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumntriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

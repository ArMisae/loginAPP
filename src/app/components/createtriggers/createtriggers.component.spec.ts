import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetriggersComponent } from './createtriggers.component';

describe('CreatetriggersComponent', () => {
  let component: CreatetriggersComponent;
  let fixture: ComponentFixture<CreatetriggersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetriggersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetriggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

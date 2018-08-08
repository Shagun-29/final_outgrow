import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ltd1Component } from './ltd-1.component';

describe('Ltd1Component', () => {
  let component: Ltd1Component;
  let fixture: ComponentFixture<Ltd1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ltd1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ltd1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

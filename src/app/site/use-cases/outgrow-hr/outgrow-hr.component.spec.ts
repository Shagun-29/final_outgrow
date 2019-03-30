import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgrowHrComponent } from './outgrow-hr.component';

describe('OutgrowHrComponent', () => {
  let component: OutgrowHrComponent;
  let fixture: ComponentFixture<OutgrowHrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutgrowHrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutgrowHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

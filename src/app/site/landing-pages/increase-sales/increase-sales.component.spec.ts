import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseSalesComponent } from './increase-sales.component';

describe('IncreaseSalesComponent', () => {
  let component: IncreaseSalesComponent;
  let fixture: ComponentFixture<IncreaseSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncreaseSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

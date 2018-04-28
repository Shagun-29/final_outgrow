import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseRoiComponent } from './increase-roi.component';

describe('IncreaseRoiComponent', () => {
  let component: IncreaseRoiComponent;
  let fixture: ComponentFixture<IncreaseRoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncreaseRoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseRoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

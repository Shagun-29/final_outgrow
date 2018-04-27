import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseConversionsComponent } from './increase-conversions.component';

describe('IncreaseConversionsComponent', () => {
  let component: IncreaseConversionsComponent;
  let fixture: ComponentFixture<IncreaseConversionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncreaseConversionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseConversionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

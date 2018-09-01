import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceQuizesComponent } from './ecommerce-quizes.component';

describe('EcommerceQuizesComponent', () => {
  let component: EcommerceQuizesComponent;
  let fixture: ComponentFixture<EcommerceQuizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommerceQuizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaGeneratorComponent } from './idea-generator.component';

describe('IdeaGeneratorComponent', () => {
  let component: IdeaGeneratorComponent;
  let fixture: ComponentFixture<IdeaGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

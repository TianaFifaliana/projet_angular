import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleVariableClassique } from './exemple-variable-classique';

describe('ExempleVariableClassique', () => {
  let component: ExempleVariableClassique;
  let fixture: ComponentFixture<ExempleVariableClassique>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExempleVariableClassique],
    }).compileComponents();

    fixture = TestBed.createComponent(ExempleVariableClassique);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

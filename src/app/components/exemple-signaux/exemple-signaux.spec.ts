import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleSignaux } from './exemple-signaux';

describe('ExempleSignaux', () => {
  let component: ExempleSignaux;
  let fixture: ComponentFixture<ExempleSignaux>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExempleSignaux],
    }).compileComponents();

    fixture = TestBed.createComponent(ExempleSignaux);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleSignaucCrud } from './exemple-signauc-crud';

describe('ExempleSignaucCrud', () => {
  let component: ExempleSignaucCrud;
  let fixture: ComponentFixture<ExempleSignaucCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExempleSignaucCrud],
    }).compileComponents();

    fixture = TestBed.createComponent(ExempleSignaucCrud);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

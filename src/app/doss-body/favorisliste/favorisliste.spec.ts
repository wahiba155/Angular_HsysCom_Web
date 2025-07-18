import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Favorisliste } from './favorisliste';

describe('Favorisliste', () => {
  let component: Favorisliste;
  let fixture: ComponentFixture<Favorisliste>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Favorisliste]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Favorisliste);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

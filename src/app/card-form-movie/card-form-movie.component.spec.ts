import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormMovieComponent } from './card-form-movie.component';

describe('CardFormMovieComponent', () => {
  let component: CardFormMovieComponent;
  let fixture: ComponentFixture<CardFormMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFormMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFormMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

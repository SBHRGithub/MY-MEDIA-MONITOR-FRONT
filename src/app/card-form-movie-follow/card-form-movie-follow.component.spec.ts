import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormMovieFollowComponent } from './card-form-movie-follow.component';

describe('CardFormMovieFollowComponent', () => {
  let component: CardFormMovieFollowComponent;
  let fixture: ComponentFixture<CardFormMovieFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFormMovieFollowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFormMovieFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

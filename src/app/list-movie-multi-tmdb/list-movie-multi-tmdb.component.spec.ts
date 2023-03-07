import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMovieMultiTmdbComponent } from './list-movie-multi-tmdb.component';

describe('ListMovieMultiTmdbComponent', () => {
  let component: ListMovieMultiTmdbComponent;
  let fixture: ComponentFixture<ListMovieMultiTmdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMovieMultiTmdbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMovieMultiTmdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

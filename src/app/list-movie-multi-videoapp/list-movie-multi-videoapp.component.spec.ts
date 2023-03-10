import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMovieMultiVideoappComponent } from './list-movie-multi-videoapp.component';

describe('ListMovieMultiVideoappComponent', () => {
  let component: ListMovieMultiVideoappComponent;
  let fixture: ComponentFixture<ListMovieMultiVideoappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMovieMultiVideoappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMovieMultiVideoappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

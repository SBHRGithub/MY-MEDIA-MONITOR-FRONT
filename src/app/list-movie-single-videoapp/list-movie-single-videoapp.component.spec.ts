import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMovieSingleVideoappComponent } from './list-movie-single-videoapp.component';

describe('ListMovieSingleVideoappComponent', () => {
  let component: ListMovieSingleVideoappComponent;
  let fixture: ComponentFixture<ListMovieSingleVideoappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMovieSingleVideoappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMovieSingleVideoappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

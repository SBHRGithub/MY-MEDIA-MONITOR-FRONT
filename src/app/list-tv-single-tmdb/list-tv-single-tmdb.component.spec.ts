import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTvSingleTmdbComponent } from './list-tv-single-tmdb.component';

describe('ListTvSingleTmdbComponent', () => {
  let component: ListTvSingleTmdbComponent;
  let fixture: ComponentFixture<ListTvSingleTmdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTvSingleTmdbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTvSingleTmdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

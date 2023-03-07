import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTvMultiTmdbComponent } from './list-tv-multi-tmdb.component';

describe('ListTvMultiTmdbComponent', () => {
  let component: ListTvMultiTmdbComponent;
  let fixture: ComponentFixture<ListTvMultiTmdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTvMultiTmdbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTvMultiTmdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

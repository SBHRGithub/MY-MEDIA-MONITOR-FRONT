import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarTvComponent } from './searchbar-tv.component';

describe('SearchbarTvComponent', () => {
  let component: SearchbarTvComponent;
  let fixture: ComponentFixture<SearchbarTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbarTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchbarTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

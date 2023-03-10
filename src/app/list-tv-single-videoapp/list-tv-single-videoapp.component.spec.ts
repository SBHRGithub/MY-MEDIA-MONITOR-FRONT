import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTvSingleVideoappComponent } from './list-tv-single-videoapp.component';

describe('ListTvSingleVideoappComponent', () => {
  let component: ListTvSingleVideoappComponent;
  let fixture: ComponentFixture<ListTvSingleVideoappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTvSingleVideoappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTvSingleVideoappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

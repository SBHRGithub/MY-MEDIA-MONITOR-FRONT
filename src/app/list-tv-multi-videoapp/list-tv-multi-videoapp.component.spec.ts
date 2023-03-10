import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTvMultiVideoappComponent } from './list-tv-multi-videoapp.component';

describe('ListTvMultiVideoappComponent', () => {
  let component: ListTvMultiVideoappComponent;
  let fixture: ComponentFixture<ListTvMultiVideoappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTvMultiVideoappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTvMultiVideoappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

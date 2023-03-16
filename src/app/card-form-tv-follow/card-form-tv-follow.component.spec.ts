import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormTvFollowComponent } from './card-form-tv-follow.component';

describe('CardFormTvFollowComponent', () => {
  let component: CardFormTvFollowComponent;
  let fixture: ComponentFixture<CardFormTvFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFormTvFollowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFormTvFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

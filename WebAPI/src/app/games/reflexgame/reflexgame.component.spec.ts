import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflexgameComponent } from './reflexgame.component';

describe('ReflexgameComponent', () => {
  let component: ReflexgameComponent;
  let fixture: ComponentFixture<ReflexgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflexgameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflexgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

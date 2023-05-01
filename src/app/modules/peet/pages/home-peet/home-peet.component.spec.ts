import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePeetComponent } from './home-peet.component';

describe('HomePeetComponent', () => {
  let component: HomePeetComponent;
  let fixture: ComponentFixture<HomePeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePeetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

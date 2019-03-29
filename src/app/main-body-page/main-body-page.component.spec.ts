import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyPageComponent } from './main-body-page.component';

describe('MainBodyPageComponent', () => {
  let component: MainBodyPageComponent;
  let fixture: ComponentFixture<MainBodyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBodyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBodyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

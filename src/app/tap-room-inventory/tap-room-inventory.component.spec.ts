import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapRoomInventoryComponent } from './tap-room-inventory.component';

describe('TapRoomInventoryComponent', () => {
  let component: TapRoomInventoryComponent;
  let fixture: ComponentFixture<TapRoomInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapRoomInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapRoomInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

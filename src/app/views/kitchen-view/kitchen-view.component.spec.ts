import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenViewComponent } from './kitchen-view.component';

describe('KitchenViewComponent', () => {
  let component: KitchenViewComponent;
  let fixture: ComponentFixture<KitchenViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitchenViewComponent]
    });
    fixture = TestBed.createComponent(KitchenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

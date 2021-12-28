import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KassaHomeComponent } from './kassa-home.component';

describe('KassaHomeComponent', () => {
  let component: KassaHomeComponent;
  let fixture: ComponentFixture<KassaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KassaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KassaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

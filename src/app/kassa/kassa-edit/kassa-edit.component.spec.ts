import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KassaEditComponent } from './kassa-edit.component';

describe('KassaEditComponent', () => {
  let component: KassaEditComponent;
  let fixture: ComponentFixture<KassaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KassaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KassaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

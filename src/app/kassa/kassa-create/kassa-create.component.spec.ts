import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KassaCreateComponent } from './kassa-create.component';

describe('KassaCreateComponent', () => {
  let component: KassaCreateComponent;
  let fixture: ComponentFixture<KassaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KassaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KassaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

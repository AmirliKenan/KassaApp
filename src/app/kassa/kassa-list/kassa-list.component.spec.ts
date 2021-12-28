import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KassaListComponent } from './kassa-list.component';

describe('KassaListComponent', () => {
  let component: KassaListComponent;
  let fixture: ComponentFixture<KassaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KassaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KassaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesorComboboxComponent } from './asesor-combobox.component';

describe('AsesorComboboxComponent', () => {
  let component: AsesorComboboxComponent;
  let fixture: ComponentFixture<AsesorComboboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsesorComboboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsesorComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

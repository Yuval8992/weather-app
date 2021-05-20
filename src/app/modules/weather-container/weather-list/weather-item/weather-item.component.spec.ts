import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherItemComponent } from './weather-item.component';
import { WeatherListService } from '../../../../core/services/weather.service'
import { FormBuilder, Validators } from '@angular/forms';

describe('WeatherItemComponent', () => {
  let component: WeatherItemComponent;
  let fixture: ComponentFixture<WeatherItemComponent>;

  class WeatherListServiceStub { }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherItemComponent],
      providers: [FormBuilder, { provide: WeatherListService, useValue: WeatherListServiceStub },]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return proper error message', () => {
    expect(component.getErrorMessage('required')).toBe('required field.')
  })

  it('should check errors in control', () => {
    createForm('', '');
    expect(component.hasError('city', 'required')).toBeTruthy();
    component.weather.patchValue({ city: 'tel-aviv' })
    expect(component.hasError('city', 'required')).toBeFalsy();
  })

  function createForm(city: string, unit: string) {
    const form = new FormBuilder();
    component.weather = form.group({
      city: [city, [Validators.required]],
      unit: [unit, [Validators.required]]
    });
  }

});

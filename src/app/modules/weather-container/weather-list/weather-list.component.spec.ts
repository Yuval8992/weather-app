import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Weather } from 'src/app/shared/models/weather.model';
import { WeatherListService } from '../../../core/services/weather.service'
import { WeatherListComponent } from './weather-list.component';

describe('WeatherListComponent', () => {
  let component: WeatherListComponent;
  let fixture: ComponentFixture<WeatherListComponent>;

  class WeatherListServiceStub {
    static getWeatherData(city: string, unit: string): Promise<Weather> {
      return new Promise((resolve) => {
        resolve({} as Weather)
      })
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherListComponent],
      providers: [FormBuilder, { provide: WeatherListService, useValue: WeatherListServiceStub },]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('weathers should be with 1 element from start', () => {
    expect(component.weathers.length).toBe(1);
  });

  it('should add new weather', () => {
    component.addWeather('city', 'metric', 1);
    expect(component.weathers.length).toBe(2);
  });

  it('should remove weather', () => {
    component.addWeather('city', 'metric', 1);
    expect(component.weathers.length).toBe(2);
    component.deleteWeather(1);
    expect(component.weathers.length).toBe(1);
    component.deleteWeather(0);
    expect(component.weathers.length).toBe(0);
  });
});

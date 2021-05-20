import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSummarizeComponent } from './weather-summarize.component';
import { WeatherListService } from '../../../core/services/weather.service'

describe('WeatherSummarizeComponent', () => {
  let component: WeatherSummarizeComponent;
  let fixture: ComponentFixture<WeatherSummarizeComponent>;

  class WeatherListServiceStub { }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherSummarizeComponent],
      providers: [{ provide: WeatherListService, useValue: WeatherListServiceStub },]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherSummarizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { WeatherService } from './weather.service'
import { ICurrentWeather } from '../icurrent-weather'
import { WeatherServiceFake } from './weather.service.fake'

describe('WeatherService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  )

  it('should be created', () => {
    const service: WeatherService = TestBed.get(WeatherService)
    expect(service).toBeTruthy()
  })
})

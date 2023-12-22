import { Component } from '@angular/core';
import { ApiService } from './pages/services/api.services';
import { WeatherForecast } from './pages/models/weatherforecast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'DemoApp';
  weatherForecast: WeatherForecast[] = [];

  constructor(
    private apiService: ApiService,
  ) {

  }

  ngOnInit() {
    this.apiService.getWeatherForecast()
      .then(response => {
        this.weatherForecast = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { WeatherUnits } from '../enums/weather-units.enum'

@Pipe({ name: 'temp' })
export class FormatTempPipe implements PipeTransform {
    transform(value: number, unit: string): string {
        let result: string;
        const degreeSymbol = '\u00B0'

        switch (unit) {
            case WeatherUnits.METRIC:
                result = degreeSymbol + 'c';
                break;
            case WeatherUnits.IMPERIAL:
                result = degreeSymbol + 'f';
                break;
            case WeatherUnits.STANDARD:
                result = 'K';
                break;
            default:
                result = ''
        }
        return value + result;
    }
}
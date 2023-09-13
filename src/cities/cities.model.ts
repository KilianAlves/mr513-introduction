
import { ICity } from './cities.d' ;

export class City implements ICity {
    readonly name: string;
    readonly info: string;
    readonly latitude: number;
    readonly longitude: number;

    constructor(name: string, info: string, latitude: number, longitude: number){
        this.name = name;
        this.info = info;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    static fetchCities(name: string): City[] {
        return [ 
            new City("Paris", "75, Paris, Île-de-France", 48.859, 2.347),
            new City("Reims", "51, Marne, Grand Est", 49.2509, 4.0556)
        ];
    }
}
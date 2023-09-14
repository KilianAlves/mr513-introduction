
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

    static fetchCitiesThen(name: string): Promise<City[]> {

        return fetch("https://api-adresse.data.gouv.fr/search/?type=municipality&q="+name)
        .then(response => response.json())
        .then(json => {
            const cityList: City[] = [];
            for (const city of json.features) {
                cityList.push(new City(city.properties.name,city.properties.context,city.properties.x,city.properties.y));
            }
            return cityList;
        })
        .catch(err=>{
            console.log(err);
            return []
          })
    }

    static async fetchCities(name: string): Promise<City[]> {
        try {
        const response = await fetch("https://api-adresse.data.gouv.fr/search/?type=municipality&q="+name);
        const cities = await response.json();
        const cityList: City[] = [];
        for (const city of cities.features) {
            cityList.push(new City(city.properties.name,city.properties.context,city.properties.x,city.properties.y));
        }
        return cityList;
    } catch (err) {
        console.log(err);
        return []
      }
    }
}
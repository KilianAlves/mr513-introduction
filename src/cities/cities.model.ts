
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

        let cityList: City[];
        fetch("https://api-adresse.data.gouv.fr/search/?type=municipality&q="+name)
        .then(cities => {
            for (const city of cities) {
                cityList.push(new City(city.propeties.name,city.propeties.context,city.propeties.x,city.propeties.y));
            }
            return cityList;
        })
        .catch(err=>{
            console.log(err);
          })
    }
}
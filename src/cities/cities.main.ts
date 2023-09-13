import { argv } from 'node:process';
import { City } from './cities.model'
const cmdline = argv;
if (cmdline.length == 3){
    if (cmdline[2].length >= 3){
        console.log(City.fetchCities(cmdline[2]));
    }
}
export class Country {
    constructor(country){
        this.name = country.name;
        this.capital= country.capital;
        this.population = country.population;
        this.area = country.area;
    }

    getPopulationInMilions(){
        return ((this.population/1000000).toFixed(3) + 'M');
    }

    getAreaInKM2(){
        return this.area + ' km2';
    }
}
export default Country;
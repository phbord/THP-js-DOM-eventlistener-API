class Velib {
    constructor() {
        this.stationName = '&rows=6';
        this.url = `https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=${this.stationName}&facet=station_state&facet=kioskstate&facet=creditcard&facet=overflowactivation&facet=nbbike`;
    }

    showVelibStation() {
        let data = this.getData();
        console.log('data =>', data);
    }

    getData() {
        return fetch(this.url)
            .then((res) => res.json())
            .then((res) => console.log('Response =>', res))
            .catch((err) => console.error('Error =>', err));
    }
}


const velib = new Velib();
velib.showVelibStation();
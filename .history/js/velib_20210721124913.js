class Velib {
    constructor() {
        this.query = '&rows=6';
        this.url = `https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=${this.query}&facet=station_state&facet=kioskstate&facet=creditcard&facet=overflowactivation&facet=nbbike`;
    }

    async showVelibStation() {
        const data = await this.getData();
        console.log('Data =>', data);
    }

    async getData() {
        let results = ''
        const data = await fetch(this.url)
            .then(res => res.json())
            .then(res => {console.log('Response =>', res); return res;})
            .catch(err => console.error('Error =>', err));
        //return data;
    }
}


const velib = new Velib();
velib.showVelibStation();
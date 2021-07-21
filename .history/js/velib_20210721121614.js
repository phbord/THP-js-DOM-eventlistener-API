class Velib {
    constructor() {
        this
        this.url = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=Mairie+du+11%C3%A8me&facet=station_state&facet=kioskstate&facet=creditcard&facet=overflowactivation&facet=nbbike';
    }

    showVelibStation() {
        const data = this.getData();
        console.log('data =>', data)
    }

    getData() {
        fetch(this.url)
            .then((res) => res.json())
            .then((res) => console.log('Response =>', res))
            .catch((err) => console.error('Error =>', err));
    }
}


const velib = new Velib();
velib.showVelibStation();
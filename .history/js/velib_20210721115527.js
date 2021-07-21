class Velib {
    constructor() {
        this.url = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=Mairie+du+11%C3%A8me&facet=station_state&facet=kioskstate&facet=creditcard&facet=overflowactivation&facet=nbbike';
    }

    showVelibStation() {}

    getData() {
        fetch(`https://geek-jokes.sameerkumar.website/api?format=json`)
            .then((response) => response.json())
            .then((response) => console.log('fetch1 =>', response))
            .catch((error) => console.error('fetch1 error =>', error));
    }
}


const velib = new Velib();
velib.showVelibStation();
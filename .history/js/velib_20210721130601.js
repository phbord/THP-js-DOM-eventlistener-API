class Velib {
    constructor() {
        this.query = '&rows=6';
        this.url = `https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=${this.query}&facet=station_state&facet=kioskstate&facet=creditcard&facet=overflowactivation&facet=nbbike`;
    }

    async showVelibStation() {
        const data = await this.getData();
        data.records.forEach((record) => {
            let content = '';
            let ul = document.createElement("ul");
            let div = document.createElement("div");
            div.className = 'invalid-feedback d-block';
            console.log('=>', record.fields);
        })
    }

    async getData() {
        let result = '';
        const data = await fetch(this.url)
            .then(res => res.json())
            .then(res => result = res)
            .catch(err => console.error('Error =>', err));
        return result;
    }
}


const velib = new Velib();
velib.showVelibStation();
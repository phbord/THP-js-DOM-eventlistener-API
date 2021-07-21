class Velib {
    constructor() {
        this.query = '&rows=6';
        this.url = `https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=${this.query}&facet=station_state&facet=kioskstate&facet=creditcard&facet=overflowactivation&facet=nbbike`;
        this.list = document.getElementById('infos');
    }

    async showVelibStation() {
        const data = await this.getData();
        let content = '';
        this.list.innerHTML = '';

        data.records.forEach((record) => {
            let li = document.createElement("li");
            let div = document.createElement("div");
            li.className = 'card';
            content += li;
            this.list.parentNode.insertAdjacentElement('afterend', li);
            console.log('=>', record.fields);
        });

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
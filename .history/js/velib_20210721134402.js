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
            content += this.populateTemplate(record.fields);
            console.log('=>', record.fields);
        });
        console.log('->', content);
        this.list.innerHTML = content;
    }

    populateTemplate(data) {
        let content = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <p class="card-text">Ville : ${data.nom_arrondissement_communes}</p>
                    <p class="card-text">Capacité : </p>
                    <p class="card-text">Nombre de vélos disponibles : </p>
                    <p class="card-text">Nombre de vélos disponibles : </p>
                </div>
            </div>
        `;
        return content;
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
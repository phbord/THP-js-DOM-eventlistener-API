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

        //const iterateData = async () => {
            data.records.forEach((record) => {
                content += this.populateTemplate(record.fields);
                console.log('=>', record.fields);
            });
            this.list.innerHTML = content;
        //}

        //await setInterval(iterateData(), 5*1000);
        this.refreshPage(5*1000);
    }

    populateTemplate(data) {
        let content = `
            <li class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <p class="card-text">Ville : ${data.nom_arrondissement_communes}</p>
                    <p class="card-text">Capacité : ${data.capacity}</p>
                    <p class="card-text">Nombre de vélos disponibles : ${data.numbikesavailable}</p>
                    <p class="card-text">Nombre de docks disponibles : ${data.numdocksavailable}</p>
                </div>
            </li>
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
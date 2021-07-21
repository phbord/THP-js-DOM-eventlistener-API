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
            data.records.map((record) => {
                content += this.populateTemplate(record.fields);
                console.log('=>', record.fields);
            });
            this.list.innerHTML = content;
        //}

        //await setInterval(iterateData(), 5*1000);
        setInterval(async () => {
            let data = await this.getData();
            await this.listData(data);
        }, 5000)
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

    getMap() {
        let myMap = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'your.mapbox.access.token'
        }).addTo(myMap);
        console.error(myMap,' /// ', L);
    }
}


const velib = new Velib();
velib.showVelibStation();
velib.getMap();
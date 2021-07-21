class Velib {
    constructor() {
        this.query = '&rows=6';
        this.url = `https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=${this.query}&facet=station_state&facet=kioskstate&facet=creditcard&facet=overflowactivation&facet=nbbike`;
        this.list = document.getElementById('infos');
        this.myMap = L.map('map').setView([48.86, 2.3319], 13);
    }

    async showVelibStation() {
        setInterval(async () => {
            let data = await this.getData();
            await this.listData(data);
            console.log('interval');
        }, 5000)
    }

    async listData(data) {
        this.list.innerHTML = '';
        await data.records.map(record => {
            this.list.innerHTML += this.populateTemplate(record);
            this.showMap(this.myMap);
            //this.setMarker(x, y);
        });
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

    //https://www.openstreetmap.org/#map=13/48.8600/2.3319
    showMap(myMap) {
        //let myMap = L.map('map').setView([48.86, 2.3319], 13);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoicGhib3JkIiwiYSI6ImNrcmRqZWlteDBldXIzMW9lZDZudTJsNDYifQ.gUPMzLa_L-cOXy-vJ1KG4Q'
        }).addTo(myMap);
        console.log(myMap,' /// ', L);
    }

    setMarker(x, y) {
        return L.marker([x, y]).addTo(this.myMap);
    }
}


const velib = new Velib();
velib.showVelibStation();
//velib.showMap();
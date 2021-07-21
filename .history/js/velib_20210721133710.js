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
            content += this.populateTemplate();
            console.log('=>', record.fields);
        });
        this.list.appendChild(content);
    }

    populateTemplate() {
        let content = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text"></p>
                    <p class="card-text"></p>
                    <p class="card-text"></p>
                    <p class="card-text"></p>
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
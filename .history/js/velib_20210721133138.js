class Velib {
    constructor() {
        this.query = '&rows=6';
        this.url = `https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=${this.query}&facet=station_state&facet=kioskstate&facet=creditcard&facet=overflowactivation&facet=nbbike`;
        this.list = document.getElementById('infos');
    }

    async showVelibStation() {
        const data = await this.getData();
        let count = 0;
        this.list.innerHTML = '';

        data.records.forEach((record) => {
            let li = document.createElement("li");
            let div = document.createElement("div");
            let h5 = document.createElement("h5");
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            let p3 = document.createElement("p");
            let p4 = document.createElement("p");
            li.className = 'card';
            div.className = 'card-body';
            h5.className = 'card-title';
            p1.className = 'card-text';
            p2.className = 'card-text';
            p3.className = 'card-text';
            p4.className = 'card-text';
            div.appendChild(h5);
            h5.insertAdjacentElement('afterend', div);
            li.appendChild(div);
            this.list.appendChild(li);
            count++;
            console.log('=>', record.fields);
        });

    }

    populateTemplate() {
        
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
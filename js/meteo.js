class Meteo {
    constructor() {
        this.list = document.getElementById('infos');
        this.subtitle = document.getElementById('city');
        this.key = '4094440e141c4c999afaa4f9091b9bcd';
        this.lat = 48.91667;
        this.lon = 2.28333;
        this.url = `https://api.weatherbit.io/v2.0/current?lat=${this.lat}&lon=${this.lon}&key=${this.key}&include=minutely`;
    }

    async showMeteo() {
        setInterval(async () => {
            let data = await this.getData();
            await this.listData(data.data[0]);
            console.log('refresh!!!', data);
        }, 5000)
    }

    async listData(data) {
        this.subtitle.innerHTML = '';
        this.list.innerHTML = '';

        this.subtitle.innerHTML = data.city_name;
        this.list.innerHTML += this.populateTemplate(data);
        // await data.records.map(record => {
        //     this.list.innerHTML += this.populateTemplate(record);
        // });
    }

    populateTemplate(data) {
        let content = `
            <li class="card" style="width: 18rem;">
                <img src="./img/${data.weather.icon}.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.datetime}</h5>
                    <p class="card-text">Températures : ${data.temp}</p>
                    <p class="card-text">Vent : ${data.wind_spd}</p>
                    <p class="card-text">Temps : ${data.weather.description}</p>
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


document.addEventListener('DOMContentLoaded', () => {
    const meteo = new Meteo();
    meteo.showMeteo();
});
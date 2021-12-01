let API_KEY = '2bdc4c1f-b626-45b1-8afa-c667c37c2f35'

let name = (async () => {
    url = "https://data.messari.io/api/v1/assets/btc/metrics"
    let response = await fetch(url)
    let notes = await response.json()
    console.log(notes);
})();

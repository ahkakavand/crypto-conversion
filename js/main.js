// variable
let btnFirstSelect = document.querySelector('.first')
let btnSecondSelect = document.querySelector('.second')

let overlay = document.querySelector('.overlay')
let overlay2 = document.querySelector('.overlay2')

let searchBox = document.querySelector('.serchBox')
let nameBox = document.querySelector('.nameBox')

let searchBox2 = document.querySelector('.serchBox2')
let nameBox2 = document.querySelector('.nameBox2')

let searchInput1 = document.querySelector('#search1')
let searchInput2 = document.querySelector('#search2')


// eventListeners
btnFirstSelect.addEventListener('click' , searchFirstCoin)

overlay.addEventListener('click' , removeOverlay)
overlay2.addEventListener('click' , removeOverlay2)

searchInput1.addEventListener('input' , getNameCoin1)
searchInput2.addEventListener('input' , getNameCoin2)

nameBox.addEventListener('click' , addNameCoin)
nameBox2.addEventListener('click' , addNameCoin2)

btnSecondSelect.addEventListener('click' , searchSecondCoin)




// functions
function searchFirstCoin(e) {
    e.preventDefault()
    searchBox.style.display = 'block'
    overlay.style.display = 'block'
}

function removeOverlay(e) {
    if (e.target.classList.contains('overlay')) {
        overlay.style.display = 'none'
        searchBox.style.display= 'none'
    }
}

function removeOverlay2(e) {
    if (e.target.classList.contains('overlay2')) {
        overlay2.style.display = 'none'
        searchBox2.style.display= 'none'
    }
}

function getNameCoin1(e) {
    (async () => {
        let url = "https://data.messari.io/api/v1/assets"
        let response = await fetch(url)
        let data = await response.json()
        let allData = data.data
        allData.forEach(item => {
            if (item.name.toLowerCase().includes(e.target.value)) {
                let li = document.createElement('li')
                li.innerText = item.name
                li.classList = 'liNameCoin'
                nameBox.prepend(li)
            }
        });
    })();
}

function addNameCoin(e) {
        (async () => {
            if (e.target.classList.contains('liNameCoin')) {
            overlay.style.display = 'none'        
            searchBox.style.display= 'none'
            let nameCoin = e.target.innerText
            btnFirstSelect.innerText = nameCoin
            let url = `https://data.messari.io/api/v1/assets/${nameCoin}/metrics`
            let response = await fetch(url)
            let data = await response.json()
            let price = data.data.market_data.price_usd
            document.querySelector('.price').innerText = `${data.data.symbol} Price : ${price.toFixed(3)}`
        }
    })();
}

function searchSecondCoin(e) {
    e.preventDefault()
    searchBox2.style.display = 'block'
    overlay2.style.display = 'block'
}

function getNameCoin2(e) {
    (async () => {
        let url = "https://data.messari.io/api/v1/assets"
        let response = await fetch(url)
        let data = await response.json()
        let allData = data.data
        allData.forEach(item => {
            if (item.name.toLowerCase().includes(e.target.value)) {
                let li = document.createElement('li')
                li.innerText = item.name
                li.classList = 'liNameCoin2'
                nameBox2.prepend(li)
            }
        });
    })();
}

function addNameCoin2(e) {
    (async () => {
        if (e.target.classList.contains('liNameCoin2')) {
        overlay2.style.display = 'none'        
        searchBox2.style.display= 'none'
        let nameCoin = e.target.innerText
        btnSecondSelect.innerText = nameCoin
        let url = `https://data.messari.io/api/v1/assets/${nameCoin}/metrics`
        let response = await fetch(url)
        let data = await response.json()
        let price = data.data.market_data.price_usd
        document.querySelector('.price2').innerText = `${data.data.symbol} Price : ${price.toFixed(3)}`
    }
})();
}
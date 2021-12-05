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

let button = document.querySelector('#submit')
let checng = document.querySelector('.checng')

// eventListeners
btnFirstSelect.addEventListener('click', searchFirstCoin)

overlay.addEventListener('click', removeOverlay)
overlay2.addEventListener('click', removeOverlay2)

searchInput1.addEventListener('input', getNameCoin1)
searchInput2.addEventListener('input', getNameCoin2)

nameBox.addEventListener('click', addNameCoin)
nameBox2.addEventListener('click', addNameCoin2)

btnSecondSelect.addEventListener('click', searchSecondCoin)

button.addEventListener('click' , convertCoin)
checng.addEventListener('click' , checngCoin)


// functions
function searchFirstCoin(e) {
    e.preventDefault()
    searchBox.style.display = 'block'
    overlay.style.display = 'block'
    searchInput1.focus()

}

function removeOverlay(e) {
    if (e.target.classList.contains('overlay')) {
        overlay.style.display = 'none'
        searchBox.style.display = 'none'
    }
}

function removeOverlay2(e) {
    if (e.target.classList.contains('overlay2')) {
        overlay2.style.display = 'none'
        searchBox2.style.display = 'none'
    }
}

function getNameCoin1(e) {
    (async () => {
        let url = "https://data.messari.io/api/v1/assets"
        let response = await fetch(url)
        let data = await response.json()
        let allData = data.data
        allData.forEach(item => {
            if (item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
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
            searchBox.style.display = 'none'
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
    searchInput2.focus()
}

function getNameCoin2(e) {
    (async () => {
        let url = "https://data.messari.io/api/v1/assets"
        let response = await fetch(url)
        let data = await response.json()
        let allData = data.data
        allData.forEach(item => {
            if (item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
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
            searchBox2.style.display = 'none'
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

function convertCoin() {
    let amount1 = +document.querySelector('#firstcoin').value
    let amount2 = +document.querySelector('#secondcoin').value

    let name1 = btnFirstSelect.innerText
    let name2 = btnSecondSelect.innerText

    let price1 = +document.querySelector('.price').innerText.slice(document.querySelector('.price').innerText.indexOf(' : ') + 2)
    let price2 = +document.querySelector('.price2').innerText.slice(document.querySelector('.price2').innerText.indexOf(' : ') + 2)
    
    let amountCoin1 = amount1 * price1
    let res = amountCoin1 / price2

    document.querySelector('#secondcoin').value = res.toFixed(5)
}


function checngCoin() {
    btnFirstSelect.innerHTML = 'select coin<i class="fas fa-angle-down" style="margin-left: 5px;"></i>'
    btnSecondSelect.innerHTML = 'select coin<i class="fas fa-angle-down" style="margin-left: 5px;"></i>'

    document.querySelector('#firstcoin').value = ''
    document.querySelector('#secondcoin').value = ''
}
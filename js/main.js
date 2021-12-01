// variable
let btnFirstSelect = document.querySelector('.first')
let overlay = document.querySelector('.overlay')
let searchBox = document.querySelector('.serchBox')
let searchBox2 = document.querySelector('.serchBox2')
let searchInput1 = document.querySelector('#search1')


// eventListeners
btnFirstSelect.addEventListener('click' , searchFirstCoin)
overlay.addEventListener('click' , removeOverlay)
searchInput1.addEventListener('input' , getNameCoin1)



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
            for (let i = 0; i < e.target.value.length; i++) {
                if (item.name.toLowerCase().includes(e.target.value)) {
                    // let li = document.createElement('li')
                    // li.innerText = item.name
                    // searchBox.appendChild(li)
                    
                }
            }
        });


    })();

}
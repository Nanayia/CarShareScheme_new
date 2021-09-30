window.onload = async () => {
    // let carData = null
    const carList = document.getElementsByClassName('cars-list')[0]
    await fetch('http://localhost:7000/cars')
    .then(res => res.json())
    .then(data => {
        rendercars(data)
    })

    const mercedesBtn = document.getElementById('mercedes')
    const toyotaBtn = document.getElementById('toyota')
    const hondaBtn = document.getElementById('honda')
    const civicBtn = document.getElementById('civic')

    async function handleBrand(event) {
        carBrand = event.target.textContent
        console.log(carBrand)
        await fetch(`http://localhost:7000/cars/${carBrand}`)
        .then(res => res.json())
        .then(data => {rendercars(data)})
    }
    mercedesBtn.addEventListener('click',handleBrand)
    toyotaBtn.addEventListener('click',handleBrand)
    hondaBtn.addEventListener('click',handleBrand)
    civicBtn.addEventListener('click',handleBrand)

    const srchBtn = document.getElementById('search-btn')
    function getResults() {
        const query = document.getElementsByClassName('header_search_input')[0].value
        // console.log(toSearch)
        const data = {query}
        const options = {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch('http://localhost:7000/search',options)
        .then(res => res.json())
        .then(result => {
            console.log(result)
            rendercars(result)
        })
    }
    srchBtn.addEventListener('click', getResults)

    function rendercars(carData) {
        let html = ''
        for(const car of carData) {
            html += `
            <div class="col-sm-3">
                <div class="thumb-wrapper">
                    <div class="img-box">
                        <img src="${car.image}" class="img-responsive img-fluid" alt="">
                    </div>
                    <div class="thumb-content">
                        <h4>${car.name}</h4>
                        <p class="item-price"><span>${'$'+car.price}</span></p>
                        <div class="star-rating">
                            <ul class="list-inline">
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                            </ul>
                        </div>
                        <a href="./placeOrder.html" class="btn btn-primary btn-view">View</a>
                    </div>						
                </div>
            </div>
            `
            if(html)
                carList.innerHTML = html
        }
    }
// 
    // to retain data from view button
    const viewBtns = document.getElementsByClassName('btn-view')
    function handleView(event) {
        const parent = event.target.parentElement
        const img = parent.parentElement.children[0].children[0]

        // console.log(img.src)
        const carName = parent.children[0].textContent
        const price = parent.children[1].textContent
        localStorage.setItem('car',carName)
        localStorage.setItem('price',price)
        localStorage.setItem('image',img.src)
        // alert(parent.children[0].textContent)
        // alert(parent.children[1].textContent)
        // alert('hello')
    }
    for(const btn of viewBtns){
        btn.addEventListener('click', handleView)
    // console.log('hello wold')
    }
    
}
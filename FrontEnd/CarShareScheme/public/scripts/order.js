window.onload = () => {
    const car = document.getElementById('car-name')
    const price = document.getElementById('price')
    const img = document.getElementById('car-img')
    car.textContent = localStorage.getItem('car')
    price.textContent = localStorage.getItem('price')
    img.src = localStorage.getItem('image')

    const buyBtn = document.getElementsByClassName('cart-btn')[0]
    async function handleBuy() {
        const data = {
            car: localStorage.getItem('car'),
            price: localStorage.getItem('price') 
        }
        const options = {
            method:'POST',
            header:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        await fetch('http://localhost:7000/buyCar', options)
        .then(res => res.json())
    }
    buyBtn.addEventListener('click', handleBuy)

}
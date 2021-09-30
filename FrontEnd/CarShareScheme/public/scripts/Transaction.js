window.onload =() => {

    function TransactionCall(){
        let fname = document.getElementById("fname").value
        let email = document.getElementById("email").value
        let adr = document.getElementById("adr").value
        let city = document.getElementById("city").value
        let state = document.getElementById("state").value
        let zip = document.getElementById("zip").value
        let Cname = document.getElementById("cname").value
        let Cardnum = document.getElementById("ccnum").value
        let ExpMonth = document.getElementById("expmonth").value
        let ExpYear = document.getElementById("expyear").value
        let cvv = document.getElementById("cvv").value
        let Cname = document.getElementsByClassName("price").value

    const data={fname,email,adr,city,state,zip,Cname,Cardnum,ExpMonth,ExpYear,cvv,Cname}
        console.log(data)
        const options = {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }
        await fetch('http://localhost:7000/CheckOut',options)
        .then(res => {
            if(res.status === 200 ) {
                alert("Transaction done successfully");
            }
        })
    }
}
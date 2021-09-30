async function SignInAdmin(){
    const username = document.getElementsByClassName('username')[0].value
    const password = document.getElementsByClassName('password')[0].value
    const data = {username, password}
    console.log(data)
    const options = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    await fetch('http://localhost:7000/login',options)
    .then(res => {
        if(res.status === 200 ) {
            window.location.href = "./AdminDashBoard/DashboardAdmin.html";
        }
    })
  
}
async function SignInCustomer(){
    const username = document.getElementsByClassName('username')[0].value
    const password = document.getElementsByClassName('password')[0].value
    const data = {username, password}
    console.log(data)
    const options = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    await fetch('http://localhost:7000/login',options)
    .then(res => {
        if(res.status === 200 ) {
            window.location.href = "./CustomerDashboard/DashboardCustomer.html";
        }
    })
}

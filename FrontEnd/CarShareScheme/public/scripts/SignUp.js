async function SignUpAdmin(){
    const username = document.getElementsByClassName('username')[0].value
    const email = document.getElementsByClassName('email')[0].value
    const password = document.getElementsByClassName('password')[0].value
    const Confpassword = document.getElementsByClassName('confirmPass')[0].value
    const data = {username,email,password,Confpassword}
    console.log(data)
    const options = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    await fetch('http://localhost:7000/SignUp',options)
    .then(res => {
        if(res.status === 200 ) {
            window.location.href = "./AdminDashBoard/DashboardAdmin.html";
        }
    })
  
}
async function SignUpCustomer(){
    const username = document.getElementsByClassName('username')[0].value
    const email = document.getElementsByClassName('email')[0].value
    const password = document.getElementsByClassName('password')[0].value
    const Confpassword = document.getElementsByClassName('confirmPass')[0].value
    const data = {username,email,password,Confpassword}
    console.log(data)
    const options = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    await fetch('http://localhost:7000/SignUp',options)
    .then(res => {
        if(res.status === 200 ) {
            window.location.href = "./CustomerDashboard/DashboardCustomer.html";
        }
    })
  
  
}
async function checkReview(){
const rate_value;
    if (document.getElementById('r1').checked) {
        rate_value = document.getElementById('r1').value;
      }
      else if (document.getElementById('r2').checked) {
        rate_value = document.getElementById('r2').value;
      }
     else if (document.getElementById('r3').checked) {
        rate_value = document.getElementById('r3').value;
      }
      else if (document.getElementById('r4').checked) {
        rate_value = document.getElementById('r4').value;
      }
     
      console.log(rate_value)
      const options = {
          method:'POST',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify(rate_value)
      }
      await fetch('http://localhost:7000/ReviewPage',options)
      .then(res => {
          if(res.status === 200 ) {
              alert("thanks for your feedback");
          }
      })
}
const rateBtn = document.querySelectorAll(".button");
const submitBtn = document.querySelector(".buttonalf")


rateBtn.forEach(rate => {
    rate.addEventListener("click", getRateNumber)
})

function getRateNumber(event) {
    let rateNumber = event.target.innerText;
    thankHtml(rateNumber);
}

function thankHtml(rate) {
    let thankHtml = `<div class="box-container" id="thx-box"> 
<div class="thx" id="gracias">
  <img src="../images/illustration-thank-you.svg" alt="">
  <div class="result">
 <p class="rtng-result"> You selected ${rate} out of 5 </p>
  </div>
  <div class="texto">
  <h2> Thank you! </h2>

 <h3> We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch! </h3>
  </div>

</div>
</div>`;    
    insertThankYou(thankHtml);
}

function insertThankYou(thankyou) {
    submitBtn.addEventListener("click", () => {
     document.querySelector(".card").innerHTML = thankyou;     
    })
   
}
// const proceedBtn = document.getElementById("proceedBtn");


// proceedBtn.addEventListener("click" , () => {
//     window.location.href = "booking-summary.html"
// });

// const transferPay = document.getElementById("transferPay");

// transferPay.addEventListener("click", () => {
//     window.location.href = "payment/payment.html"
// });

const proceedBtn = document.getElementById("proceedBtn");
if (proceedBtn) {
    proceedBtn.addEventListener("click", () => {
        window.location.href = "booking-summary.html";
    });
}

const transferPay = document.getElementById("transferPay");
if (transferPay) {
    transferPay.addEventListener("click", () => {
        window.location.href = "../payment/payment.html";
    });
}

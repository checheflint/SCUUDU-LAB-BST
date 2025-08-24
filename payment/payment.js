// Grab the container where details will change
    const detailsContainer = document.querySelector(".pay-method-details");

    // Store templates for each payment method
    const templates = {
        card: `
            <div class="detail-header">
                <img src="../ICONS/Japalogo.svg" alt="">
                <div class="user-price-and-email">
                    <h6>Johndoe@gmail.com</h6>
                    <p>Pay <strong>$360</strong></p>
                </div>
            </div>
            
            <div class="card-details">
                <h4>Pay with Card</h4>
                <input type="text" placeholder="Card Number" />
                <input type="text" placeholder="MM/YY" />
                <input type="text" placeholder="CVC" />
                <button class="make-payment-btn">Make Payment</button>
            </div>
        `,
        crypto: `
            <div class="detail-header">
                <img src="../ICONS/Japalogo.svg" alt="">
                <div class="user-price-and-email">
                    <h6>Johndoe@gmail.com</h6>
                    <p>Pay <strong>$360</strong></p>
                </div>
            </div>
            
            <div class="crypto-details">
                <h4>Pay with Crypto</h4>
                <p>Send $360 worth of crypto to:</p>
                <p><strong>0xA12b3C45D67Ef89D8Pk</strong></p>
                <p>This wallet address expires in <span class="timer">29:59</span></p>
                <button class="make-payment-btn">Confirm Payment</button>
            </div>
        `,
        transfer: `
            <div class="detail-header">
                <img src="../ICONS/Japalogo.svg" alt="">
                <div class="user-price-and-email">
                    <h6>Johndoe@gmail.com</h6>
                    <p>Pay <strong>$360</strong></p>
                </div>
            </div>
            
            <div class="bank-details">
                <h4>Transfer $360 to Paystack checkout</h4>
                <div class="account-details">
                    <div class="detail-title">
                        <p>Bank Name:</p>
                        <p>Account Number:</p>
                        <p>Amount:</p>
                    </div>
                    <div class="detail-data">
                        <p><strong>Paystack Titan</strong></p>
                        <p><strong>8084900095</strong></p>
                        <p><strong>$360</strong></p>
                    </div>                     
                </div>
                <p>This amount is for this account and expires in <span class="timer">29:59</span></p>
                <button class="make-payment-btn">Confirm Payment</button>                         
            </div>
        `,
        paypal: `
            <div class="detail-header">
                <img src="../ICONS/Japalogo.svg" alt="">
                <div class="user-price-and-email">
                    <h6>Johndoe@gmail.com</h6>
                    <p>Pay <strong>$360</strong></p>
                </div>
            </div>
            
            <div class="paypal-details">
                <div class="paypal-acct-detail-title">
                    <img src="./assets/paypal icon.svg" alt="">
                    <p>PayPal</p>
                </div>    
                <p class="email-label">Enter your Email address to get started</p>
                <label for="email">
                    <input type="email" placeholder="Enter your email address">
                </label>
                <div class="price">
                    <img src="./assets/paypal icon.svg" alt="">
                    <p>Pay $360</p>
                </div>
                <p class="timer-content">This amount is for this account and expires in <span class="timer">29:59</span></p>
                <button class="make-payment-btn">Make Payment</button>                         
            </div>
        `,
        bank: `
            <div class="detail-header">
                <img src="../ICONS/Japalogo.svg" alt="">
                <div class="user-price-and-email">
                    <h6>Johndoe@gmail.com</h6>
                    <p>Pay <strong>$360</strong></p>
                </div>
            </div>
            
            <div class="bank-direct-details">
                <img src="./assets/bank icon.svg" alt="">
                <h4>Choose your bank to start the payment search for your bank </h4>
                
                <div class="choose-bank">
                <select id="banks-to-choose" name="banks" required>
                <option value="" disabled selected>Select your bank</option>
                <option value="access bank">Access Bank</option>
                <option value="carbon bank">Carbon Bank</option>
                <option value="citi bank">Citi Nigeria</option>
                <option value="eco bank">EcoBank</option>
                <option value="fidelity bank">Fidelity Bank</option>
                </select>
                </div>

                <button class="make-payment-btn">Make Payment</button>
            </div>
        `
    };

   // Add click listeners to payment options
document.querySelectorAll(".pay-option").forEach(option => {
  option.addEventListener("click", () => {
    // 1. Remove 'active' from all options
    document.querySelectorAll(".pay-option").forEach(opt =>
      opt.classList.remove("active")
    );

    // 2. Add 'active' to the clicked one
    option.classList.add("active");

    // 3. Update the details container
    const text = option.innerText.toLowerCase().trim();

    if (text.includes("card")) {
      detailsContainer.innerHTML = templates.card;
    } else if (text.includes("crypto")) {
      detailsContainer.innerHTML = templates.crypto;
    } else if (text.includes("transfer")) {
      detailsContainer.innerHTML = templates.transfer;
    } else if (text.includes("paypal")) {
      detailsContainer.innerHTML = templates.paypal;
    } else if (text.includes("bank")) {
      detailsContainer.innerHTML = templates.bank;
    }
  });
});

detailsContainer.addEventListener("click", e => {
  if (e.target.classList.contains("make-payment-btn")) {
    window.location.href = "../payment-confirmation page/payment-confirmation.html";
  }
});



    
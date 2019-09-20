window.onload = function() {
    var stripe = Stripe('pk_test_bXMd8HWAoQbUNOkbxxuevSMU');
    let testButton = document.querySelector('#testButton');
    let testButton2 = document.querySelector('#testButton2');

    testButton.addEventListener('click', function(event){
        stripe.redirectToCheckout({
            items: [
                // Replace with the ID of your SKU
                {sku: 'sku_FqGnjr2aOXATca', quantity: 1}
            ],
            successUrl: 'http://localhost:8000/success.html',
            cancelUrl: 'http://localhost:8000/cancel.html',
            }).then(function (result) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
            console.log(result.error.message)
            });          
    })
    
    testButton2.addEventListener('click', function(event){
        stripe.redirectToCheckout({
            items: [
                // Replace with the ID of your SKU
                {sku: 'sku_FqGvtVGW5tV0cu', quantity: 1}
            ],
            successUrl: 'http://localhost:8000/success.html',
            cancelUrl: 'http://localhost:8000/cancel.html',
            }).then(function (result) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
            console.log(result.error.message)
            });          
    })

}
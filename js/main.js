




    const input = document.querySelector('#input');
    const result = document.querySelector('#result');
    const select = document.querySelector('#select');

    input.oninput = function(){
        console.log("yess");
        result.value = "hello";
    }

    
fetch('https://www.binance.com/api/v3/ticker/24hr')
        .then(response => response.json())
        .then(data => {
            //var cryptonameBTCValue = data['417']['symbol']
            const priceBTCValue = data['417']['askPrice']
            // var twofourhprocentBTCValue = data['417']['priceChangePercent']
            // var volumeBTCValue = data['417']['volume']

            console.log(priceBTCValue);
        //   console.log(cryptonameValue);
        //   cryptonameBTC.innerHTML = cryptonameBTCValue;
        //   twofourhprocentBTC.innerHTML = twofourhprocentBTCValue + '%';
        //   volumeBTC.innerHTML = '$' + volumeBTCValue;

    
        })
            

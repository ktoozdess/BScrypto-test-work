    const input = document.querySelector('#input');
    const result = document.querySelector('#result');
    const selectfirst = document.querySelector('#select-1');
    const selectsecond = document.querySelector('#select-2');
    const BTC14d = document.querySelector('#BTC14d');
    const ETH14d = document.querySelector('#ETH14d');
    const rates = {};
    
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=price_change_14d_desc&page=1&sparkline=false&price_change_percentage=14d')
    .then(response => response.json())
    .then(data => {
       
         rates.BTCUSD = data['0'];
         rates.ETHUSD = data['1'];

        BTC14dValue = rates.BTCUSD.price_change_percentage_14d_in_currency;
        BTC14d.innerHTML = (BTC14dValue).toFixed(1) + '%';

        ETH14dValue = rates.ETHUSD.price_change_percentage_14d_in_currency;
        ETH14d.innerHTML = (ETH14dValue).toFixed(1) + '%';

    })
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=rub')
    .then(response => response.json())
    .then(data => {
       
        rates.USDRUB = data['3']
    })

    input.oninput = convert;
    selectfirst.oninput = convert;
    selectsecond.oninput = convert;
    function convert() {
      
        if(selectfirst.value == 'USDRUB'){
            result.value = (parseFloat(input.value) / rates[selectsecond.value].current_price).toFixed(3);  
        }
        else if(selectfirst.value == 'BTCUSD' && selectsecond.value == 'USDRUB') {
            result.value = (parseFloat(input.value) * rates.BTCUSD.current_price).toFixed(3);  
        }
        else if(selectfirst.value == 'ETHUSD' && selectsecond.value == 'USDRUB') {
            result.value = (parseFloat(input.value) * rates.ETHUSD.current_price).toFixed(3);  
        }
        else if(selectfirst.value == 'BTCUSD' && selectsecond.value == 'ETHUSD') {
            result.value = ((parseFloat(input.value) * rates.BTCUSD.current_price) / rates.ETHUSD.current_price).toFixed(3);  
        }
        else if(selectfirst.value == 'ETHUSD' && selectsecond.value == 'BTCUSD') {
            result.value = ((parseFloat(input.value) * rates.ETHUSD.current_price) / rates.BTCUSD.current_price).toFixed(3);  
        }
    }
    
    



    

    

            

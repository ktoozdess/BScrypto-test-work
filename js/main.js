

    const input = document.querySelector('#input');
    const result = document.querySelector('#result');
    const selectfirst = document.querySelector('#select-1');
    const selectsecond = document.querySelector('#select-2');

    const rates = {};
        
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
    .then(response => response.json())
    .then(data => {
       
       
         rates.BTCUSD = data['0'];
         rates.ETHUSD = data['1'];
        // console.log(data);
        console.log(rates);

    
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
            result.value = (parseFloat(input.value) / rates[selectsecond.value].current_price).toFixed(6);  
        }
        else if(selectfirst.value == 'BTCUSD' && selectsecond.value == 'USDRUB') {
            result.value = (parseFloat(input.value) * rates.BTCUSD.current_price).toFixed(6);  
        }
        else if(selectfirst.value == 'ETHUSD' && selectsecond.value == 'USDRUB') {
            result.value = (parseFloat(input.value) * rates.ETHUSD.current_price).toFixed(6);  
        }
        else if(selectfirst.value == 'BTCUSD' && selectsecond.value == 'ETHUSD') {
            result.value = ((parseFloat(input.value) * rates.BTCUSD.current_price) / rates.ETHUSD.current_price).toFixed(6);  
        }
        else if(selectfirst.value == 'ETHUSD' && selectsecond.value == 'BTCUSD') {
            result.value = ((parseFloat(input.value) * rates.ETHUSD.current_price) / rates.BTCUSD.current_price).toFixed(6);  
        }
    }
    
    



    

    

            

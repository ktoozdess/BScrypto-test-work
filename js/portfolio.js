

const inputBTC = document.querySelector('#inputBTC');
const inputETH = document.querySelector('#inputETH');
var summBTCValue = document.querySelector('.BTC')
var summETHValue = document.querySelector('.ETH')
var Total = document.querySelector('.total')
var summBTC = 3834;
var summETH = 2435;
var total = summBTC + summETH;
   
summBTCValue.innerHTML = 'BTC: ' + summBTC + '$';
summETHValue.innerHTML = 'ETH: ' + summETH + '$';
Total.innerHTML = 'Total: ' + total + '$';

function btnBTCplusf(){
    if(inputBTC.value == ''){
        alert('enter amount')
    } else{
        summBTC += parseFloat(inputBTC.value);
        var total = summBTC + summETH;
        summBTCValue.innerHTML = 'BTC: ' + summBTC + '$';
        Total.innerHTML = 'Total: ' + total + '$';
        myChart.config.data.datasets[0].data[0] = summBTC;
        myChart.update();    
        inputBTC.value = '';
    }
    
    
}
function btnBTCminusf(){
    if(inputBTC.value == ''){
        alert('enter amount')
    } else{
    summBTC -= parseFloat(inputBTC.value);
    var total = summBTC + summETH;
    summBTCValue.innerHTML = 'BTC: ' + summBTC + '$';
    Total.innerHTML = 'Total: ' + total + '$';
    myChart.config.data.datasets[0].data[0] = summBTC;
    myChart.update();
    inputBTC.value = '';
    }
}

function btnETHplusf(){
    if(inputETH.value == ''){
        alert('enter amount')
    } else{
    summETH += parseFloat(inputETH.value);
    var total = summBTC + summETH;
    summETHValue.innerHTML = 'ETH: ' + summETH + '$';
    Total.innerHTML = 'Total: ' + total + '$';
    myChart.config.data.datasets[0].data[1] = summETH;
    myChart.update();
    inputETH.value = '';
    }
}
function btnETHminusf(){
    if(inputETH.value == ''){
        alert('enter amount')
    } else{
    summETH -= parseFloat(inputETH.value);
    var total = summBTC + summETH;
    summETHValue.innerHTML = 'ETH: ' + summETH + '$';
    Total.innerHTML = 'Total: ' + total + '$';
    myChart.config.data.datasets[0].data[1] = summETH;
    myChart.update();
    inputETH.value = '';
    }
}


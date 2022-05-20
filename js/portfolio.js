

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
    summBTC += parseFloat(inputBTC.value);
    var total = summBTC + summETH;
    summBTCValue.innerHTML = 'BTC: ' + summBTC + '$';
    Total.innerHTML = 'Total: ' + total + '$';
    myChart.config.data.datasets[0].data[0] = summBTC;
    myChart.update();    
    inputBTC.value = '';
}
function btnBTCminusf(){
    summBTC -= parseFloat(inputBTC.value);
    var total = summBTC + summETH;
    summBTCValue.innerHTML = 'BTC: ' + summBTC + '$';
    Total.innerHTML = 'Total: ' + total + '$';
    myChart.config.data.datasets[0].data[0] = summBTC;
    myChart.update();
    inputBTC.value = '';
}

function btnETHplusf(){
    summETH += parseFloat(inputETH.value);
    var total = summBTC + summETH;
    summETHValue.innerHTML = 'ETH: ' + summETH + '$';
    Total.innerHTML = 'Total: ' + total + '$';
    myChart.config.data.datasets[0].data[1] = summETH;
    myChart.update();
    inputETH.value = '';
}
function btnETHminusf(){
    summETH -= parseFloat(inputETH.value);
    var total = summBTC + summETH;
    summETHValue.innerHTML = 'ETH: ' + summETH + '$';
    Total.innerHTML = 'Total: ' + total + '$';
    myChart.config.data.datasets[0].data[1] = summETH;
    myChart.update();
    inputETH.value = '';
}





// const btnplus = document.querySelector('#btnplus');
// const btnminus = document.querySelector('#btnminus');
var summBTCValue = document.querySelector('.BTC')
var summETHValue = document.querySelector('.ETH')
var Total = document.querySelector('.total')
var summBTC = 3834;
var summETH = 2435;
var total = summBTC + summETH;
// let total = int(summBTC) + String(summETH);
   
summBTCValue.innerHTML = 'BTC: ' + summBTC + '$';
summETHValue.innerHTML = 'ETH: ' + summETH + '$';
Total.innerHTML = 'Total: ' + total + '$';

function btnBTCplusf(summaryBTC){
    summBTC += 50;
    var total = summBTC + summETH;
    console.log(total);
    summBTCValue.innerHTML = 'BTC: ' + summBTC + '$';
    Total.innerHTML = 'Total: ' + total + '$';
    myChart.config.data.datasets[0].data[0] = summBTC;
    myChart.update();    
}
function btnBTCminusf(summaryBTC){
    summBTC -= 50;
    var total = summBTC + summETH;
    console.log(total);
    summBTCValue.innerHTML = 'BTC: ' + summBTC + '$';
    Total.innerHTML = 'Total: ' + total + '$';
    myChart.config.data.datasets[0].data[0] = summBTC;
    myChart.update();
    console.log(myChart.data);
}

function btnETHplusf(summaryETH){
    summETH += 50;
    var total = summBTC + summETH;
    summETHValue.innerHTML = 'ETH: ' + summETH + '$';
    Total.innerHTML = 'Total: ' + total + '$';
    myChart.config.data.datasets[0].data[1] = summETH;
    myChart.update();
    console.log(myChart.data);
}
function btnETHminusf(summaryETH){
    summETH -= 50;
    var total = summBTC + summETH;
    summETHValue.innerHTML = 'ETH: ' + summETH + '$';
    Total.innerHTML = 'Total: ' + total + '$';
    myChart.config.data.datasets[0].data[1] = summETH;
    myChart.update();
}

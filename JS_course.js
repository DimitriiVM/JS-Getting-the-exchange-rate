<div style="text-align: right; margin-right: 3%">
  <div id="id_MONEY_LAST"> </div>
</div>
<script>
	let USD_LAST = 0;
  	let EUR_LAST = 0;
    let textSYRC ="";
fetch('https://iss.moex.com/iss/statistics/engines/currency/markets/selt/rates.json?iss.meta=off')
.then((response) => {
    if (!response.ok) {
        throw new Error('HTTP error, status = ' + response.status);
    }
    return response.json();
})
.then((json) => {
	USD_LAST = json.cbrf.data[0][json.cbrf.columns.indexOf('CBRF_USD_LAST')];
    //document.getElementById('id_USD_LAST').innerHTML = USD_LAST;
  	EUR_LAST = json.cbrf.data[0][json.cbrf.columns.indexOf('CBRF_EUR_LAST')];
    USD_LAST = "USD/RUB: " + USD_LAST;
    EUR_LAST = "EUR/RUB: " + EUR_LAST;
    MONEY_LAST = USD_LAST + " " + EUR_LAST;
  	document.getElementById('id_MONEY_LAST').innerHTML = MONEY_LAST;
})
.catch((error) => {
    console.error(error);
});
</script>

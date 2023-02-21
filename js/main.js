function initials() {
    activate('tabfive', 'table5')
}

document.onload = initials()

var localeString

function performCalculation1() {
    var buyingprice2
    var sellingprice2
    var invest2
    var sendingfee2
    var withdrawfee2
    var returns2
    var profit2

    buyingprice2 = document.getElementById('buyingprice2').innerHTML
    buyingprice2 = parseFloat(buyingprice2)

    sellingprice2 = document.getElementById('sellingprice2').innerHTML
    sellingprice2 = parseFloat(sellingprice2)

    invest2 = document.getElementById('invest2').innerHTML
    invest2 = parseFloat(invest2)

    sendingfee2 = document.getElementById('sendingfee2').innerHTML
    sendingfee2 = parseFloat(sendingfee2)

    withdrawfee2 = document.getElementById('withdrawfee2').innerHTML
    withdrawfee2 = parseFloat(withdrawfee2)

    returns2 = invest2 * sellingprice2 / buyingprice2
    returns2 = Math.floor(returns2)
    withdrawfee2 = withdrawfee2 * returns2 / 100

    profit2 = returns2 - withdrawfee2 - invest2 - sendingfee2
    profit2 = Math.floor(profit2)

    document.getElementById('profit2').innerHTML = profit2.toLocaleString()
    document.getElementById('returns2').innerHTML = returns2.toLocaleString()
}

function performCalculation2() {
    var btcbought
    var btcsendingfee
    var btcsellingprice
    var btcsellingfee
    var mpesamoneysent
    var mpesasendingfee
    var mpesawithdrawfee
    var profit

    btcbought = document.getElementById('btcbought').innerHTML
    btcbought = parseFloat(btcbought)

    btcsendingfee = document.getElementById('btcsendingfee').innerHTML
    btcsendingfee = parseFloat(btcsendingfee)

    btcsellingprice = document.getElementById('btcsellingprice').innerHTML
    btcsellingprice = parseFloat(btcsellingprice)

    btcsellingfee = document.getElementById('btcsellingfee').innerHTML
    btcsellingfee = parseFloat(btcsellingfee)

    mpesamoneysent = document.getElementById('mpesamoneysent').innerHTML
    mpesamoneysent = parseFloat(mpesamoneysent)

    mpesasendingfee = document.getElementById('mpesasendingfee').innerHTML
    mpesasendingfee = parseFloat(mpesasendingfee)

    mpesawithdrawfee = document.getElementById('mpesawithdrawfee').innerHTML
    mpesawithdrawfee = parseFloat(mpesawithdrawfee)

    profit = (btcbought - btcsendingfee) * btcsellingprice 
    profit = profit * (100 - btcsellingfee) / 100
    profit = profit - mpesamoneysent - mpesasendingfee - mpesawithdrawfee

    document.getElementById('profit').innerHTML = (Math.floor(profit)).toLocaleString()
}

function performCalculation3() {
    var tenmRate
    var foreignRate
    var localRate
    var value

    tenmRate = document.getElementById('tenmRate').innerHTML
    tenmRate = parseFloat(tenmRate)

    foreignRate = document.getElementById('foreignRate').innerHTML
    foreignRate = parseFloat(foreignRate)

    localRate = foreignRate * 10000000 / tenmRate

    document.getElementById('localRate').innerHTML = localRate.toLocaleString()
}

function performCalculation4() {
    var fxbuy
    var fxtp
    var fxsl
    var profitrate
    var lossrate

    profitrate = document.getElementById('profitrate').innerHTML
    profitrate = parseFloat(profitrate)

    lossrate = document.getElementById('lossrate').innerHTML
    lossrate = parseFloat(lossrate)

    fxbuy = document.getElementById('fxbuy').innerHTML
    fxbuy = parseFloat(fxbuy)

    fxtp = fxbuy * (1 + profitrate / 100)
    fxtp = parseFloat(fxtp).toFixed(4)

    fxsl = fxbuy * (1 - lossrate / 100)
    fxsl = parseFloat(fxsl).toFixed(4)

    document.getElementById('fxtp').innerHTML = fxtp
    document.getElementById('fxsl').innerHTML = fxsl
}

function performCalculation5() {
    var dollarBuy
    var dollarRate
    var dollarPercent
    var dollarProfit
    var dollarInvest
    var dollarReturns
    var btcDollarMarket
    var btcDollarSell
    var btcDollarBuy
    var btcDollarSellFee

    dollarBuy = document.getElementById('dollarBuy').innerHTML
    dollarBuy = parseFloat(dollarBuy)

    dollarRate = document.getElementById('dollarRate').innerHTML
    dollarRate = parseFloat(dollarRate)

    dollarPercent = ((dollarBuy - dollarRate) / dollarBuy) * 100
    dollarPercent = parseFloat(dollarPercent).toFixed(2)
    document.getElementById('dollarPercent').innerHTML = dollarPercent

    dollarInvest = document.getElementById('dollarInvest').innerHTML
    dollarInvest = parseFloat(dollarInvest)

    btcDollarMarket = document.getElementById('btcDollarMarket').innerHTML
    btcDollarMarket = parseFloat(btcDollarMarket)

    btcDollarBuy = parseFloat(btcDollarMarket * (1 + (dollarPercent / 100)))
    btcDollarBuy = Math.floor(parseFloat(btcDollarBuy * (1 + 0.1 / 100)))
    document.getElementById('btcDollarBuy').innerHTML = btcDollarBuy

    btcDollarSell = document.getElementById('btcDollarSell').innerHTML
    btcDollarSell = parseFloat(btcDollarSell)

    dollarReturns = dollarInvest * btcDollarSell / btcDollarBuy
    dollarReturns = Math.floor(dollarReturns)
    document.getElementById('dollarReturns').innerHTML = dollarReturns.toLocaleString()

    btcDollarSellFee = document.getElementById('btcDollarSellFee').innerHTML
    btcDollarSellFee = parseFloat(btcDollarSellFee)
    btcDollarSellFee = btcDollarSellFee * dollarReturns / 100

    dollarProfit = dollarReturns - btcDollarSellFee - dollarInvest 
    dollarProfit = Math.floor(dollarProfit)
    document.getElementById('dollarProfit').innerHTML = dollarProfit.toLocaleString()
}

function performCalculation6() {
    var btcMarketRate6
    var btcBuyRate6
    var btcPercentage6
    var dollarMarket6
    var dollarBuyRate6
    var dollarSellRate6
    var dollarSellFee6
    var investment6
    var returns6
    var profit6

    btcMarketRate6 = document.getElementById('btcMarketRate6').innerHTML
    btcMarketRate6 = parseFloat(btcMarketRate6)

    btcBuyRate6 = document.getElementById('btcBuyRate6').innerHTML
    btcBuyRate6 = parseFloat(btcBuyRate6)

    btcPercentage6 = ((btcBuyRate6 - btcMarketRate6) / btcMarketRate6) * 100
    btcPercentage6 = parseFloat(btcPercentage6).toFixed(2)
    document.getElementById('btcPercentage6').innerHTML = btcPercentage6

    investment6 = document.getElementById('investment6').innerHTML
    investment6 = parseFloat(investment6)

    dollarMarket6 = document.getElementById('dollarMarket6').innerHTML
    dollarMarket6 = parseFloat(dollarMarket6)

    dollarBuyRate6 = parseFloat(dollarMarket6 * (1 + (btcPercentage6 / 100)))
    dollarBuyRate6 = parseFloat(dollarBuyRate6 * (1 + (0.1 / 100))).toFixed(2)
    document.getElementById('dollarBuyRate6').innerHTML = dollarBuyRate6

    dollarSellRate6 = document.getElementById('dollarSellRate6').innerHTML
    dollarSellRate6 = parseFloat(dollarSellRate6)

    returns6 = investment6 * dollarSellRate6 / dollarBuyRate6
    returns6 = Math.floor(returns6)
    document.getElementById('returns6').innerHTML = returns6.toLocaleString()

    dollarSellFee6 = document.getElementById('dollarSellFee6').innerHTML
    dollarSellFee6 = parseFloat(dollarSellFee6)
    dollarSellFee6 = dollarSellFee6 * returns6 / 100

    profit6 = returns6 - dollarSellFee6 - investment6 
    profit6 = Math.floor(profit6)
    document.getElementById('profit6').innerHTML = profit6.toLocaleString()
}

function performCalculation7() {
    var cmx1
    var cmy1
    var cmx2
    var cmy2

    cmx1 = document.getElementById('cmx1').innerHTML
    cmx1 = parseFloat(cmx1)

    cmx2 = document.getElementById('cmx2').innerHTML
    cmx2 = parseFloat(cmx2)

    cmy1 = document.getElementById('cmy1').innerHTML
    cmy1 = parseFloat(cmy1)

    cmy2 = cmx2 * cmy1 / cmx1
    cmy2 = Math.floor(cmy2)

    document.getElementById('cmy2').innerHTML = cmy2.toLocaleString()

}

function performCalculation8() {
    var arb1InitialBase
    var arb1Cry1Base
    var arb1Cry1Cry2
    var arb1Cry2Base
    var arb1FinalBase
    var arb1Profit
    var temp
    var fee1
    var fee2
    var fee3

    fee1 = 0.1
    fee2 = 0.1
    fee3 = 0.1

    fee1 = document.getElementById('arb1Fee1').innerHTML
    fee1 = parseFloat(fee1)

    fee2 = document.getElementById('arb1Fee2').innerHTML
    fee2 = parseFloat(fee2)

    fee3 = document.getElementById('arb1Fee3').innerHTML
    fee3 = parseFloat(fee3)

    arb1InitialBase = document.getElementById('arb1InitialBase').innerHTML
    arb1InitialBase = parseFloat(arb1InitialBase)

    arb1Cry1Base = document.getElementById('arb1Cry1Base').innerHTML
    arb1Cry1Base = parseFloat(arb1Cry1Base)

    arb1Cry2Cry1 = document.getElementById('arb1Cry2Cry1').innerHTML
    arb1Cry2Cry1 = parseFloat(arb1Cry2Cry1)

    arb1Cry2Base = document.getElementById('arb1Cry2Base').innerHTML
    arb1Cry2Base = parseFloat(arb1Cry2Base)

    temp = (arb1InitialBase / arb1Cry1Base) * ((100 - fee1) / 100)

    temp = (temp / arb1Cry2Cry1) * ((100 - fee2) / 100)

    temp = (temp * arb1Cry2Base) * ((100 - fee3) / 100)

    arb1FinalBase = Math.floor(temp)

    arb1Profit = arb1FinalBase - arb1InitialBase

    document.getElementById('arb1FinalBase').innerHTML = arb1FinalBase.toLocaleString()
    document.getElementById('arb1Profit').innerHTML = arb1Profit.toLocaleString()
}

function performCalculation9() {
    var arb2InitialBase
    var arb2Cry1Base
    var arb2Cry2Cry1
    var arb2Cry2Base
    var arb2FinalBase
    var arb2Profit
    var temp
    var fee1
    var fee2
    var fee3

    fee1 = 0.1
    fee2 = 0.1
    fee3 = 0.

    fee1 = document.getElementById('arb2Fee1').innerHTML
    fee1 = parseFloat(fee1)

    fee2 = document.getElementById('arb2Fee2').innerHTML
    fee2 = parseFloat(fee2)

    fee3 = document.getElementById('arb2Fee2').innerHTML
    fee3 = parseFloat(fee3)

    arb2InitialBase = document.getElementById('arb2InitialBase').innerHTML
    arb2InitialBase = parseFloat(arb2InitialBase)

    arb2Cry1Base = document.getElementById('arb2Cry1Base').innerHTML
    arb2Cry1Base = parseFloat(arb2Cry1Base)

    arb2Cry1Cry2 = document.getElementById('arb2Cry1Cry2').innerHTML
    arb2Cry1Cry2 = parseFloat(arb2Cry1Cry2)

    arb2Cry2Base = document.getElementById('arb2Cry2Base').innerHTML
    arb2Cry2Base = parseFloat(arb2Cry2Base)

    temp = (arb2InitialBase / arb2Cry1Base) * ((100 - fee1) / 100)

    temp = (temp * arb2Cry1Cry2) * ((100 - fee2) / 100)

    temp = (temp * arb2Cry2Base) * ((100 - fee3) / 100)

    arb2FinalBase = Math.floor(temp)

    arb2Profit = arb2FinalBase - arb2InitialBase

    document.getElementById('arb2FinalBase').innerHTML = arb2FinalBase.toLocaleString()
    document.getElementById('arb2Profit').innerHTML = arb2Profit.toLocaleString()
}

function checkkey(e) {
    if (e.keyCode == 13) {
        return false
    }
}

function changeformat(x) {
    if (document.getElementById(x).innerHTML != ''){
        document.getElementById(x).innerHTML = parseFloat(document.getElementById(x).innerHTML).toLocaleString()
    }
}

function tabActivation(x) {
    document.getElementById(x).style.background = 'linear-gradient(to bottom, #7892c2 5%, #476e9e 100%)'
    document.getElementById(x).style.backgroundColor = '#7892c2'
    document.getElementById(x).style.border = '#4e6096'
}

function tabInactivation(x) {
    document.getElementById(x).style.removeProperty('background')
    document.getElementById(x).style.removeProperty('backgroundColor')
    document.getElementById(x).style.removeProperty('border')
}

function tableActivation(x) {
    document.getElementById(x).style.removeProperty('display')
}

function tableInactivation(x) {
    document.getElementById(x).style.display = 'none'
}

function activate(x, y) {
    //make sure the order for tabs and tables arrays is the same otherwise we may separate loops for both
    var tabs = ['tabone', 'tabtwo', 'tabthree', 'tabfour', 'tabfive', 'tabsix', 'tabseven', 'tabeight', 'tabnine']
    var tables = ['table1', 'table2', 'table3', 'table4', 'table5', 'table6', 'table7', 'table8', 'table9']

    tabActivation(x)

    document.getElementById(x).style.background = 'linear-gradient(to bottom, #7892c2 5%, #476e9e 100%)'
    document.getElementById(x).style.backgroundColor = '#7892c2'
    document.getElementById('calcheader').innerText =  document.getElementById(x).innerText

    tableActivation(y)

    for(var i = 0; i < tabs.length; i++) {
        if(tabs[i] != x) {
            tabInactivation(tabs[i])

            document.getElementById(tabs[i]).style.background = 'white'
            document.getElementById(tabs[i]).style.color = 'black'

            tableInactivation(tables[i])
        }
    }
}

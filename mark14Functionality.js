//step2 - ex04 - selecting all elements

const initialStockPrice = document.querySelector("#init-stock-price");
const qtyStocks = document.querySelector("#qty-stocks");
const currStockPrice = document.querySelector("#curr-stock-price");
const tellMeBtn = document.querySelector("#tell-me-btn");
const outputDiv = document.querySelector("#output-container");

function showMessage(msg)
{
    outputDiv.innerText = msg;
}

//step2 - ex05 - creating functions for calculating profit/loss

function calculateProfitAndLoss()
{
    var initialPriceValue = Number(initialStockPrice.value);
    console.log("initialPriceValue : ",initialPriceValue);
    var currPriceValue = Number(currStockPrice.value);
    console.log("currPriceValue : ",currPriceValue);
    var qtyStocksValue = Number(qtyStocks.value);
    console.log("qtyStocksValue : ",qtyStocksValue);

    var totalInitialValue = initialPriceValue * qtyStocksValue;

    if(initialPriceValue > currPriceValue)
    {
        //loss logic
        var totalLoss = (initialPriceValue - currPriceValue)*qtyStocksValue;
        console.log("loss : "+totalLoss+", typeof loss : ",typeof loss);
        var lossPercentage = Math.round((totalLoss/totalInitialValue)*100);
        console.log("lossPercentage : "+lossPercentage);
        var message = "Hey the loss is : "+totalLoss+" and the loss percentage is : "+lossPercentage+"%";
        showMessage(message);


    }
    else if(currPriceValue > initialPriceValue)
    {
        //profit logic
        var totalProfit = (currPriceValue - initialPriceValue)*qtyStocksValue;
        
        console.log("Profit : "+totalProfit+", typeof profit : ", typeof profit);
        var profitPercentage = Math.round((totalProfit/totalInitialValue)*100);
        console.log("profitPercentage : "+profitPercentage);
        var message = "Hey the profit is : "+totalProfit+" and the profit percentage is : "+profitPercentage+"%";
        showMessage(message);
    }
    else
    {
        var message = "Hey! Since the current stock price is similar to initial stock price, there is no profit or loss 😊"
        showMessage(message);
    }
}

//step2 - ex06 - adding event listeners

function tellMeBtnHandler()
{
    console.log("Button Clicked!");
    calculateProfitAndLoss();
}

tellMeBtn.addEventListener("click",tellMeBtnHandler);
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

    if(initialPriceValue > currPriceValue)
    {
        //loss logic
        var loss = (initialPriceValue - currPriceValue)*qtyStocksValue;
        console.log("loss : "+loss+", typeof loss : ",typeof loss);
        var lossPercentage = Math.round((loss/initialPriceValue)*100);
        console.log("lossPercentage : "+lossPercentage);
        var message = "Hey the loss is : "+loss+" and the loss percentage is : "+lossPercentage+"%";
        showMessage(message);


    }
    else if(currPriceValue > initialPriceValue)
    {
        //profit logic
        var profit = (currPriceValue - initialPriceValue)*qtyStocksValue;
        console.log("Profit : "+profit+", typeof profit : ", typeof profit);
        var profitPercentage = Math.round((profit/initialPriceValue)*100);
        console.log("profitPercentage : "+profitPercentage);
        var message = "Hey the profit is : "+profit+" and the profit percentage is : "+profitPercentage+"%";
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
import { filterStocksByPrice, StockSearch } from "./funcsion.js";
import input from "analiza-sync"

while(true){
    const resultMenu = Number(input(`
        Welcome to the stock trading app:
        1. Search by stock name or ID
        2. View stocks by stock value
        3. Buy or sell a stock
        4. Exit
        Enter the desired number
        `))
    switch(resultMenu){ 
        case 1:
            const resultid = input(`enter ID or name: `)
            console.log(StockSearch(resultid))
                break
        case 2:
            const resultprice = Number(input(`Enter amount: `))
            const UpOrDown = input(`enter true for the up or false for the down: `)
            console.log(filterStocksByPrice(resultprice,UpOrDown));
             
        } 

}


    
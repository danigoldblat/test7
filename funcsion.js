import input from "analiza-sync"
import { stockMarket } from "./data.js"


export function StockSearch(identifier){
    
    const resultIdentifier = stockMarket.stocks.find(stock =>stock.id===identifier || stock.name===identifier)
    return [resultIdentifier]
}
   
    
    



export function filterStocksByPrice(givenPrice, above){
    const arr = []
    for(let i = 0;i<stockMarket.stocks.length;i++){
        if(above===`true` && stockMarket.stocks[i].currentPrice >= givenPrice){
            arr.push(stockMarket.stocks[i])   
        }
        else if(above===`false` && stockMarket.stocks[i].currentPrice <= givenPrice){
            arr.push(stockMarket.stocks[i]) 
        }
    }return arr
}
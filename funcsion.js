import input from "analiza-sync"
import { stockMarket } from "./data.js"


export function StockSearch(identifier){
    
    const resultIdentifier = stockMarket.stocks.find(stock =>i.id===identifier || i.name===identifier)
    return [resultIdentifier]
}
   
    
    



export function filterStocksByPrice(givenPrice, above){
    const resultPrice = stockMarket.stocks.filter()
}
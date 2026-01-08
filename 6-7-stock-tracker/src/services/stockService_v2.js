const BASE_URL = "http://localhost:3001/api";  // base url 
// const API_URL = "http://localhost:3001/api";

// calling an API - top 5 stocks
const getStocks = () => {
  return fetch(`${BASE_URL}/stocks`).then((res) => res.json());

  //http://localhost:3001/api/stocks  - end point 
};


// calling an API - get 7 day history of a specific stock
const getStockHistory = (symbol) => {
  return fetch(`${BASE_URL}/stocks/${symbol}/history`).then((res) => res.json());

  // http://localhost:3001/api/stocks/AAPL/history  - end point 
  // http://localhost:3001/api/stocks/GOOGLE/history  - end point  
};

export { getStocks, getStockHistory };

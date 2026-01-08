const mockStocks = [
  { symbol: "AAPL", name: "Apple Inc.", price: 178.52, change: 2.34 },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 141.80, change: -1.22 },
  { symbol: "MSFT", name: "Microsoft Corp.", price: 378.91, change: 4.15 },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: 178.25, change: -0.89 },
  { symbol: "TSLA", name: "Tesla Inc.", price: 248.50, change: 7.63 }
];

const mockHistory = {
  AAPL: [172.10, 174.25, 175.80, 173.90, 176.45, 177.20, 178.52],
  GOOGL: [143.50, 142.80, 144.10, 143.20, 142.00, 141.50, 141.80],
  MSFT: [370.25, 372.40, 374.80, 373.50, 376.20, 377.85, 378.91],
  AMZN: [180.30, 179.50, 178.90, 179.80, 178.60, 177.90, 178.25],
  TSLA: [238.40, 240.80, 242.50, 245.20, 244.80, 247.30, 248.50]
};

const getStocks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockStocks);
    }, 2000);
  });
};

const getStockHistory = (symbol) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const prices = mockHistory[symbol] || [];
      const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      const history = prices.map((price, index) => ({
        day: days[index],
        price: price
      }));
      resolve(history);
    }, 2000);
  });
};

export { getStocks, getStockHistory };

const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

const stocks = [
  { symbol: "AAPL", name: "Apple Inc.", price: 200.52, change: 2.34 },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 141.80, change: -1.22 },
  { symbol: "MSFT", name: "Microsoft Corp.", price: 378.91, change: 4.15 },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: 178.25, change: -0.89 },
  { symbol: "TSLA", name: "Tesla Inc.", price: 248.50, change: 7.63 }
]

const history = {
  AAPL: [172.10, 174.25, 175.80, 173.90, 176.45, 177.20, 178.52],
  GOOGL: [143.50, 142.80, 144.10, 143.20, 142.00, 141.50, 141.80],
  MSFT: [370.25, 372.40, 374.80, 373.50, 376.20, 377.85, 378.91],
  AMZN: [180.30, 179.50, 178.90, 179.80, 178.60, 177.90, 178.25],
  TSLA: [238.40, 240.80, 242.50, 245.20, 244.80, 247.30, 248.50]
}

app.get("/api/stocks", (req, res) => {
  res.json(stocks)
})

app.get("/api/stocks/:symbol/history", (req, res) => {
  const { symbol } = req.params
  const prices = history[symbol]

  if (!prices) {
    return res.status(404).json({ error: "Stock not found" })
  }

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const data = prices.map((price, index) => ({
    day: days[index],
    price: price
  }))

  res.json(data)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
import { useState, useEffect } from "react";
import { getStocks } from "../../services/stockService_v2";
import StockCard from "./StockCard";
import StockHistory from "./StockHistory";
import Loader from "../common/Loader";
import ErrorMessage from "../common/ErrorMessage";

const Watchlist = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  useEffect(() => {
    getStocks()
      .then((data) => {
        setStocks(data);
        setLoading(false);
        if (data.length === 0) {
          setError("Failed to fetch stocks");
          setLoading(false);
        }
      })
      .catch((err) => {
        setError("Failed to fetch stocks");
        setLoading(false);
      });
  }, []);

  const handleCardClick = (symbol) => {
    setSelectedSymbol(selectedSymbol === symbol ? null : symbol);
  };

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="watchlist">
      <h2>My Watchlist</h2>
      <div className="stock-list">
        {stocks.map((stock) => (
          <StockCard
            key={stock.symbol}
            stock={stock}
            isSelected={selectedSymbol === stock.symbol}
            onClick={() => handleCardClick(stock.symbol)}
          />
        ))}
      </div>
      {selectedSymbol && <StockHistory symbol={selectedSymbol} />}
    </div>
  );
};

export default Watchlist;

import { useState, useEffect } from "react";
import { getStockHistory } from "../../services/stockService_v2";
import Card from "../common/Card";
import Loader from "../common/Loader";

const StockHistory = ({ symbol }) => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getStockHistory(symbol).then((data) => {
      setHistory(data);
      setLoading(false);
    });
  }, [symbol]);

  if (loading) return <Loader />;

  return (
    <Card>
      <div className="stock-history">
        <h3>7-Day Closing Prices - {symbol}</h3>
        <div className="history-grid">
          {history.map((item) => (
            <div key={item.day} className="history-item">
              <span className="day">{item.day}</span>
              <span className="history-price">${item.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default StockHistory;

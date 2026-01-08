import Card from "../common/Card";

const StockCard = ({ stock, isSelected, onClick }) => {
  const isPositive = stock.change >= 0;

  return (
    <div onClick={onClick} className={isSelected ? "stock-card-wrapper selected" : "stock-card-wrapper"}>
      <Card>
        <div className="stock-card">
          <div className="stock-header">
            <span className="symbol">{stock.symbol}</span>
            <span className="name">{stock.name}</span>
          </div>
          <div className="stock-price">
            <span className="price">${stock.price.toFixed(2)}</span>
            <span className={isPositive ? "change positive" : "change negative"}>
              {isPositive ? "+" : ""}{stock.change.toFixed(2)}
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StockCard;

import { useState, useRef } from 'react';

const PRICES = {
    small: 8,
    medium: 12,
    large: 16,
};

const ControlledPizzaForm = () => {
    const [name, setName] = useState('');
    const [size, setSize] = useState('medium');
    const [toppings, setToppings] = useState({
        pepperoni: false,
        mushrooms: false,
        olives: false,
        bacon: false,
    });
    const [quantity, setQuantity] = useState(1);
    const nameRef = useRef();

    const toppingCount = Object.values(toppings).filter(value => value === true).length;
    const total = (PRICES[size] + toppingCount * 1.5) * quantity;

    const handleToppingChange = (topping) => {
        setToppings((prev) => ({ ...prev, [topping]: !prev[topping] }));
    };

    const handleQuantityChange = (e) => {
        const val = parseInt(e.target.value, 10);
        if (val >= 1 && val <= 10) setQuantity(val);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentName = nameRef.current.value;
        setName(currentName); // useEffect to read updated and place 
        alert(`Order placed for ${currentName}! Total: $${total.toFixed(2)}`); 
    };

    return (
        <div>
            <h2>🍕 Pizza Order</h2>

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                    <label>
                        Name
                        <br />
                        <input
                            type="text"
                            // value={name}
                            ref={nameRef}
                            // onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                        />
                    </label>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label>
                        Size
                        <br />
                        <select value={size} onChange={(e) => setSize(e.target.value)}>
                            <option value="small">Small - $8</option>
                            <option value="medium">Medium - $12</option>
                            <option value="large">Large - $16</option>
                        </select>
                    </label>
                </div>

                <fieldset style={{ marginBottom: '1rem' }}>
                    <legend>Toppings ($1.50 each)</legend>
                    {Object.keys(toppings).map((topping) => (
                        <label key={topping} style={{ marginRight: '1rem' }}>
                            <input
                                type="checkbox"
                                checked={toppings[topping]}
                                onChange={() => handleToppingChange(topping)}
                            />
                            {topping.charAt(0).toUpperCase() + topping.slice(1)}
                        </label>
                    ))}
                </fieldset>

                <div style={{ marginBottom: '1rem' }}>
                    <label>
                        Quantity
                        <br />
                        <input
                            type="number"
                            value={quantity}
                            onChange={handleQuantityChange}
                            min="1"
                            max="10"
                        />
                    </label>
                </div>

                <div style={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                    Total: ${total.toFixed(2)}
                </div>

                <button type="submit">
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default ControlledPizzaForm;
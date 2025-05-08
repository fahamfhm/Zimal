import React, { useEffect, useState } from 'react';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function Foods() {
  const [foods, setFoods] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    fetch(`${backendUrl}/foods`) 
      .then(res => res.json())
      .then(data => setFoods(data))
      .catch(err => console.error('Fetch error:', err));
  }, []);

  const handleQtyChange = (id, qty) => {
    setQuantities(prev => ({
      ...prev,
      [id]: qty
    }));
  };

  const handleWhatsAppBuy = async (item) => {
    const qty = quantities[item.id] || 1;
    const price = String(item.price);
    const total = qty * parseFloat(price.replace('$', '') || 0);
    const message = `Hi, I'd like to order:\n${item.name} Rs ${parseFloat(item.price).toFixed(2)} x (${qty})\nTotal: Rs ${parseFloat(total).toFixed(2)}`;
    const whatsappLink = `https://wa.me/94753320905?text=${encodeURIComponent(message)}`;

    if (item.qty < qty) {
      alert('Not enough stock');
      return;
    }

    window.open(whatsappLink, '_blank');

    try {
      await fetch(`${backendUrl}/foods/update-stock`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: item.id, quantity: qty })
      });
      console.log('Stock updated!');
    } catch (error) {
      console.error('Failed to update stock:', error);
    }
  };

  return (
    <div className="bg-white text-green-800 min-h-screen py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-green-700">Our Foods</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {foods.map((item) => (
            <div key={item.id} className="bg-white border p-6 rounded-xl shadow hover:shadow-green-300 transition-all">
              <img
                src={`${backendUrl}/${item.image}`} 
                alt={item.name}
                className="rounded-xl mb-4 w-full h-56 object-cover"
              />
              <h3 className="text-2xl font-bold">{item.name}</h3>
              <p className="text-gray-700">{item.description}</p>
              <p className="text-green-600 font-semibold mb-2">Rs {parseFloat(item.price).toFixed(2)}</p>
              <div className="flex items-center justify-center space-x-4 mb-4">
                <button
                  onClick={() => {
                    const currentQty = quantities[item.id] ?? 1;
                    if (currentQty > 1) handleQtyChange(item.id, currentQty - 1);
                  }}
                  className="bg-green-100 text-green-700 hover:bg-green-200 transition-all duration-200 font-bold w-10 h-10 rounded-full shadow-md hover:scale-105"
                >
                  −
                </button>

                <span className="text-xl font-semibold text-green-800 w-8 text-center">
                  {quantities[item.id] ?? 1}
                </span>

                <button
                  onClick={() => {
                    const currentQty = quantities[item.id] ?? 1;
                    handleQtyChange(item.id, currentQty + 1);
                  }}
                  className="bg-green-100 text-green-700 hover:bg-green-200 transition-all duration-200 font-bold w-10 h-10 rounded-full shadow-md hover:scale-105"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => handleWhatsAppBuy(item)}
                className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded-full"
              >
                Buy Now via WhatsApp
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Foods;

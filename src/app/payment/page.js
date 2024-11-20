"use client";

import useCartStore from "../store/cartStore";
import Image from "next/image";

const PaymentPage = () => {
  const { cart, clearCart } = useCartStore();

  // Beregn totalpris
  const totalCartPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  const handlePayment = () => {
    alert("Betaling gennemført!");
    clearCart(); // Tøm kurven efter betaling
  };

  return (
    <div>
      <h1>Betalingsside</h1>
      {cart.length > 0 ? (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <Image src={product.thumbnail} width={100} height={100} alt={product.title} />
              {product.title} - {product.quantity} stk. - {product.price * product.quantity}$
            </li>
          ))}
        </ul>
      ) : (
        <p>Din kurv er tom.</p>
      )}
      <p>Total: {totalCartPrice.toFixed(2)}$</p>
      <button onClick={handlePayment}>Gennemfør betaling</button>
    </div>
  );
};

export default PaymentPage;

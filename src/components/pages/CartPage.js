import React from "react";

const CartPage = (props) => {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  return (
    <div>
      <h2>Cart Page</h2>
      <p>
        Add to Cart : ProductID: {productId} Qty: {qty}
      </p>
    </div>
  );
};

export default CartPage;
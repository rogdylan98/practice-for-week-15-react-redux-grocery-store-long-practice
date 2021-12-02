import CartItem from './CartItem';
import './Cart.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getProduceInCart, purchaseCart } from '../../Store/cart';

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector(getProduceInCart);

  if (!cartItems || !cartItems.length) return (
    <div className="cart">
      No items in the cart. Start selecting items to purchase.
    </div>
  );

  const onSubmit = (e) => {
    e.preventDefault();
    window.alert(
      "Purchased the following:\n" +
      `${cartItems.map(item => `${item.count} of ${item.name}`).join('\n')}`
    );
    dispatch(purchaseCart());
  }

  return (
    <div className="cart">
      <ul>
        {cartItems.map(item => <CartItem key={item.id} item={item} />)}
      </ul>
      <hr />
      <form onSubmit={onSubmit}>
        <button type="submit">Purchase</button>
      </form>
    </div>
  )
}

export default Cart;

import { addToCart } from '../../Store/cart';
import { likeUnlike } from '../../Store/produce';
import { useDispatch } from 'react-redux';

function ProduceDetails({ produce, showCart }) {
  const cartItem = {};
  const dispatch = useDispatch()
  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={() => dispatch(likeUnlike(produce.id))}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={() => {
              showCart(true);
              return dispatch(addToCart(produce.id))
            }}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;

import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const getTotal = () =>
        cartList.reduce(
          (total, currentValue) =>
            total + currentValue.price * currentValue.quantity,
          0,
        )

      return (
        <div className="summary-container">
          <h4>
            Order Total: <span>{getTotal()}</span>
          </h4>
          <p>{cartList.length} items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary

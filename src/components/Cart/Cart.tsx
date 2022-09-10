import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.scss";
import IMeal from "../../types/IMeal";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addMeal, removeMeal, emptyCart } from "../../app/mealSlice";

const Cart = (props: any) => {
  const dispatch = useAppDispatch();
  const mealState = useAppSelector((state) => state.meals);
  const meals = mealState.meals;
  const hasMeals = meals.length > 0;
  const totalAmount = `$${mealState.totalAmount.toFixed(2)}`;

  const cartItemAddHandler = (meal: IMeal) => {
    dispatch(addMeal({ ...meal, amount: 1 }));
  };

  const cartItemRemoveHandler = (id: string) => {
    dispatch(removeMeal(id));
  };

  const cartItemEmptyHandler = () => {
    dispatch(emptyCart());
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {meals.map((item: IMeal) => {
        return (
          <CartItem
            key={item.id}
            item={item}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {!hasMeals && (
        <p className={classes["no-items"]}>No meals in your cart</p>
      )}
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasMeals && (
          <button
            className={classes["button--empty"]}
            onClick={cartItemEmptyHandler}
          >
            Empty Cart
          </button>
        )}
        {hasMeals && (
          <button className={classes.button} onClick={props.onHideCart}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;

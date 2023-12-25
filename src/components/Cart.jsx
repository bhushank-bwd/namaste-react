import { useDispatch, useSelector } from "react-redux";
import RestrauntCard from "./RestrauntCard";
import { clearCart } from "../utils/cartSlice";

export const Cart = () => {
  const { items } = useSelector((store) => store.cart);
  console.log(items, "items");
  const dispatch = useDispatch();
  const clearCartitems = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <button
        className="bg-blue-500 font-medium outline-none text-md text-white rounded p-1 h-12 w-32 m-1"
        onClick={clearCartitems}
      >
        Clear Cart
      </button>{" "}
      <div className="p-3 flex">
        {items.map((item, index) => {
          return <RestrauntCard restraurant={item} key={item.id + index} />;
        })}
      </div>
    </>
  );
};

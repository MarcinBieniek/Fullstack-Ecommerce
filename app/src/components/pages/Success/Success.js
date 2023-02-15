import styles from './Success.module.scss';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { userRequest } from "../../../middleware/requestMethods";

const Success = () => {
  const { state } = useLocation();
  
  /* 
  
  Problem z utworzeniem fetch dla createOrder
  
  - udalo mi sie rozwiazac problem z przekazaniem danych zamowienia z cart do succes (za pomoca useLocation)
  https://stackoverflow.com/questions/71380596/pass-data-to-a-component-with-usenavigate-from-react-router-dom?noredirect=1&lq=1

  - pojawil sie problem z fetch - problem lezy chyba w tym ze nie pobieram danych usera ktore wymaga route i model dla tego requestu - do sprawdzenia pozniej

  - invalid token? - to moze byc to!

  - linki
  
  */

  const data = state.stripeData;
  const cart = state.cartData;
  //const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  console.log('stripedata is ', data)
  console.log('cartdata is ', cart)

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          //userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
        
      } catch(err) {
        console.log('error is', err)
      }
    };
    data && createOrder();
  }, [cart, data]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
    </div>
  );
};

export default Success;
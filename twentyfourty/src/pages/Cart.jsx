import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { ToastContainer, toast } from "react-toastify";
import StripeCheckOut from "react-stripe-checkout";

const Cart = () => {
  const productData = useSelector((state) => state.twenty.productData);
  const userInfo = useSelector((state) => state.twenty.userInfo);
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let preço = 0;
    productData.map((item) => {
      preço += item.preço * item.quantity;
      return preço;
    });
    setTotalAmt(preço.toFixed(2));
  }, [productData]);

  const handleCheckOut = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in");
    }
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-white py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Totais Carrinho</h2>
            <p className="flex items-center gap-4 text-base">
              subTotal{""}
              <span className="font-bold text-lg">{totalAmt}</span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping{""}
              <span>
                fewfewifuewhfuwehufhwufhew fuewf hweu fhw fhweu hfweuhfewuhfwue
                fwhu
              </span>
            </p>
          </div>
          <p>
            {""} Total{" "}
            <span className="text-xl flex justify-end font-bold">
              {totalAmt}
            </span>
          </p>
          <button
            onClick={handleCheckOut}
            className="text-base bg-black text-white w-full mt-6 py-3 hover:bg-gray-800 duration-500"
          >
            Checkout
          </button>
          {payNow && (
            <div className="w-full mt-6 flex items-center justify-center">
              <StripeCheckOut
                stripeKey="pk_test_51NIW5TC03jxtB1wtl9HFVNtqK2GRLqaFaFjrY4MtezKSmtzYVbPPNV3XN5JpBCLv5R82cI9ztZ1l9BSWvDsV4StC00SzlFujdl"
                name="Twenty Fourty"
                amount={totalAmt * 100}
                label={`Your payment is €${totalAmt}`}
                // token={payment}
                email={userInfo.email}
                description=""
              />
            </div>
          )}
        </div>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          theme="light"
        />
      </div>
    </div>
  );
};

export default Cart;

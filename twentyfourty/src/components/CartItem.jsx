import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/twentySlice";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();

  const productData = useSelector((state) => state.twenty.productData);

  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="text-2xl">Shopping Cart</h2>
      </div>
      <div className="">
        {productData.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between gap-6 mt-6"
          >
            <div className="flex items-center gap-2">
              <MdOutlineClose
                onClick={() =>
                  dispatch(deleteItem(item._id)) &
                  toast.error(`${item.nome} foi removido`)
                }
                className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
              />
              <img src={item.img} className="w-32 h-32 object-cover" />
            </div>
            <h2 className="w-52">{item.nome}</h2>
            <p className="w-10">€{item.preço}</p>
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantidade</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() =>
                    dispatch(
                      decrementQuantity({
                        _id: item._id,
                        nome: item.nome,
                        img: item.img,
                        preço: item.preço,
                        descrição: item.descrição,
                        tamanho: item.tamanho,
                        quantidade: 1,
                      })
                    )
                  }
                  // onClick={() =>
                  //   setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
                  // }
                  className="border py-2 h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                {item.quantity}
                <button
                  onClick={() =>
                    dispatch(
                      incrementQuantity({
                        _id: item._id,
                        nome: item.nome,
                        img: item.img,
                        preço: item.preço,
                        descrição: item.descrição,
                        tamanho: item.tamanho,
                        quantidade: 1,
                      })
                    )
                  }
                  className="border py-2 h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <p className="w-14">€{item.quantity * item.preço}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          dispatch(resetCart()) & toast.error("O seu carrinho foi limpo!")
        }
        className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300"
      >
        Limpar Carrinho
      </button>
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
          {" "}
          Ir comprar
        </button>
      </Link>
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
  );
};

export default CartItem;

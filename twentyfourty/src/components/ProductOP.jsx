import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/twentySlice";
import { ToastContainer, toast } from "react-toastify";
const ProductOP = () => {
  const [details, setDetails] = useState({});
  const dispatch = useDispatch();
  let [baseQty, setBaseQty] = useState(1);
  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
  }, []);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="">
          <img
            className="w-full h-[550px] object-cover"
            src={details.img}
            alt="imgprod"
          />
          <div className="">
            {details.isNew && (
              <p className="bg-black text-white font-semibold px-8 py-1"></p>
            )}
          </div>
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-12">
          <div className="">
            <h2 className="text-4xl font-semibold">{details.nome}</h2>
            <div className="flex items-center gap-4 mt-3">
              <p className="text-2xl font-medium text-gray-900">
                {details.preço}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-base">
            <div className="flex">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-xs text-gray-500">(Reviews)</p>
          </div>
          <p className="break-all">{details.descrição}</p>
          <div className="flex gap-4">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantidade</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() =>
                    setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
                  }
                  className="border py-2 h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{baseQty}</span>
                <button
                  onClick={() => setBaseQty(baseQty + 1)}
                  className="border py-2 h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: details.id,
                    nome: details.nome,
                    img: details.img,
                    preço: details.preço,
                    descrição: details.descrição,
                    tamanho: details.tamanho,
                    quantity: baseQty,
                  })
                ) & toast.success(`${baseQty + " x " + details.nome} is added`)
              }
              className="bg-black text-white py-3 w-41 px-6 active:bg-gray-800"
            >
              Adicionar ao Carrinho
            </button>
          </div>
          <p className="text-base text-gray-500">
            Categoria: {details.categoria}
          </p>
        </div>
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
  );
};

export default ProductOP;

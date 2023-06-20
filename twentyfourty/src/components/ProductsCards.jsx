import React from "react";
import { useNavigate } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/twentySlice";
import { ToastContainer, toast } from "react-toastify";

const ProductsCards = ({ produto }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = produto.nome;
  const idString = (_id) => {
    return String(_id).toLocaleLowerCase().split(" ").join("");
  };

  const rootId = idString(_id);
  //handle Abrir Produto
  const handleOP = () => {
    navigate(`/ProductOP/${rootId}`, {
      state: {
        item: produto,
      },
    });
  };

  return (
    <div className="group relative">
      <div
        onClick={handleOP}
        className="w-full h-96 cursor-pointer overflow-hidden"
      >
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={produto.img}
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-base font-bold">
              {produto.nome.substring(0, 15)}
            </h2>
          </div>
          <div className="flex justify-end gap-2 relative overflow-hidden w-28 text-sm">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              <p className="font-light">{produto.tamanho}</p>
              <span>|</span>
              <p className="font-semibold">{produto.preço}€</p>
            </div>
            <p
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: produto.id,
                    nome: produto.nome,
                    img: produto.img,
                    preço: produto.preço,
                    descrição: produto.descrição,
                    tamanho: produto.tamanho,
                    quantity: 1,
                  })
                ) & toast.success(`${produto.nome} is added`)
              }
              className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500"
            >
              Add to Cart
              <span>
                <MdAddShoppingCart />
              </span>
            </p>
          </div>
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

export default ProductsCards;

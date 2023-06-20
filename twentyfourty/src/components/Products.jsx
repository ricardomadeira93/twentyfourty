import React from "react";
import ProductsCards from "./ProductsCards";
import { useEffect, useState } from "react";
import { db } from "../config/firebase.config";
import { collection, getDocs } from "firebase/firestore";

const Products = () => {
  const [produtos, setProdutos] = useState([]);
  const artigosCollectionRef = collection(db, "artigos");

  useEffect(() => {
    const getProdutos = async () => {
      const data = await getDocs(artigosCollectionRef);
      setProdutos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProdutos();
  }, []);
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Os nossos produtos
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-black text-center">
          Feitos com a melhor qualidade, esta é a roupa que queres vestir.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {produtos.map((produto) => (
          <ProductsCards key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
};

export default Products;

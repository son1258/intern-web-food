import { atom } from "recoil";
import { selector } from "recoil"; 
import { Product } from "./interfaces/productProp";

export const dataProductState = atom<Product[]>({
    key: "dataProductState",
    default: [],
});

export const fetchDataProductSelector = selector({
    key: "fetchDataProductSelector",
    get: async ({get}) => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        return data;
    },
});


import {createContext,ReactElement,useState} from "react";

export type ProductType = {
    sku:string,
    name:string,
    price:number
}

const initstate:ProductType[] =  [
        {
            "sku": "item0001",
            "name": "Widget",
            "price": 9.99
        },
        {
            "sku": "item0002",
            "name": "Premium Widget",
            "price": 19.99
        },
        {
            "sku": "item0003",
            "name": "Deluxe Widget",
            "price": 29.99
        }
    ]

export type useProductsContextType = {products : ProductType[]};

const initContextState: useProductsContextType = {products:[]};

const ProductsContext = createContext<useProductsContextType>(initContextState);

type childrenType = {children?:ReactElement | ReactElement[]}

export const ProductsProvider= ({children} : childrenType)=>{
    const [products,setProducts] = useState<ProductType[]>(initstate);

    return <ProductsContext.Provider value={{products}}>
        {children}
    </ProductsContext.Provider>
}

export default ProductsContext
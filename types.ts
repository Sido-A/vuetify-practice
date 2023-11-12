export type TProductsOriginal = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
};

type TAdditional = {
  cartCount: number;
};

export type TProductsWithAdditional = TProductsOriginal & TAdditional;

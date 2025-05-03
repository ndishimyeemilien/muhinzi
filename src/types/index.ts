export  interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  stock: number;
  featured?: boolean;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
}
 
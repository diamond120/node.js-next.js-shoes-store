

interface ProductI{
    name:string;
    description:string;
    sale: number | null;
    price: number;
    rating: number;
    [key:string]:any;
}

export default ProductI;
import { Product } from "@/types/product";
import ProductCard from "../../ui/card/product_card";
import { Button } from "@/components/ui/button";

const BestProducts: React.FC = () => {
    // Create an array of best products
    const products: Product[] = [
      {
        title: "Product 1",
        image: "https://via.placeholder.com/150",
        price: "RM 129.99",
      },
      {
        title: "Product 2",
        image: "https://via.placeholder.com/150",
        price: "RM 149.99",
      },
      {
        title: "Product 3",
        image: "https://via.placeholder.com/150",
        price: "RM 159.99",
      },
      {
        title: "Product 4",
        image: "https://via.placeholder.com/150",
        price: "RM 199.99",
      }
    ];

    return (
      <div>
        <h1 className="text-xl font-semibold mb-4">Best Products</h1>
        <div className="w-full mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>
        <Button className="w-full p-6 mt-2" variant={"outline"}>View All Products</Button>
      </div>
    );
  }
  
export default BestProducts;
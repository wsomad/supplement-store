import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Product } from "@/types/product";
import Image from "next/image";
import { HiOutlineShoppingBag } from "react-icons/hi";

interface ProductProps {
  product: Product;
}

const ProductCard: React.FC<ProductProps> = ({product}) => {
  return (
    <div>
      {/* Product Card */}
      <Card className="min-w-[100px] min-h-[350px] py-4">
        <div className="absolute">
          <p className="p-1 bg-primary text-sm text-white rounded-sm">In Stock</p>
        </div>
        {/* Product Image */}
        <div className="flex justify-center items-center mt-12 mb-6">
          <Image
            src={`/images/products/nutriversum.png`}
            alt="Default avatar"
            width={150} 
            height={150}
          />
        </div>
        {/* Product Title */}
        <div>
          <CardTitle className="text-md font-normal w-full max-w-full min-h-[52px]">{product.title}</CardTitle>
        </div>
        {/* Product Price */}
        <div>
          <CardDescription className="text-md font-semibold pb-2">{product.price}</CardDescription>
        </div>
        {/* Button */}
        <div>
          <Button className="py-5 w-full text-white" variant={"default"}>
              <HiOutlineShoppingBag className="text-white cursor-pointer" size={20}></HiOutlineShoppingBag>
              Quick Buy
          </Button>
        </div>
      </Card>
    </div>
  );
}
  
export default ProductCard;
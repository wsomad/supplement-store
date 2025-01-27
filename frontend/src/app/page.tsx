import PopularArticles from "@/components/articles/feature/popular_articles";
import StoreLocation from "@/components/location/store_location";
import BestProducts from "@/components/products/feature/best_products/best_products";

const Home: React.FC = () => {
  return (
    <div>
      <BestProducts></BestProducts>
      <PopularArticles></PopularArticles>
      <StoreLocation></StoreLocation>
    </div>
  );
}

export default Home;
// import ProductCard from "@/component/product/product-card";
// import CartPage from "@/component/cart-page/cartPage";
import HeroPage from "@/component/home/hero";
import TrendingProduct from "@/component/home/productList/mostSale";
import SummerSale from "@/component/home/productList/SummerSale";
export default function Home() {
  return (
    <main>
      <div>
        <HeroPage />
        <TrendingProduct />
        <SummerSale />
        {/* <ProductCard /> */}
        {/* <CartPage /> */}
      </div>
    </main>
  );
}

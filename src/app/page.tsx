// import ProductCard from "@/component/product/product-card";
// import CartPage from "@/component/cart-page/cartPage";
import HeroPage from "@/component/home/hero";
// import TrendingProduct from "@/component/home/productList/mostSale";
// import SummerSale from "@/component/home/productList/SummerSale";
import TrendingProducts from "@/component/home/productList/Trending-sale";
import SummerProducts from "@/component/home/productList/summer-sale";
export default function Home() {
  return (
    <main>
      <div>
        <HeroPage />
        {/* <TrendingProduct />
        <SummerSale /> */}
        <TrendingProducts />
        <SummerProducts />
        {/* <ProductCard /> */}
        {/* <CartPage /> */}
      </div>
    </main>
  );
}

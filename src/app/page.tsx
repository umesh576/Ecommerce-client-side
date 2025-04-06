import ProductCard from "@/component/product/product-card";
import CartPage from "@/component/cart/cart";

export default function Home() {
  return (
    <main>
      <div>
        <ProductCard />
        <CartPage />
      </div>
    </main>
  );
}

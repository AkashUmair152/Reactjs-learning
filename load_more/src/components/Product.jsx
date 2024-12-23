import { useEffect, useState } from "react";

const Product = () => {
  const [loading, setLoading] = useState(false); // لوڈنگ سٹیٹ کنٹرول کرنے کے لیے
  const [products, setProducts] = useState([]); // پروڈکٹس کو اسٹور کرنے کے لیے
  const [count, setCount] = useState(0); // لوڈ مزید پروڈکٹس کے لیے count
  const [totalProducts, setTotalProducts] = useState(0); // ٹوٹل پروڈکٹس کی گنتی

  async function fetchProducts() {
    setLoading(true); // جب ڈیٹا فیچ کیا جا رہا ہو، تو لوڈنگ کو true کریں
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=12&skip=${
          count === 0 ? 0 : count * 12
        }&select=title,price,thumbnail`
      );
      const result = await res.json(); // API ریسپانس کو JSON میں کنورٹ کریں

      // پچھلے پروڈکٹس کے ساتھ نئے پروڈکٹس ایڈ کریں
      setProducts((prevProducts) => [...prevProducts, ...result.products]);

      // ٹوٹل پروڈکٹس کی گنتی سیٹ کریں
      setTotalProducts(result.total);

      setLoading(false); // لوڈنگ کو false کریں
    } catch (e) {
      console.log(e);
      setLoading(false); // اگر کوئی ایرر ہو تو بھی لوڈنگ false ہو
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-center text-2xl font-bold mb-6">Product List</h1>

      {/* Grid Section */}
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-14 gap-x-10 mt-12 mb-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="w-80 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <a href="#">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-72 w-full object-cover rounded-t-lg"
              />
              <div className="px-5 py-4">
                <span className="text-sm uppercase tracking-wide text-gray-500">
                  Brand
                </span>
                <p className="text-xl font-bold text-gray-900 mt-2 truncate">
                  {product.title}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      ${product.price}
                    </p>
                  </div>
                  <button className="text-gray-500 hover:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>

      {/* لوڈ مور بٹن */}
      <div className="text-center mt-8">
        <button
          onClick={() => setCount(count + 1)} // Count کو انکریمنٹ کر کے مزید پروڈکٹس لوڈ کریں
          disabled={loading || products.length >= 100} // بٹن کو ڈسیبل کریں اگر 100 پروڈکٹس سے زیادہ ہو جائیں
          className={`bg-blue-500 text-white px-6 py-2 rounded ${
            loading || products.length >= 100
              ? "cursor-not-allowed opacity-50"
              : ""
          }`}
        >
          {loading
            ? "Loading..."
            : products.length >= 100
            ? "All Products Loaded"
            : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default Product;

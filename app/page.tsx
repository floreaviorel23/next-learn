import ProductCard from "./components/ProductCard";
function Home() {
  return (
    <>
      <h1>Hello. This is the main page</h1>
      <ProductCard></ProductCard>

      <div style={{ marginTop: 10 }}>
        <a href="/users">
          <button>Go to Users</button>
        </a>
      </div>
    </>
  );
}

export default Home;

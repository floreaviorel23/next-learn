"use client";
function ProductCard() {
  return (
    <>
      <h1>This is a client component</h1>
      <button
        onClick={() => {
          console.log("button dada clicked");
        }}
      >
        dada
      </button>
    </>
  );
}

export default ProductCard;

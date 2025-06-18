import React from "react";

function Product() {
  return (
<>
<div className="mt-6 text-center text-2xl font-bold from-neutral-200">Product List</div>

  <div className="flex gap-6 justify-center items-start p-4 flex-wrap mt-12">
    {/* Burger Card */}
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden p-4">
      <img
        className="h-48 w-full object-cover rounded-lg"
        src="burger.jpeg"
        alt="Burger"
      />
      <h2 className="mt-4 text-xl font-semibold text-gray-800">Burger</h2>
      <p className="text-gray-600">This is a short description of the product.</p>
      <p className="mt-2 text-lg text-green-600 font-bold">$49.99</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Buy Now
      </button>
    </div>

    {/* Pizza Card */}
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden p-4">
      <img
        className="h-48 w-full object-cover rounded-lg"
        src="pizaa.jpg"
        alt="Pizza"
      />
      <h2 className="mt-4 text-xl font-semibold text-gray-800">Pizza</h2>
      <p className="text-gray-600">This is a short description of the product.</p>
      <p className="mt-2 text-lg text-green-600 font-bold">$39.99</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Buy Now
      </button>
    </div>

    {/* Pasta Card */}
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden p-4">
      <img
        className="h-48 w-full object-cover rounded-lg"
        src="pasta.jpeg"
        alt="Pasta"
      />
      <h2 className="mt-4 text-xl font-semibold text-gray-800">Pasta</h2>
      <p className="text-gray-600">Delicious Italian pasta with rich sauce.</p>
      <p className="mt-2 text-lg text-green-600 font-bold">$29.99</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Buy Now
      </button>
    </div>

    {/* French Fries Card */}
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden p-4">
      <img
        className="h-48 w-full object-cover rounded-lg"
        src="pizaa.jpg"
        alt="Fries"
      />
      <h2 className="mt-4 text-xl font-semibold text-gray-800">French Fries</h2>
      <p className="text-gray-600">Crispy golden fries served hot and fresh.</p>
      <p className="mt-2 text-lg text-green-600 font-bold">$19.99</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Buy Now
      </button>
    </div>
  </div>
</>


    
  );
}

export default Product;

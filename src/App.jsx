"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { products } from "./data.js"; // นำเข้าข้อมูลสินค้า
import Footer from "./footer.jsx";

export default function ShoppingCart() {
  const [open, setOpen] = useState(false);
  const [Cart, setCart] = useState([]);
  const [couponCode, setCouponCode] = useState(""); // สถานะสำหรับคูปอง
  const [discount, setDiscount] = useState(0);

  // ฟังก์ชันเพิ่มสินค้าเข้าตะกร้า
  function addToCart(prd) {
    const existingProduct = Cart.find((item) => item.id === prd.id);
    if (existingProduct) {
      setCart(
        Cart.map((item) =>
          item.id === prd.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...Cart, { ...prd, quantity: 1 }]);
    }
  }

  function applyCoupon() {
    // ตัวอย่างการตรวจสอบคูปอง
    if (couponCode === "NICEY888") {
      setDiscount(1000); // ลดราคา 1000 บาท
    } else {
      alert("คูปองไม่ถูกต้อง");
    }
  }

  return (
    <>
      <nav class="border-gray-700 bg-gray-800 dark:bg-gray-800 dark:border-gray-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a class="flex items-center space-x-2 rtl:space-x-reverse">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="size-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
          />
        </svg>

            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
              Nicey
            </span>
          </a>
          <button
            onClick={() => setOpen(true)}
            className=" text-white px-4 py-2 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
        </div>
      </nav>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-10"
      >
        <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out" />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <DialogPanel className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-lg font-medium text-gray-900">
                        Shopping cart
                      </DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                          {Cart.length === 0 ? (
                            <li className="flex py-6">
                              <p className="text-gray-500">
                                Your cart is empty.
                              </p>
                            </li>
                          ) : (
                            Cart.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>{product.name}</h3>
                                      <p className="ml-4">{product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {product.color}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">
                                      จำนวน {product.quantity}
                                    </p>
                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                        onClick={() =>
                                          setCart(
                                            Cart.filter(
                                              (p) => p.id !== product.id
                                            )
                                          )
                                        }
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))
                          )}
                        </ul>
                      </div>
                    </div>

                    {/* อินพุตสำหรับคูปอง */}
                    <div className="mt-6">
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="โค้ดส่วนลด"
                        className="border rounded-md p-2"
                      />
                      <button
                        onClick={applyCoupon}
                        className="ml-2 rounded-md bg-indigo-600 text-white px-4 py-2"
                      >
                        ตกลง
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>ราคาทั้งหมด</p>
                      <p>
                        ฿
                        {Cart.reduce(
                          (total, item) =>
                            total + 100 +
                            item.quantity *
                              parseFloat(item.price.replace("$", "")),
                          0
                        ).toFixed(2) - discount}
                      </p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      ราคาส่ง ฿100 แต่ภาษีจะถูกคำนวนเมื่อตกลง.
                    </p>
                    <div className="mt-6">
                      <a className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                        ยืนยัน
                      </a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        หรือ{" "}
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          ซื้อต่อ
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>

      <div className="bg-white flex">
        <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 w-4/4">
          <h3 className="mb-5 text-gray-900">
            {" "}
            ประกาศ : ซื้อตอนนี้ลดสูงสุด 1000 บาท ใช้โค้ด "NICEY888" !!!
          </h3>
          <hr />
          <h2 className="mt-5 text-2xl font-bold tracking-tight text-gray-900">
            Basketball Shoes
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative"
                onClick={() => addToCart(product)}
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>

                <button
                  onClick={() => addToCart(product)}
                  className="mt-2 w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

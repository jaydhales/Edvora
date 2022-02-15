import React, { useContext, useRef } from 'react';
import { ProductContext } from '../App';
import Products from './Products.jsx';

export default function Main() {
  return (
    <div className='w-full flex flex-col'>
      <h1 className='text-[35px] font-bold w-max'>Edvora</h1>
      <ProductsPage />
    </div>
  );
}

function ProductsPage() {
  const { productList, nameList } = useContext(ProductContext);

  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div className=''>
      <p className='text-gray text-2xl w-max'>Products</p>

      {productList.length > 0 &&
        Object.values(nameList).map((sortedData) => (
          <div
            key={sortedData[0].product_name}
            className='relative mb-12 m-0 md:w-[calc(100%-200px)]'
          >
            <h2>{sortedData[0].product_name}</h2>
            <div
              ref={ref}
              className='grid grid-flow-col no-scrollbar mx-4 md:mx-10 gap-5 overflow-scroll bg-dark p-5 rounded-2xl'
            >
              {sortedData.map((products) => (
                <Products products={products} key={products.date} />
              ))}
            </div>
            <button
              className='absolute -right-2 md:right-2 top-[60%]'
              onClick={() => {
                scroll(70);
              }}
            >
              <svg
                width='12'
                height='35'
                viewBox='0 0 12 35'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 1L11 17.5L1 34'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
            <button
              className='absolute top-[60%] -left-2 md:left-2'
              onClick={() => {
                scroll(-70);
                console.log(ref.current.scrollLeft);
              }}
            >
              <svg
                width='12'
                height='35'
                viewBox='0 0 12 35'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='rotate-180'
              >
                <path
                  d='M1 1L11 17.5L1 34'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
        ))}
    </div>
  );
}

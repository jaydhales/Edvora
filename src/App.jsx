import { createContext, useEffect, useState } from 'react';
import Filter from './components/Filter.jsx';
import Main from './components/Main.jsx';
import _ from 'lodash';

import './App.css';

export const ProductContext = createContext();

export default function App() {
  const [productInit, setProductInit] = useState([]);
  const [productList, setProductList] = useState([]);
  const [productFilter, setProductFilter] = useState([]);
  const nameList = _.groupBy(productList, 'product_name');
  const nameListInit = _.groupBy(productInit, 'product_name');
  const stateList = _.groupBy(productList, 'address.state');
  const cityList = _.groupBy(productList, 'address.city');
  const [filtName, setFiltName] = useState('');
  const [filtValue, setFiltValue] = useState('');

  useEffect(() => {
    fetch('https://assessment-edvora.herokuapp.com')
      .then((response) => response.json())
      .then((result) => {
        setProductInit(result);
        setProductList(result);
      })
      .catch((error) => console.log('error', error));
  }, []);

  useEffect(() => {
    if (productList.length > 1) {
      switch (filtName) {
        case 'Product':
          runFilter(
            productInit.filter((product) => product.product_name === filtValue)
          );
          break;

        case 'State':
          runFilter(
            productList.filter((product) => product.address.state === filtValue)
          );
          break;
        case 'City':
          runFilter(
            productList.filter((product) => product.address.city === filtValue)
          );
          break;

        default:
          break;
      }
    }
  }, [filtValue]);

  function runFilter(arg) {
    if (filtName === 'Product' && filtValue === '') {
      setProductList(productInit);
    } else if (filtValue === '') {
      setProductList(productFilter);
    } else {
      setProductFilter(productList);
      setProductList(arg);
    }
  }

  function setFilterName(e) {
    setFiltName(e.target.name);
  }

  function setFilterValue(e) {
    setFiltValue(e.target.value);
  }

  console.log(filtValue);

  return (
    <ProductContext.Provider
      value={{
        productList,
        nameList,
        nameListInit,
        stateList,
        cityList,
        setFilterName,
        setFilterValue,
      }}
    >
      <div className='App md:flex gap-4 p-8 bg-main min-h-screen text-white overflow-clip w-full'>
        <Filter />
        <Main />
      </div>
    </ProductContext.Provider>
  );
}

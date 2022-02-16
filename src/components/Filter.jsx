import { useContext } from 'react';
import { ProductContext } from '../App';

function Filter() {
  const { nameListInit, stateList, cityList, setFilterName, setFilterValue } =
    useContext(ProductContext);

  const filters = [nameListInit, stateList, cityList];

  const filterCondition = (filter) =>
    filter === nameListInit
      ? 'Product'
      : filter === stateList
      ? 'State'
      : 'City';

  return (
    <div className='bg-dark w-full md:w-max h-max p-6 rounded-2xl'>
      <h2>Filters</h2>
      <div className='flex justify-between md:flex-col'>
        {filters.map((filter) => (
          <div className='w-[90px] sm:w-[150px] p-2 md:my-2 bg-main rounded'>
            <select
              className='w-full bg-main'
              onChange={setFilterValue}
              onFocus={setFilterName}
              name={filterCondition(filter)}
              key={filterCondition(filter)}
            >
              <option value=''>{filterCondition(filter)}</option>
              {Object.keys(filter).map((list) => (
                <option value={list} key={list}>
                  {list}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;

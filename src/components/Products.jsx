function Products({ products }) {
  const { product_name, brand_name, price, address, discription, date, image } =
    products;

  const location = `${address.city}, ${address.state}`;

  const [month, day, year] = [
    new Date(date).getMonth(),
    new Date(date).getDate(),
    new Date(date).getFullYear(),
  ];
  return (
    <div className='bg-main p-4 rounded w-max hover:scale-105 transition duration-500'>
      <div className='flex gap-4 items-center'>
        <img src={image} alt='' className='w-[70px] h-[70px] rounded' />
        <div>
          <h4>{product_name}</h4>
          <p className='text-sm text-gray'>{brand_name}</p>
          <p>
            {price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </p>
        </div>
      </div>

      <div className='text-sm text-gray grid gap-2 py-2'>
        <div className='flex gap-4 justify-between'>
          <p className='w-28'>{location}</p>
          <p className='w-max'>
            Date: <span className='text-base'>{`${day}:${month}:${year}`}</span>
          </p>
        </div>

        <p>{discription}</p>
      </div>
    </div>
  );
}

export default Products;

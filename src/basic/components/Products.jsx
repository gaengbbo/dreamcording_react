import React, { useEffect, useState } from 'react';


export default function Products () {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  useEffect (() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
     });
     return () => {
      console.log('깨끗하게 청소')
     }
  },[checked])
    
  return (
    <>
      <input id="checkbox" type="checkbox" value={checked} onChange={handleChange}></input>
      <label htmlFor='checkbox'>Show only hot sale</label>
      <ul>
        {products.map((products) => (
          <li key={products.id}>
            <article>
              <h3>{products.name}</h3>
              <p>{products.price}</p>
            </article>
          </li>
        ))}
      </ul>
    
    </>
  );

}
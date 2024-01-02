import { useState } from 'react';
import { Button } from '@monorepo/ui';
import axios from 'axios';
import { Product } from '@monorepo/database';
import './index.css';

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    const products = await axios.get<Product[]>('http://localhost:8080/api/products');
    setProducts(products.data);
  }

  return (
    <main className='py-24 max-w-full w-[800px] mx-auto'>
      <h1 className='text-3xl font-medium text-white mb-8'>Monorepo Demo</h1>

      <div className='flex gap-4 mb-8'>
        <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
        <Button onClick={() => fetchProducts()}>Load products</Button>
      </div>

      <ul className='flex flex-col gap-4'>
        {products.map((product) => (
          <li key={product.id} className='text-white'>
            <h3 className='text-xl mb-1'>{product.name}</h3>
            <p className='text-test-800'>${product.price}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;

import { useState } from 'react';
import { Button } from '@monorepo/ui';
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className='py-24 max-w-full w-[800px] mx-auto'>
      <h1 className='text-3xl font-medium text-white mb-8'>Monorepo Demo</h1>
      <div className='card'>
        <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
      </div>
    </main>
  );
}

export default App;

import express from 'express';
import productsRouter from './routes/products';

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  return res.json({ hello: 'world' });
});

app.use('/api', productsRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

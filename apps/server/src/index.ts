import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products';

const app = express();
const port = process.env.PORT || 8080;

app.use(cors({ origin: ['http://localhost:5173'] }));

app.get('/', (req, res) => {
  return res.json({ hello: 'world' });
});

app.use('/api', productsRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

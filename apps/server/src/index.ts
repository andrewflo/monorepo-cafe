import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productsRouter from './routes/products';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const shopUrl = process.env.SHOP_URL || '';

app.use(cors({ origin: [shopUrl] }));

app.get('/', (req, res) => {
  return res.json({ hello: 'world' });
});

app.use('/api', productsRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

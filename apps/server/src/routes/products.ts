import { Router } from 'express';
import prisma from '@monorepo/database';

const productsRouter = Router();

productsRouter.get('/products', async (req, res) => {
  const products = await prisma.product.findMany();
  return res.json(products);
});

export default productsRouter;

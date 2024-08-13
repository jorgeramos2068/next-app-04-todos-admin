import { Metadata } from 'next';

import { products } from '@/data/products';
import { ProductCard } from './_components/product-card';

export const metadata: Metadata = {
  title: 'Products page',
  description: 'Description for Products page',
};

export default function Page() {
  return (
    <div className="gap-2 grid grid-cols-1 sm:grid-cols-3">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

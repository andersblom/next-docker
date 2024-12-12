import Link from 'next/link'
import { products } from '../lib/products'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Product Listing</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="bg-white shadow rounded-lg p-4">
            <Link href={`/products/${product.id}`} className="text-blue-600 hover:underline">
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}


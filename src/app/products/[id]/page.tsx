import { products } from '../../../lib/products'
import Link from 'next/link'

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-xl mb-6">Price: ${product.price}</p>
      <Link href="/" className="text-blue-600 hover:underline">
        Back to product listing
      </Link>
    </div>
  )
}


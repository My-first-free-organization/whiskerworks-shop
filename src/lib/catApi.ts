// WhiskerWorks Cat Product API

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://api.whiskerworks.example.com";

export interface Product {
  id: string;
  name: string;
  category: "toys" | "beds" | "food" | "accessories" | "tech";
  price: number;
  inStock: boolean;
  knockedOffCounter: number; // how many times cats knocked this off a shelf
}

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE}/products`);
  if (!res.ok) throw new Error("Failed to fetch. The cats probably unplugged the server again.");
  return res.json();
}

export async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`${API_BASE}/products/${id}`);
  if (!res.ok) throw new Error(`Product ${id} not found. A cat probably hid it under the couch.`);
  return res.json();
}

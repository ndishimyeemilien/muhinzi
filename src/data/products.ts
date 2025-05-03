import  { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "NPK 17-17-17 Fertilizer",
    category: "fertilizers",
    price: 25000,
    image: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBzdXBwbGllcyUyMGZlcnRpbGl6ZXJ8ZW58MHx8fHwxNzQ2MTU4NjI0fDA&ixlib=rb-4.0.3",
    description: "Premium quality balanced NPK fertilizer suitable for all crops. RICA certified and approved for use in Rwanda.",
    stock: 150,
    featured: true
  },
  {
    id: 2,
    name: "Certified Maize Seeds",
    category: "seeds",
    price: 5000,
    image: "https://images.unsplash.com/photo-1447624799968-c704f86dc931?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBzdXBwbGllcyUyMGZlcnRpbGl6ZXJ8ZW58MHx8fHwxNzQ2MTU4NjI0fDA&ixlib=rb-4.0.3",
    description: "High-yielding certified maize seeds specially bred for Rwanda's climate. Excellent germination rate.",
    stock: 200,
    featured: true
  },
  {
    id: 3,
    name: "Eco-Friendly Pesticide",
    category: "pesticides",
    price: 12000,
    image: "https://images.unsplash.com/photo-1472718888560-1a1292f1cccb?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBzdXBwbGllcyUyMGZlcnRpbGl6ZXJ8ZW58MHx8fHwxNzQ2MTU4NjI0fDA&ixlib=rb-4.0.3",
    description: "Environment-friendly pesticide that effectively controls pests while being safe for beneficial insects.",
    stock: 75,
    featured: false
  },
  {
    id: 4,
    name: "Organic Compost",
    category: "fertilizers",
    price: 8000,
    image: "https://images.unsplash.com/photo-1454179083322-198bb4daae41?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBzdXBwbGllcyUyMGZlcnRpbGl6ZXJ8ZW58MHx8fHwxNzQ2MTU4NjI0fDA&ixlib=rb-4.0.3",
    description: "100% organic compost made from locally sourced materials. Improves soil structure and fertility.",
    stock: 100,
    featured: true
  },
  {
    id: 5,
    name: "Bean Seeds (Climbing)",
    category: "seeds",
    price: 7500,
    image: "https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBzdXBwbGllcyUyMGZlcnRpbGl6ZXJ8ZW58MHx8fHwxNzQ2MTU4NjI0fDA&ixlib=rb-4.0.3",
    description: "High-yielding climbing bean seeds suitable for Rwanda's terraced farming landscapes.",
    stock: 90,
    featured: false
  },
  {
    id: 6,
    name: "Hand Sprayer",
    category: "tools",
    price: 15000,
    image: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBzdXBwbGllcyUyMGZlcnRpbGl6ZXJ8ZW58MHx8fHwxNzQ2MTU4NjI0fDA&ixlib=rb-4.0.3",
    description: "Durable handheld sprayer for applying pesticides and liquid fertilizers. 5-liter capacity.",
    stock: 40,
    featured: false
  },
  {
    id: 7,
    name: "Urea Fertilizer",
    category: "fertilizers",
    price: 22000,
    image: "https://images.unsplash.com/photo-1454179083322-198bb4daae41?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBzdXBwbGllcyUyMGZlcnRpbGl6ZXJ8ZW58MHx8fHwxNzQ2MTU4NjI0fDA&ixlib=rb-4.0.3",
    description: "High-nitrogen fertilizer ideal for promoting leafy growth in crops. RICA certified.",
    stock: 85,
    featured: false
  },
  {
    id: 8,
    name: "Irish Potato Seeds",
    category: "seeds",
    price: 9000,
    image: "https://images.unsplash.com/photo-1447624799968-c704f86dc931?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBzdXBwbGllcyUyMGZlcnRpbGl6ZXJ8ZW58MHx8fHwxNzQ2MTU4NjI0fDA&ixlib=rb-4.0.3",
    description: "Disease-resistant potato seeds variety specifically developed for Rwanda's highlands.",
    stock: 110,
    featured: true
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};
 
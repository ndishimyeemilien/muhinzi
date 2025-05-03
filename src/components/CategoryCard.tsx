import  { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  // Dynamically get the icon component
  const IconComponent = (LucideIcons as any)[category.icon] || LucideIcons.HelpCircle;
  
  return (
    <Link 
      to={`/products?category=${category.name.toLowerCase()}`}
      className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mb-3">
        <IconComponent className="w-7 h-7 text-primary-600" />
      </div>
      <h3 className="font-medium text-center">{category.name}</h3>
    </Link>
  );
};

export default CategoryCard;
 
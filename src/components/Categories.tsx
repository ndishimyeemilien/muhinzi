import  { categories } from '../data/categories';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Browse By Category
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
 
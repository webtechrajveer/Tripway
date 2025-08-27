'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [paginatedRecipes, setPaginatedRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  

  // Fetch recipes and tags
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        setRecipes(data.recipes);
        setLoading(false);

        // Get all unique tags
        const uniqueTags = new Set();
        data.recipes.forEach((recipe) => {
          recipe.tags.forEach((tag) => uniqueTags.add(tag));
        });
       

      } catch (error) {
        setError("Error fetching recipes");
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  // Filter and paginate recipes
  useEffect(() => {
    let filtered = recipes;

    if (searchQuery) {
      filtered = filtered.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
     const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    setPaginatedRecipes(filtered.slice(indexOfFirst, indexOfLast));
  }, [recipes, currentPage, itemsPerPage, searchQuery]);

  const totalPages = Math.ceil(
    recipes.filter((recipe) => {
      const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = selectedTag ? recipe.tags.includes(selectedTag) : true;
      return matchesSearch && matchesTag;
    }).length / itemsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  if (error) return <p>{error}</p>;

  return (
    <div className='p-5 mt-20'>
      {loading ? (
        <div className='flex flex-col justify-center items-center h-200 animate-bounce'>
          <div className='w-10 h-10 border-4 rounded-full border-x-transparent border-amber-300 animate-spin' />
          <p className='text-black'>Loading...</p>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">Recipes</h1>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Search recipes..."
              className="w-full p-2 border rounded"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {paginatedRecipes.map((recipe) => (
              <Link key={recipe.id} href={`/recipe/${recipe.id}`}>
                <div className="border p-2 rounded shadow hover:shadow-lg cursor-pointer transition">
                  <Image
                    className='w-full object-cover rounded'
                    src={recipe.image}
                    alt={recipe.name}
                    width={300}
                    height={200}
                  />
                  <p className="font-semibold mt-2">{recipe.name}</p>
                  <p className="text-sm text-gray-500">Prep Time: {recipe.prepTimeMinutes} mins</p>
                  <p className="text-sm text-gray-500">Servings: {recipe.servings}</p>
                </div>
              </Link>

              
            ))}
 
            
          </div>

          <div className="flex justify-center mt-5 space-x-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="self-center">Page {currentPage} of {totalPages}</span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>   
        </>             
      )}
    </div> 
  );
}

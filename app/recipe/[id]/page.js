'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      const res = await fetch(`https://dummyjson.com/recipes/${id}`);
      const data = await res.json();
      setRecipe(data);
      setLoading(false);
    };
    fetchRecipe();
  }, [id]);

  if (loading) return <p>Loading recipe...</p>;

  return (
    <div className='p-5 mt-15'>
      <h1 className='text-2xl font-bold mb-4'>{recipe.name}</h1>
      <Image src={recipe.image} alt={recipe.name} width={500} height={300} className='rounded' />
      <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins</p>
      <p><strong>Servings:</strong> {recipe.servings}</p>
      <p><strong>Difficulty:</strong> {recipe.difficulty}</p>

      <h2 className='mt-4 font-semibold'>Instructions:</h2>
      <ol className='list-decimal ml-6'>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

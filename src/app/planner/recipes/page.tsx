import { supabase } from "@/../utils/supabaseClient";
// import { Database } from "@/../utils/database.types";
// type Recipes = Database["public"]["Tables"]["recipes"]["Row"];

export default async function RecipePage() {
  const { data: recipes, error } = await supabase
    .from("recipes")
    .select("*")
    .range(0, 9);

  const CDNUrl =
    "https://hviceomrplpayaclamxb.supabase.co/storage/v1/object/public/recipe_images/";

  // function parseIngredients(ingredients: any) {
  //   const parsedIngredients = JSON.parse(ingredients.replace(/'/g, '"'));
  //   return parsedIngredients.length;
  // }

  return (
    <>
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <h1 className="text-center text-xl font-semibold">Recipes</h1>
        <ul role="list" className="divide-y divide-gray-100">
          {recipes?.map((recipe) => (
            <>
              <li key={recipe.id} className="flex justify-between gap-x-6 py-5">
                <div className="flex gap-x-4">
                  <img
                    className="flex-none bg-gray-50"
                    src={`${CDNUrl + recipe.image_name}.jpg`}
                    alt={`Image of ${recipe.title}`}
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {recipe.title}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      Food
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    Number of Ingredients: {recipe.cleaned_ingredients.length}
                  </p>
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

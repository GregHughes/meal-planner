import { supabase } from "../../../../../utils/supabaseClient";

export default async function RecipeIDPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data: recipe, error } = await supabase
    .from("recipes")
    .select() // select all columns
    .match({ id }) // match posts based off the id
    .single(); // make the data object a recipe as opposed to an array with a recipe in it

  const recipeImg = `${recipe?.image_name}.jpg`;

  const { data: imgUrl } = await supabase.storage
    .from("recipe_images")
    .getPublicUrl(recipeImg);

  return (
    <>
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div>
          <pre>{JSON.stringify(recipe, null, 2)}</pre>
        </div>
        <div>
          <img src={imgUrl.publicUrl} />
        </div>
      </div>
    </>
  );
}

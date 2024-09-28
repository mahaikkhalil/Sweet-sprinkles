import React from 'react';
import cheesecake from '../../assets/cheesecake.jfif'; 
import donut from '../../assets/donut.jfif';
import croissant from '../../assets/croissant.jfif';
import cake from '../../assets/cake.jfif';
import icecream from '../../assets/icecream.jfif';
import pancake from '../../assets/pancake.jfif';
import cookies from '../../assets/cookies.jfif';
import trifle from '../../assets/trifle.jfif';
import cupcake from '../../assets/cupcake.jfif';

const recipes = [
    { id: 1, title: 'CheeseCake', description: 'A classic Italian Cheese cake.', img: cheesecake, recipes:'For a quick berry cheesecake, mix 1 cup graham cracker crumbs, 1/4 cup sugar, and 1/4 cup melted butter for the crust. Press into a dish. Beat 8 oz cream cheese with 1/2 cup sugar and 1 tsp vanilla. Fold in 1 cup whipped cream. Chill for 4 hours. Enjoy! Berry Sauce: In a saucepan, heat 1 cup mixed berries with 1/4 cup sugar until berries break down. Cool and spoon over the cheesecake before serving. Add your Favourite berries on the top.' }, 
    { id: 2, title: 'Donut', description: 'A Mouth Melted Goodness.', img: donut , recipes:'To make homemade donuts, dissolve 2 1/4 tsp yeast in 1/4 cup warm milk and let sit for 5 minutes. Mix with 1/4 cup melted butter, 1/4 cup sugar, 1/2 tsp vanilla extract, 1/2 tsp salt, and 1 beaten egg. Gradually add 2 1/2 cups flour,mixing until a soft dough forms. Knead on a floured surface for 5 minutes, then let rise in a greased bowl for 1 hour. Roll out, cut into shapes, and fry in hot oil until golden brown and enjoy.'},
    { id: 3, title: 'Croissant', description: 'A flaky chocolicious croissant.', img: croissant ,  recipes:'To make croissants, prepare a dough by mixing 4 cups flour, 1/4 cup sugar, 2 1/4 tsp yeast, 1 tsp salt, 1 cup warm milk, and 1/2 cup melted butter. Let rise for 1 hour. Roll out the dough, fold in 1 cup butter, and refrigerate. Roll and fold the dough again to create layers. Cut into triangles, roll up, and shape into crescents. Let rise for 30 minutes, then bake at 375°F (190°C) for 15-20 minutes until golden brown. Cool before serving.' },
    { id: 4, title: 'Cake', description: 'A heavenly Moist chocolate Cake.', img: cake ,  recipes:'For a Moist chocolate cake, preheat your oven to 350°F (175°C) and grease a 9-inch pan. In a bowl, mix 1 3/4 cups flour, 1 1/2 cups sugar, 3/4 cup cocoa powder, 1 1/2 tsp baking powder, 1 1/2 tsp baking soda, and 1/2 tsp salt. Add 2 eggs, 1 cup milk, 1/2 cup melted butter, and 2 tsp vanilla. Mix well and bake for 30-35 minutes. Cool before frosting.'},
    { id: 5, title: 'Icecream', description: 'A unicorn sprinkle IceCream.', img: icecream ,  recipes: 'To make homemade ice cream, whisk together 1 cup heavy cream, 1 cup whole milk, and 3/4 cup sugar until the sugar dissolves. Stir in 1 tsp vanilla extract. Pour the mixture into an ice cream maker and churn according to the manufacturers instructions, usually for 20-25 minutes. Transfer the churned ice cream to a lidded container and freeze for at least 2 hours to firm up. Scoop and enjoy your homemade treat!'},
    { id: 6, title: 'Pancakes', description: 'Fluffy pancakes with maple syrup.', img: pancake ,  recipes: 'For fluffy pancakes, mix 1 cup flour, 2 tbsp sugar, 1 tbsp baking powder, and 1/2 tsp salt. In another bowl, whisk 1 cup milk, 1 egg, and 2 tbsp melted butter. Combine wet and dry ingredients until just mixed. Heat a non-stick pan over medium heat and lightly grease. Pour 1/4 cup batter per pancake into the pan. Cook until bubbles form on the surface, then flip and cook until golden brown. Serve warm with your favorite toppings.'},
    { id: 7, title: 'Cookies', description: 'Gooey chocochip cookies.', img: cookies ,  recipes:'For chocolate chip cookies, preheat your oven to 350°F (175°C). Cream together 1 cup softened butter, 1 cup sugar, and 1 cup packed brown sugar. Beat in 2 eggs and 1 tsp vanilla extract. In another bowl, mix 3 cups flour, 1/2 tsp baking soda, 1/2 tsp baking powder, and 1/2 tsp salt. Gradually add to the butter mixture. Stir in 1 cup chocolate chips. Drop spoonfuls of dough onto a baking sheet and bake for 10-12 minutes, or until edges are golden. Cool before serving.'},
    { id: 8, title: 'Trifle', description: 'Rich Christmas trifle with fruits.', img: trifle ,  recipes:'For a classic trifle, layer 1/2 of a pound cake, cut into cubes, in a dish. Spread with 1 cup of fruit jam or custard, then add a layer of fresh fruit like berries. Pour 1 cup of whipped cream or custard on top. Repeat layers with remaining cake, fruit, and cream. Chill in the refrigerator for at least 2 hours before serving. Garnish with additional fruit or nuts if desired. Enjoy this delicious and elegant dessert!'},
    { id: 9, title: 'Muffin', description: 'A strawberry short cake muffin.', img: cupcake ,  recipes: 'To make strawberry muffins, preheat your oven to 375°F (190°C) and line a muffin tin. Mix 1 1/2 cups flour, 1/2 cup sugar, 2 tsp baking powder, and 1/4 tsp salt in a bowl. In another bowl, whisk 1/2 cup melted butter, 1/2 cup milk, and 1 egg. Combine with the dry ingredients until just mixed. Gently fold in 1 cup chopped strawberries. Spoon batter into muffin cups and bake for 20-25 minutes, or until a toothpick comes out clean. Cool before serving.'}
];

const RecipeList = () => (
    <div className="w-full px-4 py-8 bg-indigo-200">
        <h2 className="text-5xl font-bold text-center mb-8 text-violet-950 animate-pulse">Recipes that you will Love</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map(recipe => (
                <div key={recipe.id} className="relative group">
                    <div className="bg-blue-300 shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-600 cursor-pointer">
                        <img src={recipe.img} alt={recipe.title} className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                            <p className="text-blue-950">{recipe.description}</p>
                        </div>
                    </div>
                    {/* Details Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                        <div className="text-center">
                            
                        <p className="text-[18px] font-normal mb-2 bg-sky-950 text-pink-100 opacity-70 h-[250px] w-[423px] border-dashed border-4 border-fuchsia-500 border-spacing-5">{recipe.recipes}</p>


                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default RecipeList;

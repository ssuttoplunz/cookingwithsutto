# Server and Database

## Project setup
```
# yarn
yarn

# npm
npm install
```

### Compiles and hot-reloads for development
```
# yarn
yarn dev

# npm
npm run dev
```

## Database setup and creation

1. Copy server `.env` file into a new file `.env.local` and replace username and password.
2. Either in the mysql terminal or in the db manager of your choice, log in `mysql -u YOUR_USERNAME -p` and then put in your password
3. Run the following queries to set up the database and create the tables
```
CREATE DATABASE cookingwithsutto;
USE cookingwithsutto;
```

```
CREATE TABLE recipes (
id CHAR(36) PRIMARY KEY, -- UUID for the recipe
title TEXT NOT NULL, -- Recipe title
date TIMESTAMP, -- Timestamp of when the recipe was created/updated
image_url VARCHAR(255) -- URL of the recipe image
);

CREATE TABLE ingredients (
id INT AUTO_INCREMENT PRIMARY KEY,
recipe_id CHAR(36), -- UUID for the recipe this ingredient belongs to
amount DECIMAL(10, 2), -- Amount of the ingredient (e.g., 1.75)
unit VARCHAR(50), -- Measurement unit (e.g., "cups", "grams")
name VARCHAR(255), -- Ingredient name (e.g., "flour")
FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE
);

CREATE TABLE steps (
id INT AUTO_INCREMENT PRIMARY KEY,
recipe_id CHAR(36), -- UUID for the recipe this step belongs to
image_url VARCHAR(255), -- URL of the image associated with the step (optional)
title VARCHAR(255), -- Title of the step (optional, e.g., "Mix Ingredients")
text TEXT NOT NULL, -- Text description of the step (required)
image_position ENUM('left', 'right') DEFAULT 'right', -- predefined positions for image placement
FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE
);
```
4. Run the following query to set up the recipes table
```
INSERT INTO recipes (id, title, date, image_url) VALUES
(UUID(), 'How to make fresh pasta', '2023-11-20 08:45:23', 'fresh-pasta.jpg'),
(UUID(), 'Basic pasta sauce', '2023-08-14 13:22:10', 'basic-pasta-sauce.jpg'),
(UUID(), 'Birthday Cake', '2023-05-01 12:00:00', 'birthday-cake.jpg'),
(UUID(), 'Uovo alla coque', '2023-09-10 07:25:12', 'uovo-alla-coque.jpg'),
(UUID(), 'Braised short ribs', '2023-06-30 18:55:00', 'braised-short-ribs.jpg'),
(UUID(), 'Fruit tart', '2023-03-21 14:33:55', 'fruit-tart.jpg');
```
5. After you create your new recipes with new UUIDs, get the UUIDs by running `SELECT * FROM recipes;` and then replace the placeholders for UUIDs with the real UUIDs in the code below, then run the code to add data to the ingredients table

```
INSERT INTO ingredients (recipe_id, amount, unit, name) VALUES
('REPLACE_WITH_FRESH_PASTA_UUID', 1.75, 'cups', 'flour'),
('REPLACE_WITH_FRESH_PASTA_UUID', 3, 'eggs', 'eggs'),
('REPLACE_WITH_FRESH_PASTA_UUID', 1, 'pinch', 'salt'),
('REPLACE_WITH_BASIC_PASTA_SAUCE_UUID', 28, 'oz', 'tomatoes'),
('REPLACE_WITH_BASIC_PASTA_SAUCE_UUID', 2, 'tbsp', 'olive oil'),
('REPLACE_WITH_BASIC_PASTA_SAUCE_UUID', 5, 'cloves', 'garlic'),
('REPLACE_WITH_BASIC_PASTA_SAUCE_UUID', 10, 'leaves', 'basil'),
('REPLACE_WITH_BASIC_PASTA_SAUCE_UUID', 1, 'large pinch', 'sugar'),
('REPLACE_WITH_BASIC_PASTA_SAUCE_UUID', 1, 'pinch', 'salt'),
('REPLACE_WITH_UOVO_ALLA_COQUE_UUID', NULL, NULL, 'eggs'),
('REPLACE_WITH_UOVO_ALLA_COQUE_UUID', NULL, NULL, 'water'),
('REPLACE_WITH_UOVO_ALLA_COQUE_UUID', 1, 'pinch', 'salt'),
('REPLACE_WITH_BRAISED_SHORT_RIBS_UUID', 2.5, 'lbs', 'short ribs'),
('REPLACE_WITH_BRAISED_SHORT_RIBS_UUID', 1, 'pinch', 'salt'),
('REPLACE_WITH_BRAISED_SHORT_RIBS_UUID', 2, 'dried medium-spice chiles', 'guajillo or ancho'),
('REPLACE_WITH_BRAISED_SHORT_RIBS_UUID', 1, 'onion', 'any kind, sliced'),
('REPLACE_WITH_BRAISED_SHORT_RIBS_UUID', 5, 'whole', 'garlic cloves'),
('REPLACE_WITH_BRAISED_SHORT_RIBS_UUID', 1, 'tsp', 'red pepper flakes'),
('REPLACE_WITH_BRAISED_SHORT_RIBS_UUID', 1, 'tsp', 'ground coriander'),
('REPLACE_WITH_BRAISED_SHORT_RIBS_UUID', 1, 'tsp', 'ground cumin'),
('REPLACE_WITH_BRAISED_SHORT_RIBS_UUID', 0.5, 'tsp', 'ground cinnamon'),
('REPLACE_WITH_BRAISED_SHORT_RIBS_UUID', 3, 'tbsp', 'vegetable oil'),
('REPLACE_WITH_BRAISED_SHORT_RIBS_UUID', 2, 'tbsp', 'tomato paste'),
('REPLACE_WITH_BRAISED_SHORT_RIBS_UUID', 0.5, 'acorn squash', 'sliced into wedges'),
('REPLACE_WITH_BRAISED_SHORT_RIBS_UUID', NULL, NULL, 'Greek yogurt or sour cream'),
('REPLACE_WITH_BRAISED_SHORT_RIBS_UUID', NULL, NULL, 'lime wedges'),
('REPLACE_WITH_BRAISED_SHORT_RIBS_UUID', NULL, NULL, 'cilantro (optional)'),
('REPLACE_WITH_FRUIT_TART_UUID', 1, 'stick', 'unsalted butter'),
('REPLACE_WITH_FRUIT_TART_UUID', 1, 'cup', 'sugar'),
('REPLACE_WITH_FRUIT_TART_UUID', 5, NULL, 'eggs'),
('REPLACE_WITH_FRUIT_TART_UUID', 2.25, 'cups', 'flour'),
('REPLACE_WITH_FRUIT_TART_UUID', NULL, NULL, 'salt'),
('REPLACE_WITH_FRUIT_TART_UUID', 0.25, 'cup', 'flour'),
('REPLACE_WITH_FRUIT_TART_UUID', 2.25, 'cup', 'whole milk'),
('REPLACE_WITH_FRUIT_TART_UUID', 1, 'tsp', 'vanilla'),
('REPLACE_WITH_FRUIT_TART_UUID', NULL, NULL, 'fresh fruit of choice');
```

6. Replace the real UUIDs with the placeholders for the following, and add data to the steps table
```
INSERT INTO steps (recipe_id, image_url, title, text, image_position) VALUES

  ('REPLACE_WITH_FRESH_PASTA_UUID', 'fresh-pasta.jpg', 'Mix Ingredients', 'Start by putting all the flour and pinch of salt into a bowl (I use all-purpose, you can also use bread flour). Make a well in the middle, and lightly beat 2 eggs and 1 egg yolk with a fork and then plop them in the middle. Start mixing together with your hands or a fork until it starts to come together enough to move to a countertop.', 'right'),
  ('REPLACE_WITH_FRESH_PASTA_UUID', NULL, 'Knead Dough', 'Next, lightly flour the countertop and start kneading in a downward motion (smush the dough onto the counter, away from you, then fold it over back on top of itself and repeat for 10 minutes, or until it is glossy on the outside. Note: if the mixture is a little too soft and sticky, add a bit of flour until it is manageable with your hands, conversely if it is too stiff or crumbly, add a bit of water on your hands and then knead it in.', 'right'),
  ('REPLACE_WITH_FRESH_PASTA_UUID', NULL, 'Let it Rest', 'After it is smooth on the outside, form the dough into a ball, cover in plastic wrap, and leave to rest at room temp for at least 1 hour.', 'right'),
  ('REPLACE_WITH_FRESH_PASTA_UUID', NULL, 'Roll and Shape', 'Roll out on the counter, lightly dusting with flour when needed (as thin as you can get it), or use a pasta machine or attachment starting from the widest setting, and working your way down. You will want to pass it through the widest setting multiple times and then work your way down, also it is helpful to cut the dough in half to manage it better (keep the rest covered as you work with it). Once you have finished rolling your dough and have thin sheets of pasta, you can keep them thick for lasagna, cut them into ravioli shapes, or use a fettuccine or linguine attachment (or knife) to cut them into the right shapes.', 'right'),
  ('REPLACE_WITH_FRESH_PASTA_UUID', NULL, 'Enjoy!', 'Once you have cut the pasta, I like to hang it as I go on clothes hangers or a clothing rack to ensure they do not stick to each other. Fresh pasta is best eaten fresh, so right into the pot after making (and only a ~2-5 min cooking time), but if you do want to cook it later, you can flash cook it for 30 seconds, drain, toss in some olive oil, and then store it in the fridge or freezer.', 'right'),

  ('REPLACE_WITH_BASIC_PASTA_SAUCE_UUID', NULL, NULL, 'Very simple tomato sauce recipe. Easy to make, and done in under an hour!', 'right'),
  ('REPLACE_WITH_BASIC_PASTA_SAUCE_UUID', 'basic-pasta-sauce-tomatoes.jpg', 'Prep ingredients', 'I like to prep everything first: peel garlic, and leave whole, get basil leaves out (also whole) and get canned tomatoes ready. For the canned tomatoes, I love crushed or diced tomatoes to retain some flavor, and it is worth spending a little more to get good quality tomatoes. I use and recommend San Marzano.', 'right'),
  ('REPLACE_WITH_BASIC_PASTA_SAUCE_UUID', 'basic-pasta-sauce-saute.jpg', 'Sauté garlic', 'First step is to get a medium sized pot and heat it on medium heat. Add two tablespoons of olive oil and whole garlic cloves. The goal is not to brown them in any way, but only to infuse the oil with garlic flavor before adding the sauce. This should take less than a minute from when garlic starts to simmer.', 'left'),
  ('REPLACE_WITH_BASIC_PASTA_SAUCE_UUID', 'basic-pasta-sauce.jpg', 'Add tomatoes and basil', 'Pour in the whole can of tomato sauce, a large pinch of sugar, a pinch of salt, as well as the basil leaves. I also sometimes put the entire stem of the basil in as well (it is easier to remove at the end if unwanted in the final sauce). Give it a stir, then let simmer on low for at least 40 minutes. You can tell when the sauce is done when the garlic cloves are able to be smashed against the side of the pan with a wooden spoon. Repeat for all cloves, and stir in the garlicky goodness!', 'right'),
  ('REPLACE_WITH_BASIC_PASTA_SAUCE_UUID', NULL, NULL, 'This sauce is best used after it has sat for a little bit, but can be served immediately, or canned for future use.', 'right'),
  
  ('REPLACE_WITH_BIRTHDAY_CAKE_UUID', NULL, NULL, 'Recipe coming soon!', 'right'),

  ('REPLACE_WITH_UOVO_ALLA_COQUE_UUID', 'uovo-alla-coque.jpg', 'Soft boiled eggs', 'Bring water to a boil in a pot that generously fits all of the eggs you wish to use. Once it boils, gently place eggs (directly from the fridge) in for 6 minutes. Take out and place in ice water to cool quickly.', 'right'),
  ('REPLACE_WITH_UOVO_ALLA_COQUE_UUID', NULL, NULL, 'Enjoy in your favorite egg holder with a pinch of salt, or for some fun, marinate overnight (e.g. with soy sauce mixture) for some flavorful jammy eggs good in any soup or side!', 'right'),

  ('REPLACE_WITH_BRAISED_SHORT_RIBS_UUID', 'braised-short-ribs.jpg', 'Prepare the ribs', 'Generously salt the ribs, and leave at room temperature for 1 hour, you can also leave uncovered overnight in the fridge, and then leave at room temp for 1 hour before cooking.', 'right'),
  ('REPLACE_WITH_BRAISED_SHORT_RIBS_UUID', NULL, 'Prepare the sauce', 'Add 5 cups hot water to blender with chiles. Set aside. Chop onion into rounds and place it and the whole garlic in the oven to broil for 10 minutes, or until medium charred. Remove garlic skins and place in blender with onion, cumin, coriander, red pepper flakes, cinnamon, and pinch of salt. Blend until smooth.', 'right'),
  ('REPLACE_WITH_BRAISED_SHORT_RIBS_UUID', NULL, 'Combine and cook the ribs', 'Pour 2 tbsp olive oil into a big pot (I used a cast iron) over medium-high. Cook the meat on all sides until nicely browned a couple of minutes each side, without overcrowding the pot (it might take 2-3 batches depending on the size of your pot). Move to a plate. Clean the pot and add 1 tbsp clean oil to pan over medium-high heat. Add tomato paste and sweat it out for a couple of minutes, stirring frequently. Pour in the chile mixture, and add meat. Return to a boil, and then turn the heat down to low so it just barely simmers. Put lid on with some room for steam to escape and leave for 3-3.5 hours. You can occasionally skim fat off the top and discard, and turn the ribs so they are flavored and cook evenly. Add the slices of acorn squash to the pot and cook for another 20 minutes. If the liquid is not thick enough, you can reduce just the liquid after everything is cooked.', 'right'),
  ('REPLACE_WITH_BRAISED_SHORT_RIBS_UUID', NULL, 'Enjoy!', 'Serve with yogurt, lime wedges, and cilantro (optional).', 'right'),
  ('REPLACE_WITH_BRAISED_SHORT_RIBS_UUID', NULL, NULL, 'This recipe was taken from: https://www.bonappetit.com/recipe/braised-short-ribs-with-squash-and-chile.', 'right'),

  ('REPLACE_WITH_FRUIT_TART_UUID', 'fruit-tart-assembly.jpg', 'Prepare the tart shell', 'Mix 1 stick butter with a little under ½ cup sugar, and a pinch of salt with a mixer or a whisk until it lightens in color and is fluffier (shouldn’t take longer than 1 min). Next, lightly beat 1 egg, and plop that in with 2 ¼ cups flour. Mix with utensil or hands until it all comes together and is uniform. Shape the dough into a square about 1” thick, and cut into 4 pieces. Stack them on top of each other and enjoy while you squish them down. Repeat. Next put it back into a ball or the square shape, wrap in plastic wrap, and chill in the fridge for 1 hour.', 'right'),
  ('REPLACE_WITH_FRUIT_TART_UUID', 'fruit-tart-slice.jpg', 'Prepare the custard', 'While the tart dough is resting, you can prepare the custard. Beat 4 egg yolks with ½ cup of sugar in a bowl until pale and fluffy (with whisk or mixer), add ¼ cup flour a little at a time until uniform. Set aside. Heat 2 ¼ cup milk until it comes to a boil (careful not to have it burn at the bottom of the pan (mine did and I had to clean the pot). When it is just boiling, take off the heat, and slowly add it back to the egg yolk mixture stirring it in gradually. Then, assuming you don’t need to wash your milk pan, put the entire mixture back in the pot, and place it over low/medium heat stirring continuously until it thickens (be patient, it might take a little, if it is bubbling the stove is too high). Once thickened, pour into a bowl and stir while it cools (to not have a “crust” form on top), and then place into the fridge with plastic wrap on top to prevent forming a crust.', 'left'),
  ('REPLACE_WITH_FRUIT_TART_UUID', NULL, 'Roll out and bake the tart', 'Preheat the oven to 350. Take the tart crust out of the fridge, roll into a ¼ thick circle, and place in a 9” pie/ cake pan (or tart pan if you’re fancy). Put pie weights or dried beans on top of parchment paper cut to the pie size inside to keep the dough from rising, if you don’t have that, puncture the bottom multiple times with a fork. Place in the oven for about 25-30 minutes. Let cool completely.', 'right'),
  ('REPLACE_WITH_FRUIT_TART_UUID', NULL, 'Avengers assemble!', 'Place the custard in the cooled tart shell, smooth out the top, then place fresh fruit in whatever arrangement suits your fancy. Can be eaten right after making, but for some extra flavor mixing, best eaten the next day. Store in fridge overnight.', 'right'),
  ('REPLACE_WITH_FRUIT_TART_UUID', NULL, NULL, 'These recipes were taken from “The Silver Spoon” cookbook, second edition, in English (2018).', 'right');
```
7. Your database setup should be complete! Now you have access to the basic setup in order to run the server and db locally. Follow the `Project Setup` step above to run the server.
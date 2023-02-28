const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('#ingredients');

const ingredientsItem = document.createElement('li');
ingredientsItem.append('Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments');

ingredientsItem.classList.add('item');

ingredientsEl.appendChild(ingredientsItem);


console.log(ingredientsEl);














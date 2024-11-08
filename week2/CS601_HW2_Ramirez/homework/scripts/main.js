import { fetchItems } from './api.js';

// Function to create item elements and make them draggable
function createItemElement(item) {
  const itemElement = document.createElement('div');
  itemElement.className = 'item';
  itemElement.textContent = item.name;
  itemElement.draggable = true;
  itemElement.setAttribute('data-category', item.category);
  itemElement.setAttribute('data-id', item.id);

  // Add event listeners for drag and drop
  itemElement.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', JSON.stringify(item));
  });

  return itemElement;
}

// Function to render items in the container
function renderItems(items) {
  const container = document.getElementById('items-container');
  container.innerHTML = '';

  // Loop through both fruits and vegetables and append them
  items.fruits.concat(items.vegetables).forEach((item) => {
    const itemElement = createItemElement(item);
    container.appendChild(itemElement);
  });
}

// Drop zone functionality
const fruitsDropzone = document.getElementById('fruits-dropzone');
const vegetablesDropzone = document.getElementById('vegetables-dropzone');
const fruitsCountElement = document.querySelector('#fruits-count');
const vegetablesCountElement = document.querySelector('#vegetables-count');

function updateCount(category) {
  if (category === 'Fruit') {
    const count = fruitsDropzone.children.length;
    fruitsCountElement.textContent = `Fruits: ${count}`;
  } else if (category === 'Vegetable') {
    const count = vegetablesDropzone.children.length;
    vegetablesCountElement.textContent = `Vegetables: ${count}`;
  }
}

function handleDrop(e, category) {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  const droppedItem = JSON.parse(data);

  // Ensure the dropped item belongs in the correct category
  if (droppedItem.category === category) {
    e.target.appendChild(createItemElement(droppedItem));
    updateCount(category); // Update the count after a successful drop
  } else {
    alert('Wrong category!');
  }
}

// Prevent default to allow dropping
[fruitsDropzone, vegetablesDropzone].forEach((zone) => {
  zone.addEventListener('dragover', (e) => e.preventDefault());
});

// Drop event listeners for the two zones
fruitsDropzone.addEventListener('drop', (e) => handleDrop(e, 'Fruit'));
vegetablesDropzone.addEventListener('drop', (e) => handleDrop(e, 'Vegetable'));

// Initialize the app and fetch data
async function initializeApp() {
  console.log('Initializing app...');
  const items = await fetchItems(); // Fetch items from the server
  renderItems(items); // Render fetched items to the DOM
  updateCount('Fruit'); // Initialize the count for fruits
  updateCount('Vegetable'); // Initialize the count for vegetables
}

// Initialize the application on page load
document.addEventListener('DOMContentLoaded', initializeApp);

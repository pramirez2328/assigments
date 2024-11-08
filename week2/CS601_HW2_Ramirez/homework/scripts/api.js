// Fetch the categorized data from the server
export const fetchItems = async () => {
  try {
    const response = await fetch('https://server-3cog.onrender.com/items');
    const data = await response.json();
    console.log('Fetched items:', data);
    // randomly move items
    return [...data.fruits, ...data.vegetables].reduce(
      (acc, item) => {
        if (Math.random() > 0.5) {
          acc.fruits.push(item);
        } else {
          acc.vegetables.push(item);
        }
        return acc;
      },
      { fruits: [], vegetables: [] },
    );
  } catch (error) {
    console.error('Error fetching items:', error);
    return { fruits: [], vegetables: [] }; // Return an empty object in case of error
  }
};

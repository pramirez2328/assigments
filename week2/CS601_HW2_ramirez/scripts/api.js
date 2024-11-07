// Fetch the categorized data from the server
export const fetchItems = async () => {
  try {
    const response = await fetch('https://server-3cog.onrender.com/items');
    const data = await response.json();
    console.log('Fetched items:', data);
    return data;
  } catch (error) {
    console.error('Error fetching items:', error);
    return { fruits: [], vegetables: [] }; // Return an empty object in case of error
  }
};

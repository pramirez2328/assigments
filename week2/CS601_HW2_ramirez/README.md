# CS601_HW2_Ramirez

This project is a drag-and-drop web application that allows users to categorize items as either fruits or vegetables. Items are fetched from a server and displayed on the page, where users can drag them into respective drop zones.

## Project Structure

```plaintext
CS601_HW2_Ramirez/
│
├── css/
│   └── style.css        # Stylesheet for the project
│
├── scripts/
│   ├── api.js           # Module for fetching items from the server
│   └── main.js          # Main JavaScript file containing app logic
│
└── index.html           # Main HTML file for the application
```

## Files

- **index.html**: The main HTML file that structures the page layout, including:

  - A title header.
  - A container to display fetched JSON data (fruits and vegetables).
  - Two drop zones for dragging and dropping fruits and vegetables.

- **style.css**: Contains the styling for the page, ensuring a user-friendly and visually appealing layout.

- **api.js**: Exports a function `fetchItems` that fetches items from a JSON file served by the backend.

- **main.js**: Contains the core functionality, including:
  - Rendering items in the container.
  - Creating draggable elements for each item.
  - Setting up drop zones for categorizing items.
  - Updating the count of items in each category.

## Features

- **Drag and Drop**: Users can drag items (fruits and vegetables) from a display area and drop them into specific drop zones for each category.
- **Category Validation**: Items can only be dropped into the correct category zone. An alert will notify users if an item is dropped into the wrong zone.
- **Dynamic Count Update**: The count of items in each category is dynamically updated as items are dropped into the zones.

## Usage

1. Open `index.html` in a web browser.
2. Drag items from the "Fruits and Vegetables" container to the appropriate drop zone.
3. The item counts for fruits and vegetables will update as you categorize them.
4. If an item is dropped into the wrong zone, an alert will notify you.

## Initialization

The app initializes when the page loads by:

- Fetching items from the server using `fetchItems` from `api.js`.
- Rendering the fetched items in the display container.
- Setting up event listeners for drag and drop functionality in `main.js`.

## Future Enhancements

- Add more styling to improve user experience.
- Allow adding and removing items dynamically.
- Implement a backend to save categorized data.

## License

This project is for educational purposes and part of coursework for CS601.

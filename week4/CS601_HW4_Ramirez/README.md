# Country Data Manager

This project showcases a simple application to display information about various countries. It categorizes countries into three types: Rainy, Snowy, and Island countries. Each country type has specific attributes such as `rainLevel`, `snowLevel`, or `landSize`. The app dynamically calculates the total annual snow level for snowy countries and renders country data in the browser.

## Features

- Categorizes countries into Rainy, Snowy, and Island types.
- Dynamically renders country data on a web page.
- Calculates and displays the total snow level for snowy countries.

## Project Structure

```plaintext
country-app/
├── node_modules/       # Dependencies installed by npm
├── public/             # Public assets for the application
│   ├── app.js          # JavaScript output generated from TypeScript
│   ├── index.html      # Main HTML file
│   └── style.css       # Optional CSS file for styling
├── src/                # TypeScript source code
│   └── app.ts          # Main TypeScript implementation
├── .gitignore          # Specifies files to ignore in Git
├── package.json        # Node.js package metadata
├── package-lock.json   # Exact versions of installed dependencies
└── tsconfig.json       # TypeScript configuration file
```

---

## Setup Instructions

### Prerequisites

- Install [Node.js](https://nodejs.org/).
- Install Visual Studio Code.

### Installation

1. Download the project and open your terminal.

2. Navigate to the project directory:
   ```bash
   cd country-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Compile TypeScript to JavaScript:
   ```bash
   npx tsc
   ```

---

## Running the Project

### Using Live Server in Visual Studio Code

1. Open the project in **Visual Studio Code**.
2. Install the **Live Server** extension:
   - Go to the Extensions view by clicking on the square icon on the sidebar or pressing `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (macOS).
   - Search for `Live Server` by **Ritwick Dey** and install it.
3. Start the Live Server:
   - Right-click on the `index.html` file inside the `public` folder and select **"Open with Live Server"**.
4. The application will open in your default browser at `http://127.0.0.1:5500` (or the port configured by Live Server).

---

## Application Logic

### TypeScript Implementation

The application is built with a TypeScript interface `ICountry` and three classes: `RainyCountry`, `SnowyCountry`, and `IslandCountry`.

### Key Classes

- **RainyCountry**: Represents a country with a specific `rainLevel`.
- **SnowyCountry**: Represents a country with a specific `snowLevel`.
- **IslandCountry**: Represents a country with a specific `landSize`.

### Main Functions

- **`calculateTotalSnowLevel(snowyCountries: SnowyCountry[]): number`**
  Calculates the total snow level for all snowy countries.

- **`renderAllCountries(countries: ICountry[], container: HTMLElement): void`**
  Renders all country information in the provided DOM container.

- **`renderSnowyCountries(snowyCountries: SnowyCountry[], container: HTMLElement): void`**
  Renders snowy countries and displays their total snow level.

---

## Example Usage

### Data Sample

The application includes the following predefined country data:

```typescript
const countries: ICountry[] = [
  new RainyCountry('United States', 28),
  new SnowyCountry('Norway', 20),
  new RainyCountry('Brazil', 40),
  new IslandCountry('Japan', 145937),
  new SnowyCountry('Sweden', 30),
  new IslandCountry('Australia', 2968464),
];
```

### Output Example

**All Countries:**

- United States has a rain level of 28 inches.
- Norway has a snow level of 20 inches.
- Brazil has a rain level of 40 inches.
- Japan has a land size of 145,937 square miles.
- Sweden has a snow level of 30 inches.
- Australia has a land size of 2,968,464 square miles.

**Snowy Countries:**

- Norway has a snow level of 20 inches.
- Sweden has a snow level of 30 inches.
- **Total annual snow level: 50 inches.**

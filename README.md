# Yellow Taxi Trip Data Analysis Frontend

A fullstack applcation that analyzes and visualizes New York City yellow taxi trip data from 2014, providing insights through interactive charts and filters.

## Features

- **Trip Data Filtering**: Filter taxi trips by:
  - Pickup/Dropoff dates
  - Fare amount range
  - Distance range
  - Payment type

- **Data Visualizations**:
  - Monthly Demand Trend Line Chart
  - Monthly Income Trend Bar Chart

## Tech Stack

### Frontend
- React.js
- TailwindCSS
- React-ApexCharts
- React-DatePicker
- Axios

## Getting Started

1. Clone the repository
    ```bash
    git clone https://github.com/muflifadla38/yellow-taxi-trip.git

2. Install dependencies
    ```bash
    cd yellow-taxi-trip
    npm install

3. Create a `.env` file in the root directory and add:
    ```bash
    REACT_APP_API_URL=http://localhost:4000/api/v1

4. Start the server
    ```bash
    npm run start

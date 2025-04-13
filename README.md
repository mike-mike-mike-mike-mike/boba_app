# Boba App

Boba App is a web application that helps users find boba shops near Netflix office locations. It includes a React frontend and an Express backend.

Node/Express is not my day to day backend, so some time was lost to getting configurations right and finding ways to share types between the client and server. After that, I focused on trying to get the basic features in place, trading off writing any test coverage to give myself as much time as possible. If I did have time to implement some unit testing, I would have focused first on the front end, given the relative simplicity of the backend. I'd want to install a testing framework like jest and react-testing-library to test the components, api calls, and user interactions.

I decided to spend enough time to get the user interface to look decent, without getting nit picky when things weren't perfect. So there's a few alignment issues, and I did not have time to put in an error boundary, which is certainly not ideal.

Lastly, I hoped to simplify the setup such that there only installing/building from the root would be necessary, but ran out of time.

## Features

- Displays boba shop details such as name, image, rating, and distance.
- Select an office to see the nearest shops or highest-rated shops, depending on the sort by filter.
- Click "Load More" to fetch more boba shops based on the current filters.

## System Requirements

- Node.js (ideally v23.11.0)
- npm
- TypeScript

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/mike-mike-mike-mike-mike/boba_app.git
   cd boba_app
   ```

2. Install server dependencies and build the project:

   ```bash
   # from project root
   npm install
   npm run build
   ```

3. Install client dependencies and build the React app:

   ```bash
   # from /client
   npm install
   npm run build
   ```

    You should now have a `dist` folder in the root directory containing the compiled server files and a `build` folder in the `client` directory containing the compiled React app.

4. Create a `.env` file in the root directory and add the following:

   ```txt
   YELP_API_KEY={your_yelp_api_key}
   ```

## Running the Application

### Production Mode

1. Start the production server:

   ```bash
   # from project root
   npm run start
   ```

2. Open your browser and navigate to `http://localhost:8080`.

### Development Mode

In development, the react app is launched separately, and proxies to the express server. This allows for hot reloading for quicker frontend iteration.

1. From the project root, start the development server:

   ```bash
   # from project root
   npm run dev
   ```

2. From the `client` directory, start the React development server:

   ```bash
   # from /client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:8080` or `http://localhost:3000`.

## Scripts

- from root: `npm run build`: Compiles the TypeScript files into JavaScript.
- from root: `npm run start`: Starts the production server.
- from root: `npm run dev`: Runs the application in development mode with live reloading.
- from `/client`: `npm start`: Starts the React development server.
- from `/client`: `npm run build`: Builds the React app for production.

## Troubelshooting

App appears to crash after changing the filter options.

- Double check that you have a valid yelp api key and it is in the `.env` file as `YELP_API_KEY`.

## License

This project is licensed under the ISC License.

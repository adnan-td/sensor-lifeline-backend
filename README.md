# Express and Graphql Api for POC Project

This is a typescript project using graphql and expressjs for providing backend service for POC project.

<!-- Checkout the live project demo <a href="http://poc.adnanshusain.in/graphql">poc.adnanshusain.in</a> -->

## Here's how it looks-like

![image](https://user-images.githubusercontent.com/78212328/222967386-5b769720-05bb-450e-a4df-9a4466ea3e21.png)

## Installation of Project

1. Clone/fork the repository
2. Install Nodejs on your device
3. Install Docker (Skip - if mysql already installed)
4. Install Yarn by `npm install yarn -g` (Skip - if yarn already installed)
5. Create a `.env` file in the root folder of the project, copy and paste the `.env.sample` into the .env file

In the project directory, you can run:

### `yarn dockerup`

Creates the docker network for `mysql` data base along with `phpmyadmin`. Access phpmyadmin at <a href="http://localhost:8080/">localhost:8080</a>\
Skip docker command if database URI is available.

### `yarn install`

Runs the yarn package manager to install all the dependencies of the project. If yarn is not pre-installed, install it with `npm install yarn`

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

### `yarn build`

Compile the typescript files in the project directory into javascript code and places it inside dist folder.

### `yarn start`

Starts the server.js file, created by the build command, in production mode.

### `yarn stop`

Stops the production server if any at all is running.

### `yarn dockerdown`

Shuts down the running docker containers.

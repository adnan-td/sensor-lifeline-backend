# Express and Graphql Api for POC Project

This is a typescript project using graphql and expressjs for providing backend service for POC project.

## Features
Core features include:
1. Sequelize dynamic models
2. Apollo Graphql Server
3. JWT authentication
4. Authorisation using graphql-shields
5. Extensive Typescript Support
6. Docker for easier installation
7. Image Uploads
8. Testing with Jest

<!-- Checkout the live project demo <a href="http://poc.adnanshusain.in/graphql">poc.adnanshusain.in</a> -->

## Here's how it looks-like

![image](https://user-images.githubusercontent.com/78212328/222967386-5b769720-05bb-450e-a4df-9a4466ea3e21.png)

![image](https://user-images.githubusercontent.com/78212328/222967941-b7abfd0e-f2e2-4502-8e5e-7219bcef109b.png)

## Installation of Project
[Follow this guide](./installation.md)

## Basic Project Commands:
In the project directory, you can run

### `yarn dockerup`

Creates the docker network for `mysql` data base along with `phpmyadmin`. Access phpmyadmin at <a href="http://localhost:8080/">localhost:8080</a>\
Skip docker command if database URI is available.

### `yarn install`

Runs the yarn package manager to install all the dependencies of the project. If yarn is not pre-installed, install it with `npm install yarn`

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

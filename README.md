# Food_Order-

<img src= "logo.png">Food Ordering App using Next.js</img>


## Description
This project is the start of a fullstack application using React, Next, Strapi, and MongoDB. In its current state, a user can build their order and check out. Once in the checkout, the user can input their payment information. In order to process the payment, Stripe service is being utilized. 


## Installation 
Download a copy of this repo. Open the repo in your favorite code editor and terminal to the project's directory. Now you are ready to run the app in the delevopment mode by using 'npm install' to install the needed dependencies. You will also need to create a Strapi project using 'npx create-strapi-app@latest my-project' . Do not do a quickstart as we want to choose to use MongoDB. Please note, you will need to have MongoDB installed in your local machine. If you would also like to use Stripe you will need to make an account as you will need to use your personal API Keys.\

Where to add your Stripe API Keys: \
backend/api/order/controllers/order.js - please add your SK_key here 
frontend/pages/checkout.js -please add your PK_key here



### `npm run develop`

In the Frontend:
'npm run develop' starts the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run develop`

In the Backend:
'npm run develop' starts Strapi.
Open [http://localhost:1337/admin](http://localhost:1337/admin) to view it in the browser.

 

## Usage
This project is an example of frontend and backend development. 

## Support
This project was bootstrapped with Next.JS frame work. You can learn more in the [Next.js App](https://nextjs.org/learn/basics/create-nextjs-app).\
 To set up Stripe, please navigate [here](https://dashboard.stripe.com/test/dashboard).

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Back-End Support
The backend was created with [strapi](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/installation/cli.html#creating-a-strapi-project) and [Mongo DB](https://docs.mongodb.com/manual/).


## Roadmap
The goal for this project is to continue to add more features while maintaining an intuitive design. In addition, the back-end will continue delevoping to leverage other services such as user authentication. 

## License Information
MIT
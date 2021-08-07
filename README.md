# Vue3 Shop

## Description

The app runs a online shop which sells 3 products.

The current prices of the products are the following:

```
Code         | Name         |  Price
---------------------------------------
CAP          | Cap          |   5.00€
TSHIRT       | T-Shirt      |  20.00€
MUG          | Coffee Mug   |   7.50€
```

And we are offering users these discounts:

- 2-for-1 promotions: buy two of the same product, get one free, applied to `CAP` items.
- bulk discounts: buying 3 or more of `TSHIRT` product, the price of that product is reduced 5%. E.g., if you buy 3 or more `TSHIRT` items, the price per unit should be 19.00€.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

## Directories

```
└── src
    ├── api (In charge of making the requests to the API)
    ├── assets (Contains the styles of the app)
    ├── components (Contains the Vue components)
    ├── enums (Contains the constants of the app)
    ├── hooks (Contains the composable functions)
    ├── middleware (Contains the Checkout middleware)
    ├── store (Contains the Vuex modules)
    └── views (Contains the Vue views)
└── tests
    └── unit (Contains the unit tests of the app)
        ├── components (Unit tests for Vue components)
        ├── middleware (Unit tests for the Checkout middleware)
        ├── store (Unit tests for the Vuex modules)
        ├── mocks (Mocks: Vuex State, Vuex Store, Vuex Context and Princing Rules)
        └── views (Unit tests for Vue views)
```

## Tasks

### App scaffolding

- [chore] Create a Vue app with these plugins: Typescript, ESlint, Prettier, Vuex, Jest and PostCSS

### Service

- [feat] Create the products service

### Checkout middleware

- [feat] The checkout manages the discount rules
- [feat] The checkout manages the pricing rules
- [feat] The checkout can scan a product
- [feat] The checkout can remove a product
- [feat] The checkout knows the total items
- [feat] The checkout knows the total cost
- [feat] The checkout knows the total cost with discounts
- [feat] The checkout knows the discounts applied

### Data management

#### Modal

- [feat] Create modal Vuex module
- [feat] Create modal initial state
- [feat] Create modal actions
- [feat] Create modal mutations
- [feat] Create modal getters

#### Shopping

- [feat] Create shopping Vuex module
- [feat] Create shopping initial state
- [feat] Create shopping actions
- [feat] Create shopping mutations
- [feat] Create shopping getters

### Composable Functions

- [feat] Create the composable functions for the modal module
- [feat] Create the composable functions for the shopping module

### App UI

- [feat] Create App component

### Products UI

- [feat] Create view: products
- [feat] Create component: common title
- [feat] Create component: product header
- [feat] Create component: product list
- [feat] Create component: product item
- [feat] Connect products with the data manager

### Summary UI

- [feat] Create view: summary
- [feat] Create component: summary items
- [feat] Create component: summary discounts
- [feat] Create component: summary total cost
- [feat] Create component: summary checkout
- [feat] Connect summary with the data manager

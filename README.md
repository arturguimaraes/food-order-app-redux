# Food Order App Redux

![food-order-app-redux](https://github.com/arturguimaraes/food-order-app-redux/blob/main/src/assets/img/print1.png?raw=true)

## Live Application

Click [here](https://arturguimaraes.github.io/food-order-app-redux/) to go to the application.

## Installation

1. `Clone repository`
```js 
git clone https://github.com/arturguimaraes/food-order-app-redux.git 
```
2. `Go to directory`
```js 
cd food-order-app-redux
```
3. `Install required libraries`
```js 
npm i
```
4. `Start project on http://localhost:3000/`
```js 
npm start
```

## Introduction

This is a ReactJS, Redux, Typescript and Sass project. This simulates a food ordering app, with cart items control for a basic e-commerce shop.

## Implementation

The project uses ReactJS, Redux, Typescript and Sass. It explores concepts of:

1. Redux (Hooks, Store, Actions, Slice, State, Dispatch)
2. useState, useEffect
3. Interface
4. Event handlers
5. Sass modules
6. Spread operators

## Features

![food-order-app-redux](https://github.com/arturguimaraes/food-order-app-redux/blob/main/src/assets/img/print2.png?raw=true)

1. Cart control for adding correctly amounts if item is already in cart.
2. If item not in cart, add to it normaly.
3. Item removal in case of subtracting less then 1 amount, or subtracts amount.
4. Empty cart feature.
5. All features above are controlled via Redux dispatch actions.
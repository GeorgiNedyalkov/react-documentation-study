# Thinking in React

When you build a user interface with React, you will first break it apart to **components**.
Then you describe the different **visual states** for each of your components.
Finally, you will connect the components together so that **data flows** between them.

## Start with the mockup

We already have a mockup design to work with and a JSON API test data.

To implementa UI in React, you will usually follow the same five steps.

## 1. Break the UI into a component hierarchy

Start by drawing boxes around every component and subcomponent in the mockup and naming them.

We can split the design in different way:

- Programming: using the [single responsibility pricinple](https://en.wikipedia.org/wiki/Single_responsibility_principle) which says: "A module should be responsible to one, and only one actor." A component should do only one thing.
- CSS: consider what you would make a class selector for.
- Design: how you would organize the design's layers

If the JSON is well structured, it will naturally map to the component structure of the UI.

In this example app we have five components:

1. FilterableProductTable - contains the entire app
2. SearchBar - receives user input
3. ProductTable - displays and filters the lsit according to user input
4. ProductCategoryRow - displays the heading for each category
5. ProductRow - displays a row for each product

After we have defines the components in the mockup, we arrange them into a hierarchy.

- FilterableProductTable
  - SearchBar
  - ProductTable
    - ProductCategoryRow
    - ProductRow

## 2. Build a static version in React

It's time to implement the app.

The first thing to do is build a version that renders the UI of the data model without any interactivity. To do this we want to build components, using other components and pass data using props. Don't use state at all to build a static version. State is reserved only for interactivity.

After building the components, we have a library of reusable compoennts that render the data model.
Because for now its static, the component only return JSX. The top component (FilterableProductTable) takes the data model as a prop.
This is a **one-way data flow** because data flows from top-level component to the ones at the bottom of the three.

## 3. Find the minimal but complete representation of the UI state

The make the UI interactive, we need the users to change the underlying data model. This is why we use state.

Think of state as the minimal set of changing data that the app needs to remember. The most important principle for structuring data
is [DRY Don't Repeat Yourslef](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) which says:
"Every piece of knowledge must have a single, unambigious representation within a system."

Figure out the absolute minimal representation of state that the application needs and compute everything else on demand.

Here are all the pieces of data in this example application:

1. The original list of products
2. The search text the user has enetered **state**
3. The value of the checkbox **state**
4. The filtered list of products

To figure out which of these needs state. Here are some questions we can ask ourselves:

- Does it remain unchanged over time? If so, it isn't state.
- Is it passed in from a parent via props? If so, it isn't state.
- Can you compute it based on existing state or props in your component? If so, it definitely isn't state.

**DEEP DIVE**

## Props vs State

There are two types of "model" data in React apps: props and state

- **Props** are like arguments you pass to a function. They let a parent component pass data to a child component.
- **State** is lika component's memory. It let's component keep track of some information and change it in response
  to iterations.

Props and state are different, but they work together. A parent component will often keep some information in state
(so that it can change it) and pass it down to child components as their props.

## 4. Identify where state should live

We need to figure out which component is responsible for changing this state or owns the state.
React uses a one-way data flow which means we need to determine which component should own state.
We can do this following these steps:

1. Identify every component that renders something based on that state.
2. Find their closes common parent component - a component above them in all the hierarchy.
3. Decide where state should live:
   1. Often we can put state directly into their common parent
   2. We can also put state in some component above their common parent.
   3. If there isn't one, create a new component solely for the holding the state and add it somewhere in the hierarchy above the common parent component

Now let's run through them

1. Components that use state

- ProductTable: need to filter the product list based on that state (search text and checkbox value)
- SearchBar: Needs to display that state (search text and cehckbox value)

2. Find their common parent

The first component that both of them share is FilterableProductTable.

3. Decide where state should live => FilterableProductTable

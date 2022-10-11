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

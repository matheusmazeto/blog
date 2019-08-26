---
title: Conditional Rendering In React
date: '2019-03-11'
description: A component composition-based approach to conditional rendering.
tags: ['react', 'jsx', 'hooks', 'conditional rendering', 'component composition']
cover: './cover.jpg'
draft: false
---

The declarative approach of [React](https://reactjs.org) makes writing user interfaces easier than ever. In this post, I will explain how to conditionally render things by using the component composition pattern.

## Conditional Rendering – The Classic Way

A common way to conditionally render something in React is by using inline `if` with logical `&&` operator:

```jsx
const UserNotifications = props => (
  <div>
    <h2>Hi {props.userName}!</h2>
    {props.unreadNotifications > 0 && (
      <p>You have {props.unreadNotifications} notifications.</p>
    )}
  </div>
);
```

If you have to render either `A` or `B` depending on a conditional statement, the [ternary conditional operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) is often used:

```jsx
const UserLogStatus = props => (
  <div>
    <h2>Welcome to morello.dev</h2>
    {props.loggedIn ? (
      <button onClick={props.onLogOutClicked}>Log Out</button>
    ) : (
      <button onClick={props.onLogInClicked}>Log In</button>
    )}
  </div>
);
```

The techniques seen above are perfectly legal in React, but we can use component composition to make conditional rendering more elegant and easier to read.

## Conditional Rendering Using Component Composition

We can use the component composition pattern to conditionally render parts of UI. Let's see how!

> For a refresh on component composition pattern in React, see [this post](https://www.robinwieruch.de/react-component-composition) by Robin Wieruch.

### Conditional Components

Every if-then-else code block consists of two parts: the logical condition that has to be evaluated and the components to be conditionally rendered.

We can go further with this consideration by turning the if-then-else block into `If`, `Then` and `Else` components. We pass the condition as props to `If`, and we put `Then` and `Else` inside it. The `Then` component contains the stuff to render when the condition evaluates to `true`, and the `Else` component contains the stuff to render when the condition evaluates to `false`:

```jsx
const UserLogStatus = props => (
  <If condition={props.loggedIn}>
    <Then>
      <button onClick={props.onLogOutClicked}>Log Out</button>
    </Then>
    <Else>
      <button onClick={props.onLogInClicked}>Log In</button>
    </Else>
  </If>
);
```

Everything sounds cool, but how could we implement the `If`, `Then` and `Else` components? Here is my solution, but feel free to submit yours in the comment area 💡

## If, Then, Else

We start by considering the `If` component, as it is the parent. The idea is to take the condition passed as props, evaluate it and render the children of `Then` if the result is truthy, otherwise render the children of `Else`.

> Note that, in order for this to work, `If` **must** be the parent of `Then` and `Else`. Violation of this constraint would make the code not working as expected.

### If

Let's see the code of the `If` component:

```jsx
const If = props => {
  const thenComponent =
    'length' in props.children
      ? props.children.find(child => child.type.name === 'Then')
      : props.children.type.name === 'Then'
      ? props.children
      : null;

  const elseComponent =
    'length' in props.children
      ? props.children.find(child => child.type.name === 'Else')
      : props.children.type.name === 'Else'
      ? props.children
      : null;

  return props.condition ? thenComponent : elseComponent;
};
```

The component logic is quite simple: we evaluate `props.condition` and return `Then` or `Else` depending on the result of the evaluation (see the `return` statement).

Let's focus on the assignment of `thenComponent` (the same considerations hold for `elseComponent`):

```jsx
const thenComponent =
  'length' in props.children
    ? props.children.find(child => child.type.name === 'Then')
    : props.children.type.name === 'Then'
    ? props.children
    : null;
```

We first check if `props.children` is an array or an object by testing the presence of `length` property:

- if `props.children` is an array, we look for the child whose name is `"Then"`, and we assign it to `thenComponent`
- if `props.children` is not an array, we check if it is an instance of `Then`, and we assign it to `thenComponent`

If both tests fail, we assign `null` to `thenComponent` (so nothing will be rendered).

### Then/Else

Implementation of `Then` and `Else` component is the same. Let's see the code for the `Then` component as a representative example:

```jsx
const Then = props => props.children;
```

This super-tricky function returns its children. Easy enough.

## Final Considerations

We can pass just `Then` to `If` when we want to render something only if the condition is truthy:

```jsx
<If condition={1 + 1 === 2}>
  <Then>1 plus 1 equals 2</Then>
</If>
```

This is equivalent to inline `if` with logical `&&` operator, which is quicker to write but produces less readable code.

The same is valid for `Else`:

```jsx
<If condition={myCondition}>
  <Else>myCondition is false</Else>
</If>
```

In this case, we could just negate the condition and change `Else` with `Then`:

```jsx
<If condition={!myCondition}>
  <Then>myCondition is false</Then>
</If>
```

## Live Demo

See the live demo on [CodeSandbox](https://codesandbox.io/s/4wrn34q7pw).

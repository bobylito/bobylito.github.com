---
title: Starting React today
description:
  This is not a guide of the 20 best libraries to learn before starting with
  React
pubDatetime: 2019-12-10
tags:
  - react
  - beginners
---

> This post was also posted on
> [Dev.to](https://dev.to/bobylito/starting-react-today-1egl). Drop by to leave
> a comment and continue the discussion

React is intimidating, daunting even. And yet it is very simple. That's a
paradox, right? And it is pretty annoying for beginners, and for me as everyone
takes me for a fool. So let's talk about why it feels so damn hard to learn, and
how I would start again today.

**TL;DR**: react is not hard, the ecosystem is. And the ecosystem is like that
because it has to answer the many questions React left unanswered. If you're
starting today, start a small project with just React, feel the pain, restart
the project, add a library, feel other problems, repeat :D

## Why does React feel so hard to learn?

But first, what is React anyway? React is a JavaScript library for building user
interfaces, UI for short. If you've tried to learn React, you might know that
already 😃 What this library does is build HTML and allow you to "react" to user
interactions. And that's it, it doesn't even come with a way to deal with data
from any source.

Even though, it does "little" it does it very clearly. The library enforces the
concept of _component_. The components can either "draw" HTML tags or other
components. Of course, the sub components can do the same. Therefore we end up
with a tree structure that builds our UI.

React does contain other concepts, but really that's the gist. And that's the
issue. Because it only does the UI, it does not answer the needs for a fully
fledged Single Page Application. And thus, the community began to address them
which led to the creation of the React Ecosystem. Each piece of the ecosystem
comes with its own limitations which led to other patterns and libraries, and so
on and so forth...

With this plethora of libraries, best practices and patterns, how does one
create solid basis for learning React?

## Start like it's 2013 🤘

There is no better way to start learning a new tool than when it is rudimentary.
Unfortunately for you, it's not the case anymore with React. But you can still
emulate that with create-react-app 👍

```sh
# make sure you have node installed
npx create-react-app learning-iteration-1
cd learning-iteration-1
npm start
```

The recipe is quite straightforward:

1.  pick a small project idea
2.  use only react to build it
3.  feel the pain, if there is no pain then switch project 🎉
4.  start again and introduce a single library / pattern that will solve a pain
    point
5.  repeat from 3.

Here are some challenges that you want to solve in your project:

- synchronize two components that are not parent / children
- load data from the web
- make a big tree and have only few components update

With this method, you will build up your knowledge rather than being overflowed
by contradictory information. You will be able to forge your own mind on which
solutions to adopt.

Hope you will find those suggestions useful 🙇‍♂️

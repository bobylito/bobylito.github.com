---
title: "Projects: how to avoid getting swamped"
description: Some projects feel unfinished; Redefine what finished means!
pubDatetime: 2020-01-04
tags:
  - productivity
  - projects
  - nostalgia
cover_image: /covers/joshua-j-cotten-GiAhgAdISFE-unsplash.jpg
---

> This post was also posted on [Dev.to](https://dev.to/bobylito/projects-how-to-avoid-getting-swamped-2lk7). Drop by to leave a comment and continue the discussion

The other day I posted about [getting started with React](https://dev.to/bobylito/starting-react-today-1egl). I received a lot of positivity and good vibes from the DEV community (Thanks 🙇‍♂️). In the process, I also received some great suggestions, and one of them was to propose some starter project ideas. This suggestion threw me on the memory lane of projects I made to learn new technologies.

I did a review of some of the projects I made. Amongst the projects, some were complete failures; some I continue to use today. Along the way, I found some things that I might be of interest.

This article is a summary, with the goal of each project, how it went and, what we can learn from them.

_Disclaimer_ Not every advice is for everyone: I’m a product-oriented person, and I can’t do tech for the sake of it; if it’s not your case, I’d love to hear about your point of view when you learn.

Before you go any further, here are the key learnings (TL;DR):

- Be super clear about what you want to achieve: learning or making something
- Set yourself a “done” goal
- If you deeply understand what you’re building, it helps with the other parts of the project
- If you have mastered the tech, it helps you focus on what you’re building

### The Blog engine

The first project is one of my earliest, and a pretty failed one too. Back in the early 2000s, blogging was a thing, and being online was very attractive and yet not very accessible. Blogger launched in 99, and the initial release year of WordPress is 2003. So making a blog engine did not seem that bad of an idea.

When I started the project, I had a very vague idea of what I should do. To prevent you from going on the same path, here is what I expect of a minimal blog engine:

- You must be able to write content
- You must be able to publish content
- The content must be visible on the website in a structured form, once published
- You may have multiple writers
- Only the writer(s) can write and publish content

This kind of project is a perfect fit when you want to learn a new backend technology. Here are some of the things you learn:

- Database access
- CRUD interfaces
- Backend MVC
- Authentication
- Making UI’s

It’s no surprise that with such a list of things to learn that this project is the goto example for back-end frameworks, such as Rails or Django.

In my case, I ended up writing no content or so and with an unfinished product. I couldn't decide between the technical aspects of the project and my will to write content. Also, I didn’t know what it means to write anything; I didn’t have any idea of what an editorial line could be.

I did not learn explicitly from this experience then. But it gave me some hints for building my next projects.

### Video games

It is tough to make a single list of requirements for a game. So here are some general objectives that could apply to any game:

- You must have an understandable goal (survive)
- You must be able to evaluate yourself (with points for example)
- It must be fun (visual effects and sound are essential)

This kind of project is perfect for trying out UI libraries (React) or API (Canvas). Libraries do not have video games as their primary target, which makes this type of project exciting for potential performance issues. On the other hand, raw API’s tend to be very low-level, and there are no game primitives to help you, which is also very good for practicing abstraction.

![Little shooter 1 in action](/images/littleshooter1.png) _Little shooter uses Canvas 2D API. I feel the game is a bit too hard, [try it here](http://bobylito.me/little-shooter/)_

I picked a kind of video game I love (2D vertical shooters), and it helped me focus on learning the skills I wanted ([Canvas 2D](https://github.com/bobylito/little-shooter)). The second time, it was even more manageable, and I could deepen the story I wanted to express even though I used other technologies ([React and DOM](https://github.com/bobylito/littleshooter2)).

![Little shooter 2 intro screen](/images/littleshooter2.png) _Little shooter 2 is an improvement on the game side and also a complete rewrite, [try it for yourself](http://bobylito.me/littleshooter2/) and tell me what you think in the comments._

Making a [video game framework](https://github.com/bobylito/loop) is an interesting exercise as well, even though you have to spend time on things that are not the game itself. The framework is a means to an end when making a video game, be careful. And also, I haven't finished any games with the framework I made; I guess that counts against the idea of making a framework.

### A graphing tool

This one is very niche and yet one of my favorite personal projects. I was deep into making animations with Loop, and because I was on this purely functional trend, I was making super complex functions. To understand what I was doing, I decided to graph them.

In a few words, here is what you need for the simplest graphing tool:

- You must be able to manage a set of functions
- You must be able to check the functions visually
- You should be able to use the mouse to navigate (drag, zoom in / out)

Doing so, I ended up writing [a library](https://github.com/bobylito/jsPlot) and [then a UI](https://github.com/bobylito/functionXplorer). I needed this tool to understand what I was doing; therefore, it was crystal clear to me what I wanted to implement. And because of that, the UI was evident, and picking up a new front-end framework was not an issue (BackboneJS).

![FunctionXplorer UI](/images/functionxplorer.png "FunctionXplorer UI") _The FunctionXplorer UI is pretty usable, in spite of its old age. [Try it for yourself](https://github.com/bobylito/functionXplorer)_

### Learning from the past projects

To get the best of a personal project, I find best to:

- Set a clear objective for focus and self-evaluation
- Restrict the scope (business knowledge, requirements or technology) to focus even more on your objective
- Do something that you like to keep the motivation going

The good thing is that those hints apply very well on the business side too. As a professional, if you are aware of those elements, they make you more efficient and driven.

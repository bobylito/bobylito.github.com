---
title: Making docs more inspiring, from “What” to “Why”
description:
  My views on documentations, and my journey to improve them using the tourism
  guide as a metaphore
pubDatetime: 2016-11-16
tags:
  - documentation
  - manifesto
  - metaphore
---

> This post was originally posted on
> [Algolia stories](https://stories.algolia.com/making-docs-more-inspiring-from-what-to-why-6386fadfd0e8)

_This blog post is about my journey from having to write some documentation to
dreaming about how I can improve the documentation of our newest libraries. It
starts by making the map of the library you’re documenting, then you give
directions and highlight the key destinations, and finally you write a tourist
guide that will make everybody want to use your library._

When I joined [Algolia](https://www.algolia.com/), one of my first projects was
to build our
[JS Helper](https://community.algolia.com/algoliasearch-helper-js/), a companion
library for the client to build advanced search experience. Since I was the only
one building it, it fell on me to write documentation, something that I hadn’t
done much of in the past. I knew that, at Algolia, we really work hard to help
our users and, while doing support is the best way to help them directly, it’s
always better to solve problems before they even come up with an easy-to-use
product. This is why we spend a lot of time on our documentation, so that users
don’t need support.

## It all starts with a map

At its very core, the documentation exposes the various elements of a library
and reveals the relationships between which are not always evident when looking
at the code. Think of it as the difference between being inside a forest
(looking at the code) and having a bird’s eye view (the documentation).

When I first took over this library, I started writing inline documentation as
an easy way to provide some groundwork. The obvious choice for inline
documentation in JavaScript is JSDoc — it is both a standard format for writing
comments (heavily inspired by Javadoc) and a tool to transform those comments
into a website.

This great thing with JSDoc-ing a project is that you attach meaningful
information directly to your code. It can be formal like describing the types
used or it can be more editorial when you write the description in natural
language.

As I added more and more chunks of documentation while generating the associated
website, I began to realize that I would eventually end up with a complete map
of the project. The map I had created provided a means of exploring what was in
the code I had written; however, while a map is great for the big picture, it’s
not great at giving you pointers about where you should focus your attention.

Once I realized this, the next step was to start highlighting points of interest
in my code, to direct users in a specific direction.

## Highlighting points of interest

When you first dive into a new library, it’s nice to have some guidance — and
this is where a JSDoc approach falls short. I was already getting certain
questions often enough that I knew I needed to answer those questions inside my
documentation — I answered this by creating a cheat sheet.

The whole point of a cheat sheet is to answer each case with a pattern that goes
beyond simply reading the unit documentation. For each entry, there is a
copy-pastable piece of code that is self contained, like a shortlist of must-see
places in a city.

This layer of your documentation needs to be well organized. The most important
aspects come first in the cheat sheet — laying down the basic path that users
will take to learn how to use your library. Users have different expectations
when they arrive for the first time or when they come back to create a new
feature in the search experience of their app, so you need to think about how to
address this wide range of perspectives in the most efficient way possible.

Once you’ve identified the key points of interest, users will be able to
navigate through your API or go directly to the specific problem solving entry
that you’ve created for them. Yet these two kinds of content don’t blend well by
default. On one side, you have the documentation website from the JSDoc and on
the other you have a single page highlighting specific use-cases. While users
now know _how_ they can use this library, we fall short when it comes to
explaining _why_ they should use it.

In other words, it fails to inspire them.

## So I wrote a tourist guide

After working on the Helper, I started working on a new project that would later
be [instantsearch.js](https://community.algolia.com/instantsearch.js/), a widget
library for creating search UI on the web. We wanted this project to be a
game-changer for us and for our users. In order for this project to be
successful we had to have some kickass documentation, which is how I learned
that documentation needs to have a marketing layer.

Widgets like [instantsearch.js](https://community.algolia.com/instantsearch.js/)
are visual and interactive, so a static jsDoc wasn’t going to be enough here. We
wanted to easily extract the formal documentation that we had written using
jsDoc.

To solve this, we introduced jsdoc2md, a project that extracts information from
code and comments and creates small markdown files (instead of creating a full
website). This was perfect as we chose to use jekyll, the static website
generator which natively reads markdown.

With this, we were able to make a website with a strong editorialized content
and the right amount of automatically generated formal content. The first page
presents the key features of the project (with sexy animations, of course), the
API doc has a live display for all the components, and we also provided another
page with complete examples.

## Three takeaways on writing inspiring documentation

A few months later, I returned to the JS Helper and reused everything I learned
working on documentation:

- **Zooming in is just as important as Zooming out:** From high architectural
  concepts to the usage of each function, the key to a good guide is the ability
  to balance a solid overview with some very specific use-cases.

- **Every developer learns differently. Adapt:** Today, the helper proposes a
  [getting started](https://community.algolia.com/algoliasearch-helper-js/gettingstarted.html),
  a
  [guide](https://community.algolia.com/algoliasearch-helper-js/concepts.html),
  [the reference API](http://v) and
  [examples with patterns](https://community.algolia.com/algoliasearch-helper-js/examples.html)
  and
  [integrations with other libraries](https://community.algolia.com/algoliasearch-helper-js/examples.html#use-with-frameworks)

- **A documentation is only good if it makes developers want to try the
  library:** The helper documentation is easy to read, to navigate, the tone
  tries to be enthusiastic, doesn’t hide its purpose on page 3 and it has a cool
  logo (thanks @aplu).

Good library documentation should act as a tourist guide. Readers should already
be thinking about their trip as they read your guide. Present them the overview,
give them the best itinerary, and don’t be in their way when they don’t want to
follow it.

I know my journey for the documentation is not over yet. Documenting code is
fine, but I still think a lot about the best way to document code concepts that
are code but not expressed in the language itself.

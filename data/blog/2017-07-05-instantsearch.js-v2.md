---
title: InstantSearch.js V2
description:
  The renaissance of IS v2 to become the core of all Algolia libraries
pubDatetime: 2017-07-05
tags:
  - instantsearch.js
  - algolia
  - release
---

> This article was oringally released on Algolia's blog. It is hosted here for
> archive purposes. It's been saved using wayback machine from archive.org.

# Connectors, Docs & the Future — a Deeper Look into InstantSearch.js v2 | Algolia Blog

Back in November 2015, we
[released InstantSearch.js v1](https://web.archive.org/web/20201030173706/https://blog.algolia.com/announcing-instantsearch-js-everything-you-need-for-great-search-in-one-library/)
in order to give you an efficient way to build search UIs. We have received good
feedback so far: 1600+ GitHub stars, 600+ upvotes on Product Hunt, and 1700+
live implementations and counting.

Over the last 18 months, we have learned a lot with your feedback, our
experience creating
[other](https://web.archive.org/web/20201030173706/https://community.algolia.com/react-instantsearch/)
[libraries](https://web.archive.org/web/20201030173706/https://community.algolia.com/instantsearch-android/),
and with our internal usage of those same libraries.

What we’ve found is that:

- When it comes to widget customization **there are never enough options.**
- **The learning curve has one steep jump in it**: when you have exhausted the
  API options, you have to create custom widgets which requires search
  knowledge.
- There are some limitations in the current implementation that we want to
  overcome so that we can confidently continue to improve InstantSearch.js.

We’ve done our best to integrate what we’ve learned into
[InstantSearch.js v2](https://web.archive.org/web/20201030173706/https://community.algolia.com/instantsearch.js/v2/),
which we are releasing today. Here are some of the changes we’ve implemented.

## Customization API for widgets

Before getting down to nitty gritty details of this new API, let’s have a look
at a practical use case.

![Blog layout as of June 2017](/images/blog-layout-2017.png)

On our blog we use a menu widget to let the user navigate into the categories.
The behavior of this widget works perfectly here because of its unique
properties:

- Only one element can be selected at a time
- It displays all the values with the counts
- It also displays a special **all** item which deselects the current category

This behavior is exactly the same as another well known UI element: the
drop-down menu.

![Menu as dropdown](/images/Menu-as-dropdown.png)

Some of you rightfully
[asked](https://github.com/algolia/instantsearch.js/issues/1904): “Can we render
your menu widget as a drop-down element?”

The problem is that the HTML of both UI menu elements is completely different
and can’t be expressed as template options. The two widgets’ HTML
implementations are very different:

![HTML rendering of UI elements: menu widget and a drop-down](/images/menu-vs-dropdown.png)
_HTML rendering of the menu widget and a drop-down_

Reflecting on that, we would have to either:

- Add a “renderAsSelect” option to the InstantSearch.js menu widget
- Provide a menuSelect widget (we even considered
  [a PR for that](https://github.com/algolia/instantsearch.js/pull/2045))

But adding more options does not make an API any good. This problem is actually
deeper and can be phrased as:

> “How can I precisely control the rendering of InstantSearch.js widgets?”

As we discussed during
[our release of react-instantsearch](https://web.archive.org/web/20201030173706/https://blog.algolia.com/harnassing-apis-with-react-a-different-approach/)
earlier this year, widgets are made up of two parts:

- **Search** **business logic,** which deals with the Algolia engine
- **Rendering logic**, which renders the UI and handles the user interactions

With the connectors API, we abstracted the search business logic into its own
API, making it easier than ever for you to precisely control the rendering of
any widget. The default IntantSearch.js widgets are implementations of their
respective connectors.

Example usage:

```js
// custom `renderFn` to render the custom Menu widget
function renderFn(menuRenderingOptions, isFirstRendering) {
  if (isFirstRendering) {
    menuRenderingOptions.widgetParams.containerNode.html("<select></select");

    menuRenderingOptions.widgetParams.containerNode
      .find("select")
      .on("change", function (event) {
        menuRenderingOptions.refine(event.target.value);
      });
  }

  var options = menuRenderingOptions.items.map(function (item) {
    return item.isRefined
      ? '<option value="' +
          item.value +
          '" selected>' +
          item.label +
          "</option>"
      : '<option value="' + item.value + '">' + item.label + "</option>";
  });

  menuRenderingOptions.widgetParams.containerNode.find("select").html(options);
}

// connect `renderFn` to Menu logic
var customMenu = instantsearch.connectors.connectMenu(renderFn);

// mount widget on the page
search.addWidget(
  customMenu({
    containerNode: $("#custom-menu-container"),
    attributeName: "categories",
    limit: 10,
  })
);
```

The connector handles the business logic and exposes a simplified API to the
rendering function (items, refine, widget parameters). In this case, it receives
a function to change the currently selected value and the list of options to
display. This makes the core logic of a widget easily reusable.

In v2, all the built-in widgets with a UI rendering now have their own
connector. Because this is a significant change in the way the library is used,
we needed to rethink the documentation:

![](https://web.archive.org/web/20201030173706im_/https://blog-api.algolia.com/wp-content/uploads/2017/07/347984.png)

## Revamping the documentation

In v1, the documentation layout was a single page with multiple columns.
Visually it looked great but when the API grew, some issues started popping up:

- The content felt constrained and was hard to scroll through
- It was hard to find space for new topics

After InstantSearch.js v1, we iterated a lot on our other documentation
websites:
[places](https://web.archive.org/web/20201030173706/https://community.algolia.com/places/),
[JS Helper](https://web.archive.org/web/20201030173706/https://community.algolia.com/algoliasearch-helper-js/),
[React InstantSearch](https://web.archive.org/web/20201030173706/https://community.algolia.com/react-instantsearch/).
With this knowledge and experience, we found that the best way of organizing
documentation for libraries like ours is having multiple pages. For
InstantSearch.js v2, we are introducing
[getting started](https://web.archive.org/web/20201030173706/https://community.algolia.com/instantsearch.js/v2/getting-started.html)
and
[guides](https://web.archive.org/web/20201030173706/https://community.algolia.com/instantsearch.js/v2/guides/customization.html),
and we are reorganizing the
[API reference](https://web.archive.org/web/20201030173706/https://community.algolia.com/instantsearch.js/v2/widgets.html)
into independent sections.

![API documentation best practices](https://web.archive.org/web/20201030173706im_/https://blog-api.algolia.com/wp-content/uploads/2017/07/Doc-v2-screenshot.jpg)

The **getting started tutorial** is the part that helps our new users most.
Making it a prominent part of the navigation easily orients them. This is where
we want to provide a good overview and real learning value.

**Guides** are also very important because we found that you can only do so much
with an API. Guides provide a framework to users whose use cases may be too
niche or advanced to use an obvious solution.  

Finally, we kept and split up the **API reference**. Like we’ve done since
InstantSearch.js v1, this part is completely built on top of the code
documentation (jsdoc). We even go to the point of using it to create pseudocode
examples to explain the API.

To learn more about what we think about documentation, read the blog post that
we wrote about
[the user’s journey learning a library](https://web.archive.org/web/20201030173706/https://stories.algolia.com/making-docs-more-inspiring-from-what-to-why-6386fadfd0e8).

## Building for the future

For the last part of this release, we also wanted to make sure that we are going
to be able to continue to improve the library during this major version’s
lifecycle. For this, we had to introduce a few breaking changes. All of them are
documented in the
[migration guide](https://web.archive.org/web/20201030173706/https://community.algolia.com/instantsearch.js/v2/guides/migration.html).

Other notable changes:

- InstantSearch.js now ships a simple and effective theme for all widgets ?
- The slider is now based on
  [AirBnB’s rheostat slider](https://web.archive.org/web/20201030173706/https://github.com/airbnb/rheostat)
  ?
- The build is now 33% smaller and uses
  [preact](https://web.archive.org/web/20201030173706/https://preactjs.com/)
  internally ?
- The searchFunction (an advanced feature) has been improved. It now has all the
  methods ?

## Final word

With this version, we want to:

- Give you more power to customize widgets
- Simplify the project to new users
- Make the core of InstantSearch.js future proof

InstantSearch.js v2 is available and you can try it now:

- Read the
  [documentation](https://web.archive.org/web/20201030173706/https://community.algolia.com/instantsearch.js/v2)
- [Migrate](https://web.archive.org/web/20201030173706/https://community.algolia.com/instantsearch.js/v2/guides/migration.html)
  a v1 application
- Check the NPM package on the
  [Yarn website](https://web.archive.org/web/20201030173706/https://yarnpkg.com/en/package/instantsearch.js) 

As always with Algolia, your feedback is key to provide you the best tools.
Encountering a bug? Open a
[GitHub issue,](https://web.archive.org/web/20201030173706/https://github.com/algolia/instantsearch.js) Want
to showcase your awesome InstantSearch.js website? Post it to our
[forum](https://discourse.algolia.com/) and get expert feedback from our
community.

[![](/images/InstantSearch-JS-CTA.png)](https://web.archive.org/web/20201030173706/https://community.algolia.com/instantsearch.js/v2/)

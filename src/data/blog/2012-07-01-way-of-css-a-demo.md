---
layout: post
title: Way of css, a demo.
pubDatetime: 2012-07-01
tags:
  - javascript
  - demoscene
  - css
---

## way of css, a 1k demo using css

yesterday took place the second edition of demojs, the web-only
demoparty.
being part of the organizing team but not being a demoscener myself, i
was really eager to do something for the demo contest.
the problem is i failed in preparing a real demo before the demoparty so
let's just say i didn't really have any hope of starting demos this
year.

hopefully, i stood up all night (you know being part of the organization
team etc) so i started hacking near by my friend
[@phillipeantoine](https://twitter.com/philippeantoine), who was
tinkering on his yet to be released canvas + css demo.
after a while, his experiment really started to make me think of a few
way to exploit css in demos and i started [this
demo](http://bobylito.me/wayofcss) which is a 1k demo.

with this article, i want to share with you what i learned from this
experiment. really, do not try this at ~~home~~ [work]{.underline} or
small kittens will die. all of this is for the purpose of science.

### markup generation

html being very verbose even for small stuff, the solution is to
generate it. that's why this demo uses some javascript.

the recipe :

1.  take a sentence
2.  split it and get an array
3.  for each element generate a dom element
4.  and add it to the body

in action :

```javascript
"hi demojs partiers and orga! thx 4 being awesome! css rulez! 1k is not much and yet enough. \\o/"
  .split(" ")
  .map(function (e) {
    a = d.createelement("p");
    a.innerhtml = e;
    d.body.appendchild(a);
  });
```

### delays for the win

having a bunch of dom element is not very useful, you might argue... but
there is this one little feature that makes the animation possible using
css : delays.

it gives to the css animation a pause after which it'll start. because
the index of the word in the array gives us its position in the
sentence, we can then apply a proportionnal delay. this will keep the
order and we can apply the same animation with this delay to make the
animation.

```javascript
a.style.webkitanimation="a 2s "[[]{.i++}]{.underline}"s 1";\
```

### the end

the demo use the animationend event of each animation to figure out when
the last word disapear.

```javascript
a.addeventlistener("webkitanimationend", function(){if(!---i)z.classname='s'})
```

### micro page

markup in demos should be stripped

usually a really classic webpage would look like this :

```html
<!doctype html\>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title> </title>
    <style></style>
  </head>
  <body></body>
  <script type="text/javascript"></script>
</html>
```

but really you can strip it, without being hurt, to something like this:

```html
<style></style>
<body>
  <script></script>
</body>
```

### id as variable name

in js, you can use directly the id of a dom element like a variable. we
can then do :

```javascript
z.classname = "s";
```

for a dom element named with 'z' as its id instead of doing so :

```javascript
document.getelementbyid("z").classname = "s";
```

### final word

the code is ugly, the demo is not very impressive but when looking back,
it does contain some stuff which are quite fun to use and combine.

---
slug: implementation-patterns-nextjs-react-typescript
title: Implementation patterns encourage clean code
teaser: Adopt patterns for organising code to encourage clean, maintainable, tested and understood code.
createdAt: "2019-11-09"
updatedAt: "2021-03-23"
cover:
  src: /images/articles/implementation-patterns-nextjs-react-typescript/cover.jpg
  credit:
    attribution: Photo by
    author: Philipp Mandler
    link: https://unsplash.com/@philay?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
---

# {% $markdoc.frontmatter.title %} {% #title %}

{% cover /%}

We write code. We tend work our code until it works. For good developers, that is the half way mark.

We write code. We tend work our code until it works. For good developers, that is the half way mark.

We want  easy to understand code. Code that is unsurprising and uncomplicated. We want maintainability, where things are close by and easy to find. We want to be able to re-organise our code and be confident everything will not break.

We want easy to test code. Code that we trust. Code that we know is performing the way we designed it.

I adopt patterns for organising functions in JavaScript to encourage clean, maintainable code, tested and easily understood code.

## Distance is the enemy of clean code

Distance is the enemy of clean code. It is common to have a src directory for your source code and a tests directory to contain all your tests. As your application grows, the distance between the functions you write, and where they are tested also grows. You start to limit the creation of folders for your src because you have to mirror that structure in tests so that you can find them. It is not uncommon for test files to grow large testing multiple things and to bloat out source files in a similar manner.

This is death by a thousand cuts. Over time, the more your product evolves, the more developmental velocity slows. And you will never realise that this small issue is a contributing factor.

Even worse than slowing your velocity is that your quality will begin to degrade resulting in more time fixing bugs and adding more strangling processes to try to remedy the situation.

*Rule 1. Keep your tests with your code.*

In a JavaScript ecosystem using Jest, create a folder for your function and locate your tests in a sub folder called __tests__.

People hate that name “__tests__”.  I love it. It rises to the top of your folder and sticks out like no mans business. It reminds you, tests first.

## Be boring. Keep it just like the docs.

The *__tests__* naming convention is a good one. Do not change it, keep the default name.

Adopting the default means not configuring your setup to personal taste. It is just one less thing you need to own. You want to own less things!

The best benefit is that new people are onboarded in rapid time. They will have seen it before and instantly feel comfortable with how your application is structured and know where to expect things.

The people considerations outweigh all other aspects. Be boring and look “just like the docs”.

*Rule 2: Be “just like the docs”*

## Name things obviously and simply. Brainstorm better names.

I agonise over good names for things. It is important. Names inform you of purpose. They inform you of what the thing contains and they educate the reader about what to expect.

I am not speaking just of names in code, but also in file names and folders. I recommend the practice of naming files according to what they contain, even maintaining case sensitivity.

If you adopt this pattern, you will enforce yourself to one conclusion: my file should contain my function that should do one thing and one thing only. I mean seriously, what do you call a file that does all the things?

*Rule 3: Name things clearly and simply*

## Do only one thing

Beautiful code is simple, unremarkable code. There is a cleanliness to its structure. When you glance at it, you can instantly ingest its meaning. You cannot easily understand a very large file. You have to scroll and we know, distance is the enemy of clean code.

If we bring upon ourselves the idea that a function should do only one thing, we encourage easy to understand code. We encourage maintainability, robustness. We protect future project velocity.

So make your function in a file. Name the file according to what it contains. Add your test file close by and keep the naming convention.

You want to add another function? You know you can make more files right? And you know each file should have a matching test file.

*Rule 4: Do one thing and do it well*

## Coding is a process

I like to remind people that coding is a process. You don’t instantly arrive at the right solution. You often find yourself and your pair scrappily headed towards the first “false” finish line of the solution being working. You will probably have lots of poorly organised code, bad naming and tests that aren’t adding a lot of value. And that is OK. This is where clean code starts.

Start extracting out your functions until they do one thing and one thing only. Ensure that they do this thing well. Evaluate your tests. This is easy to do when your function is in one file, and your test is right next to it. It is not easy to hide poorly tested code in small files.

If you have a large test file, I guarantee you your function needs attention. I bet you will find that you function is doing too many things.

Now I know religious practitioners of TDD will say that there is a better process to developing software. The only problem is, not many people strictly practice the TDD methodology. The main reason is that they aren’t really sure what the solution will look like early on. They code for discovery. If you are one of those awesome TDD practitioners, I tip my hat to you.

For me, there are lots of techniques that can help improve my quality. Pairing, linters, tooling to name a few. Developing quality clean code is a process and implementation patterns are but one technique that improves my chances for success.

So let’s look at what an example application might look like using an implementation pattern that adheres to these rules.


## An example with React, TypeScript, NextJS

I have a GitHub repo where you can look at what such a structure might look like within the context.

It is deployed to [implementation-patterns.vercel.app](https://implementation-patterns.vercel.app/) and the source is available on [GitHub](https://github.com/craigs/implementation-patterns)

## Now, automate it!

I hate making folder structures repetitively. Any repetition you discover in your process, you can probably find a way to automate.

In the sample project, I used a VS Code plugin called Folder Templates. Right click, new templated folder and bang, my implementation pattern for a React component.

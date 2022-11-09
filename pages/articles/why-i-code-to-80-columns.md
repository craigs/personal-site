---
createdAt: "2019-11-09"
updatedAt: "2020-08-11"
slug: why-i-code-to-80-columns
title: I enjoy the discipline of 80 columns and 100 lines
teaser: I code to 80 columns and under 100 lines. At least I try to.
cover:
  src: /images/articles/why-i-code-to-80-columns/cover.jpg
  credit:
    attribution: Photo by
    author: Ant Rozetsky
    link: https://unsplash.com/@rozetsky?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText
---

# {% $markdoc.frontmatter.title %} {% #title %}

{% cover /%}

I code to 80 columns and under 100 lines.

Throughout my career, I am always confronted by colleagues with reasons on why this is wrong.

- Our monitors are greater than 80 columns now.
- We no longer print out our source code on dot matrix printers.
- I prefer 120 columns.
- I wish to use my ultra wide screen monitor to see all the code.

All these objections miss the point. It is about enforcing a discipline on ourselves. A discipline of simplicity when naming and organising our code.

If you can’t keep to 80 columns, you’re probably doing it wrong. Your variables may be verbose. I am sure that better words await you.

Are your control structures complicated? Can you better extract logic to their own functions and their own separate files? It will make testing easier.

80 columns will give you hints that you are probably not as disciplined as you think you are.

When combined with trying to keep yourself under 100 lines of code per file, the constraints you apply to yourself force you to confront a truth - you are bad at naming and structuring your code. Don't worry, we all are.

I love this discipline. It allows me the opportunity to take a longer look at what I have created and challenge myself, “can I do better?”. Of course I can. The first cut of code is more like a draft and allowing myself the opportunity to critique my work produces better results.

Ask yourself, can your functions live in multiple files? Would this make it easier to test? Why am I breaking 80 columns and what can I do about it? Is it just a long string that should be in an external file? Is it a ternary return value that should be a guard clause?

Without the simple discipline of fitting my code in to a window of 80 columns with 100 lines, I often never asked the hard questions that converted my draft code in to polished work.

I recommend the practice. Stick at it for a while and see how your code changes. Don’t give up when you cannot see a way out of breaking 80 columns, there is always a way to maintain the discipline.

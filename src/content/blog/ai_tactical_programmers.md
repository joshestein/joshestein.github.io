---
title: "AI tactical programming"
description: "I didn't have time to write you a shorter letter"
date: "27 Mar 2026"
---

John Ousterhout, in his book "A Philosophy of Software Design", differentiates
between tactical and strategic programmers.

Tactical programmers are those who hammer out features and bug fixes as quickly
as possible. Their contributions seem immense - they write so many lines of
code! They ship so many features! They are trailblazers, leaving us staring in
inadequacy at their dust. Before the rise of LLMs they seemed to be able to
conjure up fixes faster than PMs could create tickets.

While some are impressed by the speed at which tactical programmers work, it is
mostly a cause for concern. One of the core ideals you should strive for is
maintainability. Tactical programming leads to incremental pieces of complexity
accumulating into a codebase that is difficult to maintain.

The more you encourage tactical programming, the more your system becomes harder
to change. Not giving forethought to design, or how your approach is adding
complexity, or the long-term implications of your changes will eventually lead
to pain.

Strategic programmers don't only focus on the current task at hand. Rather, they
focus on the long-term structure and complexity of the system. They also fix
things and ship features! But they do this while reducing complexity and
improving the design of the system. They put thought into alternative
approaches, different fixes, and the long-term costs of their implementation.
They consider part of their job to be investing in the future of the system.

"I'm sorry, I didn't have time to write you a shorter letter." It's easy to
write a long one, filled with cruft. Cutting away and figuring out the important
parts - that's something that takes effort and intention.

Working as a tactical programmer is easy than ever. You tell an LLM "this is the
problem, generate a solution". Vast amounts of LOCs are generated in a few
seconds. At face value the solution works. But at what future cost? How
maintainable is it? How easy to understand? Will the next engineer who has to
work on the code be able to easily modify it? Will another LLM need to spit out
significant tokens to explain and update the future fixes?

Real codebases aren't necessarily better! After all, there are plenty of human
tactical programmers! But the rate at which these changes are being made is
increasing, and the future complexity we will face as a result of this is very
large.

On the other hand, it's also easier than ever to be a strategic programmer. LLMs
can help you consider alternative approaches and think about the pros/cons of an
implementation. They can create multiple fixes, weighing them against each
other. But they need help doing this, and sometimes you need to prompt to
consider alternatives. You need to guide them to think about writing code as
investing in the future.

As always, we have a choice: build like lightning, and face long-term slowdown.
Or build thoughtfully, creating well-designed and maintainable implementations.
LLMs are biased to the former. But with guidance we can use them to achieve the
latter.


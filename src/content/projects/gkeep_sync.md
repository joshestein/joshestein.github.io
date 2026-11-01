---
title: "GKeep Raycast Sync"
description: "Fast notes synced to my phone"
date: "Nov 2026"
---

I love Raycast for many reasons. One reason is for its note-taking. I love how
unobtrusive it is, and how I don't have to switch apps to jot an idea down. I
can be working on something else, have an idea pop into my mind, and quickly get
it down.

One problem I've been struggling with for a while is that I take notes in
multiple different ways, for different things. I use Obsidian for long-form
writing. I use Google Keep on my phone (I have an Android, it's just been a
'safe' choice for a while). I use Raycast for quick, distraction-free notes.

I thought for some time about migrating everything to one central location. But
I'm actually quite fine with splitting my long-form vs short-form writing. The
problem I've been facing is that I don't have a way to sync my Raycast notes to
my phone.

So I built a wrapper around the Google Keep API that keeps a copy of my Google
notes on my computer. Then I wrote a Raycast extension that uses this wrapper to
sync my notes to Google Keep.

Instead of using Raycast's built-in note-taking, I now use my extension to
create notes. These are then synced to Google Keep, and I can view them on my
phone.

The code lives here: https://github.com/joshestein/keep_sync

---
title: "Arghus"
description: "Defense against spam calls."
date: "Nov 2025"
---

I worked on this for [Apart Research's Defensive Acceleration
Hackathon](https://apartresearch.com/sprints/def-acc-hackathon-2025-11-21-to-2025-11-23).

The defense is against spam calls, with the thought being that AI voice cloning
is going to be used for sophisticated spam calls.

The thought is to use an automated voicemail that has access to 2FA secrets
shared between you and whoever you choose.

You can imagine a bot that has access to your Slack conversations with you and
your cofounder, 'Dave'. If someone calls you pretending to be Dave we can check
they are who they say they are by asking them a question based on these recent
conversations (or other secrets you may wish to setup in advance). Kind of like
those secret questions you have to setup for your bank, except these are
dynamically generated and between you and anyone else you choose.

You need to setup automated forwarding of unknown numbers. This is
straightforward with almost all carriers.

The unknown numbers are forwarded to a Twilio bot that hooks up to OpenAI's
Realtime API. The API is prompted to detect suspicious callers and verify their
identity using the 2FA system. There is a corresponding mobile app that streams
the responses to the end user. If the unknown caller passes verification the
call is patched through to your actual mobile number.

It lives here: https://github.com/joshestein/arghus


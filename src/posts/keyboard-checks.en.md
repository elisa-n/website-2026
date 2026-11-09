---
title: Five keyboard checks you can do in ten minutes
date: 2026-08-14
summary: You don’t need special tools to find some of the most common accessibility problems. Put your mouse away and try these.
---

Many people navigate the web without a mouse: people who use switch devices, voice control or screen readers, and people with tremors or repetitive strain injuries. If your site doesn’t work with a keyboard, it doesn’t work for them.

Here’s a quick routine I run at the start of every audit. Open your site, put the mouse out of reach, and work through these in order.

## 1. Can you see where you are?

Press Tab a few times. Every link, button and form field should show a clear focus indicator as you reach it. If focus disappears, someone has probably removed the browser outline without replacing it.

## 2. Does the order make sense?

Focus should move through the page in the same order you’d read it. If it jumps from the header to the footer and back to the middle, the underlying HTML order doesn’t match the visual layout.

## 3. Can you skip the navigation?

The first Tab on a page should reveal a “Skip to content” link. Without one, keyboard users have to step through every menu item on every page.

## 4. Does everything work?

Try opening menus, accordions and dialogs with Enter and Space. Custom controls built from `div` elements often only respond to clicks.

## 5. Can you get out again?

Open a dialog or a dropdown and press Escape. You should be able to close it, and focus should go back to the control that opened it.

If your site passes all five, that’s a good start. It isn’t a full audit, but it will catch a surprising share of real problems.

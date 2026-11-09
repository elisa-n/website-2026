---
title: Writing alt text that actually helps
date: 2026-05-12
summary: Good alt text isn’t a description of the image. It’s a description of why the image is there.
---

Alt text is read aloud by screen readers in place of an image. It’s also shown when an image fails to load. Most teams know they should add it, but far fewer know what to write.

## Start with the purpose

Ask yourself: if I removed this image, what would the reader miss? The answer is your alt text.

The same photo can need different alt text in different places. A picture of a team at a whiteboard might be “Our design team running a usability workshop” on a careers page, and nothing at all on a page where it’s purely decorative.

## Keep it short

Aim for a sentence or less. There’s no need to start with “Image of” or “Picture of”, because screen readers already announce that it’s an image.

## Decorative images need empty alt text

If an image adds nothing, give it an empty `alt=""` attribute. Leaving the attribute out entirely is not the same thing: some screen readers will read out the file name instead.

## Charts and diagrams need more

For complex images, give a short alt text that says what the image is, and put the full details, such as the data behind a chart, in the page itself where everyone can read it.

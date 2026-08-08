# Content guide (for non-technical editors)

This explains how to update text, times, and images on the site — no coding
and no software to install. Everything happens on github.com in your
browser. About 1–2 minutes after you save a change, the live site updates
automatically.

The repo is: `github.com/lamainfotech/bethesdabaptistktm.com`

## The golden rule

Every editable file is a small `.md` (Markdown) file. At the top, between
two lines of dashes (`---`), there are `field: value` lines — that's
structured data, edit it carefully. Below the second `---` is plain text —
edit that freely. Don't remove the `---` lines or the field names, just
change the values after the colons.

## How to edit any file

1. Go to the repo on GitHub and open the file you want to change (use the
   list below to find the right one).
2. Click the **pencil icon** (✏️) in the top-right of the file view — this
   opens the edit box.
3. Make your change directly in the text box.
4. Scroll down to **"Commit changes"**. Leave "Commit directly to the
   `main` branch" selected, type a short sentence describing what you
   changed (e.g. "Update worship time"), and click **Commit changes**.
5. That's it — the site rebuilds itself and goes live within a minute or
   two. No further steps needed.

## Common tasks

### Update a service time or ministry info

Go to `src/content/ministries/` and open the file for that ministry
(`worship.md`, `discipleship.md`, `outreach.md`, or `children.md`). Example:

```
---
title: Saturday Worship
summary: Weekly gathering for worship, the preaching of God's Word, and fellowship as one body in Christ.
meetingTime: Saturdays, 10:00 AM
leader: Pastor Hari KC
placeholder: true
order: 1
---
```

- `title` — the ministry's name
- `summary` — the description shown on the page
- `meetingTime` — when it meets
- `leader` — who leads it
- `placeholder: true` — remove this line entirely once the info is
  confirmed real (it currently shows an "example" badge on the site)
- `order` — controls the display order (lower number = shown first)

### Add a new sermon

Go to `src/content/sermons/`, click **Add file → Create new file**, and
name it something short with dashes, e.g. `walking-in-faith.md`. Paste this
in, filling in your own values:

```
---
title: "Walking in Faith"
date: 2026-08-09
youtubeUrl: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
---
```

- `date` must be in `YYYY-MM-DD` format.
- `youtubeUrl` — paste the normal YouTube link (from the address bar or the
  Share button). Leave this line out entirely if there's no video yet.

Commit it the same way as above — it appears on the Sermons page
automatically, newest date first.

### Replace a photo

Go to `src/assets/images/`. Photos are named for where they're used
(`hero-kathmandu.jpg`, `about-kathmandu.jpg`, `ministry-worship.jpg`, etc.).

1. Open the file you want to replace, click the trash icon to delete it,
   and commit that.
2. Go back to the `src/assets/images/` folder, click **Add file → Upload
   files**, and upload the new photo — **it must have the exact same file
   name** (e.g. your new photo must also be named `hero-kathmandu.jpg`) so
   the page keeps pointing at it correctly.
3. Commit changes.

### Edit the Statement of Faith or Church Covenant

These live in `src/content/faith/en.md` and `src/content/covenant/en.md`
(Nepali versions are `ne.md` in the same folders). Edit the plain text below
the `---` block the same way as any other file.

### Edit general page text (About, Visit, Giving, Contact, Home)

These pages live in `src/pages/` (e.g. `src/pages/about/index.astro`,
`src/pages/giving/index.astro`). They look a bit more technical — mixed in
with the text you'll see `<p>`, `<div>`, `<a href="...">` etc. Only edit the
text between the tags, never the tags themselves (the words inside `< >`
brackets). If a page looks too unfamiliar to touch confidently, it's safer
to ask for help than to guess.

## If something breaks

If a commit accidentally breaks the site (the build fails), it's easy to
undo:

1. Go to the repo's **Commits** history.
2. Find the commit you just made, click the **···** menu next to it, and
   choose **Revert** (or ask for help — nothing is ever permanently lost,
   GitHub keeps the full history of every change).

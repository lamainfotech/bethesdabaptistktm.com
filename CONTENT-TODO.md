# Content still needed from the pastor

The site now has realistic example content and stock imagery throughout so
it reads as complete — but everything marked with an "Example — to be
confirmed" badge is not real yet. Send the real content whenever it's ready
and it can be swapped in directly.

## Facts marked as examples on the live site

- **Service times** — shown as Saturday Bible Study 9:00 AM, Saturday
  Worship 10:00 AM, Wednesday Prayer Meeting 6:00 PM (`src/pages/visit/`,
  `src/content/ministries/*.md` `meetingTime` field) — confirm or correct
- **Ministry leaders** — Pastor Hari KC is listed as Saturday Worship leader;
  other ministries say "To be announced" (`src/content/ministries/*.md`)
- **Sermons** — 4 example titles with no video attached yet, clearly marked
  as illustrative (`src/content/sermons/*.md`). Waiting on a real YouTube
  link from the pastor to embed the first actual sermon. **To add a real
  sermon**:
  create a new `.md` file in `src/content/sermons/` with
  `title`, `date` (YYYY-MM-DD), and `youtubeUrl` (a normal
  `youtube.com/watch?v=...` or `youtu.be/...` link) in the frontmatter —
  it will appear automatically on the Sermons page, newest first, with the
  video embedded
- **Pastor bio** — a one-line placeholder bio for Pastor Hari KC
  (`src/pages/about/`) — replace with his real bio and, ideally, a photo
- **Giving** — "Ways to Give" cards describe In Person / Bank Transfer
  (details TBD) / Online (coming soon) (`src/pages/giving/`) — needs real
  bank details or an eSewa/Khalti/other link

## Other outstanding items

- **Directions/map pin** — confirm the meeting location matches
  Dhumbarahi-4, Kathmandu, or provide the correct address
- **Real photos** — the site currently uses openly-licensed stock photos
  for illustration only (Kathmandu skyline, open Bible, generic ministry
  photos — see `src/assets/images/CREDITS.md`). None depict this church's
  actual building, pastor, or members. Replace with real photos when
  available, especially: the building/meeting space, Pastor Hari KC, and
  any ministry/event photos
- **Nepali translations** of the Statement of Faith, Church Covenant, and
  the About page story (`src/content/faith/ne.md`,
  `src/content/covenant/ne.md`, `src/pages/ne/about/`) — the original
  Nepali constitution document was typed in a legacy non-Unicode font and
  can't be reused as-is; it needs to be re-typed in Unicode Nepali
- **Logo / brand colors** — none were provided; the site currently uses a
  plain text wordmark and neutral colors
- **Contact** — the Contact page has address, phone, email, and a map only
  (no on-site form). Visitors reach out by phone or email directly.

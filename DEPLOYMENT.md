# Deployment guide (Cloudflare Pages)

This walks through putting the site live on `bethesdabaptistktm.com` using
Cloudflare Pages. No command line needed — everything happens in the
Cloudflare dashboard. You should already have been given access to the
Cloudflare account.

Every time someone pushes new content to the `main` branch on GitHub (see
`CONTENT-GUIDE.md`), Cloudflare rebuilds and republishes the site
automatically within a minute or two. You only need to do this setup once.

## 1. Create the Pages project

1. Log in at [dash.cloudflare.com](https://dash.cloudflare.com).
2. In the left sidebar, go to **Workers & Pages**.
3. Click **Create** → **Pages** → **Connect to Git**.
4. Choose the GitHub account/org (`lamainfotech`) and authorize Cloudflare
   to access it if asked, then pick the repo:
   `lamainfotech/bethesdabaptistktm.com`.
5. On the build settings screen, set:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   Cloudflare should auto-fill these once it detects Astro — just confirm
   they match.
6. Click **Save and Deploy**. The first build takes a couple of minutes.
   Watch the build log; it should end with a green "Success".

The repo already contains a `.node-version` file (currently set to `24`),
which Cloudflare reads automatically to pick the right Node.js version — you
don't need to set that manually. If a build ever fails with an error
mentioning an unsupported or old Node version, go to the project's
**Settings → Environment variables** and add `NODE_VERSION` = `24` there as
a backup.

You'll get a working URL like `bethesdabaptistktm.pages.dev` — check that
it loads before moving to the domain step.

## 2. Connect the domain

1. Open the Pages project you just created → **Custom domains** tab.
2. Click **Set up a custom domain**, enter `bethesdabaptistktm.com`, and
   follow the prompt (it will ask for `www.bethesdabaptistktm.com` too —
   add that as a second custom domain the same way).
3. What happens next depends on where the domain's DNS is managed
   (registered via Yoho Cloud):
   - **If the domain is already added to this Cloudflare account** (under
     **Websites**), Cloudflare adds the DNS records for you automatically —
     just click through and it's done.
   - **If it isn't on Cloudflare yet**, Cloudflare will show nameservers
     (e.g. `xxx.ns.cloudflare.com`) to set at the domain registrar (Yoho
     Cloud's control panel), or a CNAME record to add if you're keeping DNS
     elsewhere. Follow whichever option Cloudflare shows on screen.
4. DNS changes can take anywhere from a few minutes to a few hours to take
   effect. The custom domain will show a green "Active" status once it's
   working.

## Troubleshooting

- **Build fails**: open the failed deployment and read the build log — the
  error is usually near the bottom. Most common cause is a typo in a
  content file pushed via the GitHub web editor (see `CONTENT-GUIDE.md`).
- **Domain stuck on "Pending"**: double check the nameservers/CNAME match
  exactly what Cloudflare asked for, and give it a few hours for DNS to
  propagate.
- **Need to redeploy manually**: Pages project → **Deployments** tab →
  **Retry deployment** on the latest one, or just push any small change to
  `main` on GitHub to trigger a new build.

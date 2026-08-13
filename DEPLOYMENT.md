# Deployment guide (Cloudflare Pages)

The deployment automation is **already set up** in this repo
(`.github/workflows/deploy.yml`). Every push to the `main` branch on GitHub
automatically builds the site and publishes it to Cloudflare Pages — nothing
to configure in Astro or Cloudflare's build settings.

There are only two things left to do, both one-time: give this GitHub repo
your Cloudflare credentials, and connect the domain. No command line needed
for either.

## 1. Add the two Cloudflare secrets to GitHub

The automated deploy needs two values from Cloudflare, saved as GitHub
"secrets" (private values only the automation can read).

**Get the values from Cloudflare:**

1. Log in at [dash.cloudflare.com](https://dash.cloudflare.com) (you should
   already have access).
2. **Account ID**: on the Cloudflare dashboard's Overview page, the
   Account ID is shown in the right-hand sidebar. Copy it.
3. **API Token**: click your profile icon (top right) → **My Profile** →
   **API Tokens** → **Create Token** → find the **"Edit Cloudflare
   Workers"** template → **Use template** → **Continue to summary** →
   **Create Token**. Copy the token shown — it's only displayed once.

**Add them to GitHub:**

1. Go to `github.com/lamainfotech/bethesdabaptistktm.com` → **Settings**
   tab → **Secrets and variables** → **Actions**.
2. Click **New repository secret**.
   - Name: `CLOUDFLARE_ACCOUNT_ID`, Value: the Account ID you copied →
     **Add secret**.
3. Click **New repository secret** again.
   - Name: `CLOUDFLARE_API_TOKEN`, Value: the API token you copied →
     **Add secret**.

That's it. As soon as both are saved, go to the **Actions** tab of the
repo — if a workflow run is sitting there failed (red ✗) from before the
secrets were added, click into it and click **Re-run all jobs**. Otherwise
just push any change and it'll deploy on its own. A successful run shows a
green ✓, and creates the Cloudflare Pages project automatically the first
time (named `bethesdabaptistktm`) — no need to create it by hand.

You can check it's live at `bethesdabaptistktm.pages.dev` once the run
finishes.

## 2. Connect the domain

1. In Cloudflare, go to **Workers & Pages** → the `bethesdabaptistktm`
   project (it now exists after step 1) → **Custom domains** tab.
2. Click **Set up a custom domain**, enter `bethesdabaptistktm.com` →
   follow the prompts. Repeat for `www.bethesdabaptistktm.com`.
3. What happens next depends on where the domain's DNS lives (registered
   via Yoho Cloud):
   - **If the domain is already added to this Cloudflare account** (under
     **Websites** in the sidebar), Cloudflare wires up the DNS records for
     you automatically — just click through.
   - **If it isn't on Cloudflare yet**, Cloudflare will show you either
     nameservers to set at the registrar (Yoho Cloud's control panel), or a
     CNAME record to add if DNS is staying elsewhere. Follow whichever
     option it shows on screen.
4. DNS changes can take a few minutes to a few hours. The custom domain
   shows a green "Active" status once it's working.

## Troubleshooting

- **GitHub Actions run fails**: click into the failed run (repo → **Actions**
  tab) and read the red step's log. If it says something about
  `CLOUDFLARE_API_TOKEN`, the secrets from step 1 aren't saved correctly —
  double check the exact names `CLOUDFLARE_ACCOUNT_ID` and
  `CLOUDFLARE_API_TOKEN`.
- **Domain stuck on "Pending"**: confirm the nameservers/CNAME match exactly
  what Cloudflare asked for, and give DNS a few hours to propagate.
- **Want to trigger a redeploy without changing content**: repo → **Actions**
  tab → select the workflow → **Run workflow** (or push any small change to
  `main`).

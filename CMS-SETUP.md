# Setup Guide: AJD Law Firm CMS

## What Was Done

1. **Replaced old static `artikel.html`** → Now redirects to CMS version
2. **Updated navigation** → All pages link to `cms/artikel.html`
3. **Created `/static/admin/`** → Sveltia CMS admin panel location
4. **Removed old static articles** → Delete `articles/*.html` files
5. **Updated `baca.html`** → Now works both locally AND online (GitHub API fallback)

---

## How Client Login Will Work

### Option A: GitHub Login (Recommended)

The client logs in with **their own GitHub account** that has been given access to the repository.

1. Go to your repo: `github.com/najibnet/ajdlawfirmpartners`
2. Go to **Settings → Collaborators** (or **Settings → Access**)
3. Add client's GitHub username with **Write** access
4. Client can now login at `yourdomain.com/admin/` with their GitHub account

### Option B: Email/Password Login via Netlify

1. Deploy to Netlify (free)
2. Enable **Netlify Identity** in site settings
3. Invite client by email
4. Client logs in at `yourdomain.com/admin/` with email/password

---

## File Structure

```
ajdlawfirmpartners/
├── static/
│   └── admin/
│       ├── config.yml     ← Sveltia CMS configuration
│       └── index.html     ← Admin panel (login page)
├── cms/
│   ├── artikel.html       ← Article listing (auto-loads from GitHub)
│   ├── articles/
│   │   ├── baca.html      ← Single article reader
│   │   └── data/          ← Markdown files (your articles)
│   │       ├── artikel-1.md
│   │       ├── artikel-2.md
│   │       └── artikel-3.md
│   └── admin/             ← Old CMS location (can delete later)
├── assets/
│   └── articles/         ← Article images
└── index.html            ← Homepage
```

---

## Testing Locally

```bash
pnpm dev
```

Then visit:
- **Articles**: http://localhost:3000/cms/artikel.html
- **Admin Panel**: http://localhost:3000/admin/

---

## Testing Online (After Push)

After pushing to GitHub with GitHub Pages enabled:

- **Articles**: `https://najibnet.github.io/ajdlawfirmpartners/cms/artikel.html`
- **Admin Panel**: `https://najibnet.github.io/ajdlawfirmpartners/admin/`

---

## Next Steps

1. **Push changes to GitHub:**
   ```bash
   git add .
   git commit -m "Setup CMS with Sveltia"
   git push
   ```

2. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Select "main" branch and "/ (root)" folder
   - Save

3. **Test the CMS:**
   - Open `/admin/` page
   - Login with GitHub account
   - Create/edit/delete articles

4. **Give client access:**
   - Add their GitHub username to repo collaborators
   - Or set up Netlify Identity for email/password login

---

## Adding New Article Fields

To add new fields (e.g., author, tags), edit `static/admin/config.yml`:

```yaml
fields:
  - { label: "Judul", name: "title", widget: "string" }
  - { label: "Penulis", name: "author", widget: "string" }  # NEW
  - { label: "Tags", name: "tags", widget: "list" }         # NEW
  # ... rest of fields
```

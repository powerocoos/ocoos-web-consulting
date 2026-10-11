# Ocoos Web Consulting: site code

Styles and scripts for the Ocoos Web Consulting Squarespace site. The site loads them from this repo, so a design change is a file edit here, not a paste into the Squarespace editor.

## Files

- `ocoos.css`: site-wide styles for the footer, the blog list and blog posts.
- `ocoos.js`: blog list banner subtitle, reading progress bar and end-of-post call to action. Each block checks the page type before it runs.

## How the site loads them

Squarespace > Settings > Advanced > Code Injection > Header holds one small loader script. It adds a stylesheet link and a script tag that point at this repo through jsDelivr, pinned to one commit. A push to this repo changes nothing on the live site until the pinned commit in the loader is updated.

## Preview a change before it goes live

Add `?ocdev=1` to any page URL. For that browser session the loader uses the latest `main` branch instead of the pinned commit.

- `?ocdev=1`: latest `main`.
- `?ocdev=<branch or commit>`: that specific version.
- `?ocdev=0`: back to the pinned version.

jsDelivr can cache `main` for a few hours. A commit hash is always fresh. To clear the cache, use the jsDelivr purge tool.

## Releasing a change

1. Edit the file here and commit.
2. Check it on the live site with `?ocdev=1` (or `?ocdev=<commit>`).
3. Replace the commit hash in the loader in Code Injection > Header with the new commit.
4. Roll back by putting the previous commit hash back.

## What stays in Squarespace

Page content stays in the page as plain HTML (headings, copy, links, the footer markup), so Google indexes it. Only CSS and JavaScript live here. Code injection does not run in the Squarespace editor, so check styled pages on the live site.

## Using this pattern for other clients

Public repos suit our own site. For client sites, use a private repo in the `ocoos-client-sites` organization and serve the files from Cloudflare instead of jsDelivr, since jsDelivr only serves public repos.

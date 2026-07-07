# Star catalog

Search GitHub and browse the most-starred repositories for any topic. Built as a single static HTML file — no build step, no backend, just a page that calls the public [GitHub Search API](https://docs.github.com/en/rest/search) directly from the browser.

**Live app:** https://swarnakishore.github.io/github-search-api/

## Running locally

No install needed. Just open `docs/index.html` in a browser, or serve it:

```bash
cd docs
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

This repo deploys via GitHub Pages from the `docs/` folder on `master`. Any push to `master` that touches `docs/index.html` goes live automatically — no CI step required.

## Notes

GitHub's public search API is rate-limited to 10 requests/minute for unauthenticated requests. If you hit the limit, wait a minute and search again.

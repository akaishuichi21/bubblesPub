# Bubbles — GitHub Pages demo

A standalone copy of the atmospheric memory-bubble frontend, including the current reflections, growing-bubble pushing, music and original splash effect. The camera-water wave has been reverted.

## Publish

1. Create a public GitHub repository with the default branch named `main`.
2. Copy **the contents of this folder** into the repository root. Include the hidden `.github` folder and `.gitignore`. Do not put the entire folder inside another folder in the repository.
3. In the repository, open **Settings → Pages** and choose **GitHub Actions** as the source.
4. Commit and push the files to `main`. If the initial workflow already ran before you enabled Pages, open **Actions → Publish Bubbles to GitHub Pages → Run workflow**.
5. When deployment succeeds, the Pages URL appears under **Settings → Pages** and in the deployment job.

The usual address is `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`. You can use any repository name: asset paths are relative.

GitHub's workflow documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## Already-built website

`docs/` contains a ready-built copy of the website, including all required assets. The workflow rebuilds it from source for every push.

If you prefer hosting with no build workflow, omit `.github/workflows/pages.yml`, upload `docs/`, and select **Settings → Pages → Deploy from a branch → main → /docs**. Keep the contents of `docs/` together, including `.nojekyll`.

## Local editing

Use Node.js 22.12 or newer in the Node 22 release line.

```sh
npm ci
npm run dev
```

```sh
npm test
npm run build
npm run preview
```

The build writes to `docs/`. Commit source changes and push to update the hosted demo.

## What this demo does

- Hold empty space to grow a memory bubble, up to the 280 px viewport-dependent limit.
- Growing bubbles push existing memories; memories float above post content.
- Tap a memory to write inside it or change its image. Escape exits writing.
- Hold a bubble to pop it. Use the restore control to bring it back.
- The music control plays the bundled ambient preview after a click.

This is a static frontend demo. Memories, messages, roles and server settings are simulated in the browser and reset on reload. There is no real account system, backend connection or durable storage. Uploaded images stay in the current browser session and are not uploaded to a server. Frontend role checks are presentation logic, not server-enforced access control.

The package contains frontend source, demo assets, tests, build configuration and deployment instructions. It excludes the backend, local backups, credentials and Git history. See `ASSET-CREDITS.md` for the bundled media credits.

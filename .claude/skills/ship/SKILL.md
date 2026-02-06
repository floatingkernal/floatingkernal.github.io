---
name: ship
description: Stage, commit, push, and deploy the portfolio to GitHub Pages. Use when the user says "lets push this", "ship it", "deploy", or similar.
disable-model-invocation: true
allowed-tools: Bash(git *), Bash(npm run *)
argument-hint: [commit message]
---

Ship the current changes to production (salmansharif.me):

1. Show what's changed:
   - Run `git status` and `git diff --stat` to summarize changes.

2. Stage all changes:
   - Run `git add -A` to stage everything.

3. Commit with a descriptive message:
   - If the user provided $ARGUMENTS, use that as the commit message.
   - Otherwise, analyze the staged changes and write a concise commit message summarizing what changed.
   - Always append the co-author trailer: `Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>`

4. Push to the source branch:
   - Run `git push origin react-source`

5. Build and deploy:
   - Run `npm run deploy` which builds and publishes to the `gh-pages` branch.

6. Confirm success:
   - Report that the site is live at https://salmansharif.me

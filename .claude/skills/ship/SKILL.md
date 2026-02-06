---
name: ship
description: Stage, commit, push, and deploy the portfolio to GitHub Pages. Use when the user says "lets push this", "ship it", "deploy", or similar.
disable-model-invocation: true
allowed-tools: Bash(git *), Bash(npm run *), Bash(gh api *)
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

6. Verify deployment on GitHub:
   - Run `gh api repos/floatingkernal/floatingkernal.github.io/pages --jq '.status'` and confirm it says "built".
   - Run `gh api "repos/floatingkernal/floatingkernal.github.io/deployments?per_page=1" --jq '.[0].id'` to get the latest deployment ID.
   - Run `gh api "repos/floatingkernal/floatingkernal.github.io/deployments/<DEPLOYMENT_ID>/statuses" --jq '.[0].state'` (substituting the ID) and confirm it says "success".
   - If the state is not "success", wait 10 seconds and check again (up to 3 retries).

7. Confirm success:
   - Report the deployment status and that the site is live at https://salmansharif.me

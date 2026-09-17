# Md. Basim Al Zabir Shammo — Research Portfolio

সম্পূর্ণ তৈরি static website। কোনো installation, coding, API key বা build command দরকার নেই।

## আগে নিজের কম্পিউটারে দেখুন
ZIP → Extract All → index.html ফাইলটি double-click করুন।

## GitHub Pages-এ চালু করুন
1. GitHub-এ sign in করে নতুন **Public** repository তৈরি করুন। `portfolio` নাম দিতে পারেন।
2. ZIP **Extract All** করুন। GitHub নিজে ZIP extract করে না।
3. Repository → **Add file → Upload files** (খালি repository-তে “uploading an existing file”)।
4. Extract করা folder-এর **ভেতরের সব files এবং assets folder একসঙ্গে** drag-and-drop করুন। বাইরের folder অথবা ZIP upload করবেন না। `index.html`, `styles.css`, `script.js`, `assets` repository-র প্রথম level-এ থাকতে হবে।
5. **Commit changes** চাপুন।
6. **Settings → Pages → Source: Deploy from a branch → Branch: main → /(root) → Save**। Branch-এর নাম অন্য হলে সেই branch নির্বাচন করুন।
7. Deployment শেষ হলে একই Pages screen-এ website-এর link পাওয়া যাবে। সাধারণত কয়েক মিনিট লাগতে পারে।

আপনার GitHub username বা repository name HTML-এ বসাতে হবে না। সব local path relative; project site এবং username.github.io দুটোতেই কাজ করবে।

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Included
- About, research projects, nine papers/manuscripts, experience, education, technical skills, service, honors, certifications, contact.
- Original CV as a downloadable PDF and portrait extracted from that CV.
- Scholar, ORCID, LinkedIn, paper and credential links.
- Responsive mobile menu, keyboard navigation, reduced-motion support.
- No external fonts, trackers, analytics or runtime dependencies.

## Content notes
Primary source: the supplied (CV).pdf. Reference direction: https://sites.google.com/view/mahbubmorshedhridoy/home
LinkedIn URL was accessed and searched, but direct access returned a restriction; only limited public search information was available. This is not a complete LinkedIn export. The substantive research record here follows the CV; it does not claim exhaustive LinkedIn coverage.
The two manuscripts retain “Revision submitted” and “Under review”; they are not presented as accepted publications. Journal quartile labels were omitted because rankings change by year/category.
Authors are reproduced from the CV. Publisher records may contain updated or expanded author lists; use the linked paper for the authoritative published citation.
The visible CV email is al.zabir.shammo@gmail.com. Its embedded email hyperlink pointed to a different institutional address; the website uses the visible Gmail address consistently. The original downloadable PDF remains unchanged.
External publisher/credential links are taken from the CV and may require publisher access or permission from their owners. Local asset paths, section anchors and JavaScript syntax were checked. Responsive CSS is included, but visual browser QA could not be completed: the available browser blocked local-file previews and a local browser installation was unavailable.
Content assembled September 2026. No invented project repositories, publication metrics or degree grades were added.

## Files
index.html — complete content; works without JavaScript.
styles.css — responsive design.
script.js — mobile menu and active navigation.
assets/portrait.jpg — original portrait.
assets/Md-Basim-Al-Zabir-Shammo-CV.pdf — original CV.
assets/favicon.svg — site icon.
.nojekyll — optional static hosting marker (site also works if browser upload omits this hidden file).

No GitHub Actions workflow or package installation is required. Updating site files and committing changes updates the published site automatically after deployment.

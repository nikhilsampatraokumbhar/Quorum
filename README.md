# Quorum — deploy and submit

## Files

| File | What it is |
|---|---|
| `index.html` | The prototype. Single file. |
| `data.js` | The fabricated dataset. Keep it next to index.html. |
| `DECISIONS.md` | The one-page note they asked for. Read this before recording. |
| `BUILD.md` | Full build document. This is the "document detailing what you built" deliverable. |
| `DEMO-SCRIPT.md` | Your script for the Loom. |

---

## Deploy in 2 minutes

**Netlify Drop, easiest:**
1. Go to app.netlify.com/drop
2. Drag the whole folder in
3. You get a live URL immediately

**Or Vercel:** `npx vercel --prod` from inside the folder.

**Or GitHub Pages:** push both files to a repo, Settings → Pages → deploy from main.

---

## Before you record

**Get an Anthropic API key** from console.anthropic.com. You need one with credit on it — the whole run is maybe 8 to 10 calls, so a couple of dollars covers it.

**Test the full flow once**, end to end, before recording. Extraction takes 30 to 60 seconds across five vendors, so know how long you'll be talking over it.

**Two options for the key:**
- Paste it in the header field at demo time. Cleaner, nothing committed.
- Or hardcode it before deploying: in `index.html`, change `let KEY = '';` to your key. Faster on camera. If you do this, rotate the key after they've reviewed it.

I'd paste it live. It takes four seconds and you can say the key is never stored, which is a small point in your favour.

---

## Submission checklist

They asked for four things:

- [ ] **Recorded video** — Loom, 8 to 10 min, script is in DEMO-SCRIPT.md
- [ ] **Live link to your build** — the Netlify/Vercel URL
- [ ] **Document detailing what you built** — send BUILD.md, or export it to PDF
- [ ] **Link where the build is hosted** — same URL, plus the repo if you push one

And send `DECISIONS.md` too. They specifically asked for "a one-page note on what you decided, and what you deliberately left out," which is what that file is.

---

## The email back

Keep it short:

> Hi,
>
> Submission attached and linked.
>
> Live build: [url]
> Walkthrough: [loom url]
> Build document and decisions note: attached
>
> One thing worth flagging before you look: there's no offline fallback anywhere in this. The brief said the AI loops must be real, so if the API key is missing the product tells you it failed rather than showing canned output. You'll need to paste a key in the header to run it, or I can walk you through it live.
>
> The decisions note covers what I deliberately left out and where I think the more interesting problem actually sits.
>
> Nikhil

---

## Known limits, own them rather than hide them

- Email sending and receiving is stubbed, as the brief permitted
- The angled photo is represented as degraded OCR output rather than a real image pipeline
- No auth, no persistence, no multi-tenancy
- Exchange rate is a constant, not a live feed
- Extraction quality depends on the model; run it twice and low-confidence fields may vary, which is itself a finding worth mentioning

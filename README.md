# Quorum

RFx to award decision without the spreadsheet. Vendors reply in any format; the model extracts, the code computes.

## Run it

Open the live link, paste an Anthropic API key into the field in the header, and click through the flow. The key is held in memory for the session only. It is never stored, logged, or sent anywhere except to the Anthropic API.

Extraction runs live against five vendor responses and takes 30 to 60 seconds. There is no cached result behind it.

## What's here

| File | What it is |
|------|-----------|
| `index.html` | The prototype. Single file, no build step. |
| `data.js` | The vendor response set the prototype reads from. |
| `BUILD.md` | Full write-up: flow, architecture, extraction contract, normalisation rules, and where this goes next. |
| `DECISIONS.md` | One page on what was decided and what was deliberately left out. |

Start with BUILD.md.

## Scope

Built in 48 hours as an assignment. Email send and receive is stubbed, the scanned response is represented as degraded OCR text rather than run through a real image pipeline, and exchange rates are a fixed constant. Extraction quality depends on the model, so low-confidence fields are surfaced rather than hidden. DECISIONS.md covers the reasoning on each of these.

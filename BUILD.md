# Quorum — build document
**Aerchain take-home · Kill the Quote Spreadsheet**
Nikhil Kumbhar

---

## 1 · The week being deleted

A category buyer needs 30 line items of corrugated packaging. They email five vendors. Nine days later they have an Excel that ignored the template, a PDF with the discount in a footnote, a Word doc with prices written as sentences, a photo of a rate card taken at an angle, and an email that says "₹42/kg for the 5-ply, rest same as last year."

Three days go into retyping. Then the VP asks one question and the fourth day goes too.

**Quorum** replaces those four days.

---

## 2 · The flow

**1 · Draft** — buyer describes the need in plain language, co-pilot drafts scope, line items, questionnaire, terms and award criteria. Live model call.

**2 · Send** — goes to five vendors. Plumbing stubbed, as permitted.

**3 · Responses** — five formats arrive over nine days. Nobody uses the template.

**4 · Extract** — one model call per vendor. Returns structured fields plus a confidence state per line and an explicit list of what it could not determine.

**5 · Normalise** — currency and unit conversion, in code. Every step is recorded and shown.

**6 · Compare** — one table. Same lines, same unit, same currency. Every cell carries its provenance.

**7 · Ask** — natural language over the whole comparison. Model produces a plan, code executes it.

**8 · Award** — eligibility, open items, and a deliberate refusal to name a winner.

---

## 3 · Architecture

```
Vendor response (any format)
        │
        ▼
┌───────────────────────┐
│  EXTRACTION           │  ← model
│  structured fields    │
│  + confidence/field   │
│  + evidence/field     │
│  + unresolvable list  │
└───────────┬───────────┘
            │  raw values only. no conversion.
            ▼
┌───────────────────────┐
│  NORMALISATION        │  ← code
│  USD → INR            │
│  per box → per 100    │
│  per kg → refused     │
│  audit trail per cell │
└───────────┬───────────┘
            ▼
┌───────────────────────┐
│  COMPARISON TABLE     │  ← code
└───────────┬───────────┘
            │
   question ▼
┌───────────────────────┐
│  PLANNER              │  ← model
│  intent → operation   │
│  filters, flags       │
│  answerable: bool     │
└───────────┬───────────┘
            │  plan only. no numbers.
            ▼
┌───────────────────────┐
│  EXECUTOR             │  ← code
│  filters, sorts, sums │
└───────────────────────┘
```

**Two model calls, both narrow.** One reads documents. One turns a question into a plan. Neither touches arithmetic.

---

## 4 · Extraction contract

The extraction prompt has four hard rules:

1. Do not convert currency. Do not convert units. Report what the document says.
2. If a line is not quoted, price is null and confidence is "missing".
3. If a figure is ambiguous or OCR is degraded, confidence is "low" with the reason.
4. Never guess a number that is not in the document.

Every line comes back with `evidence` — where in the document it was found. That's what populates the hover on every cell in the comparison.

The model also returns `unit_basis_evidence`: the actual words that established whether prices are per box, per 100 pieces, or per kg. On the Metro Boxes response that's `** ALL RATES PER BOX **`, and it's the single most important string in the whole dataset.

---

## 5 · Normalisation rules

| Situation | Rule | State shown |
|---|---|---|
| INR, per 100 pieces | pass through | Confident |
| USD | × 88.20, rate set by buyer | Inferred, reason shown |
| per box | × 100 | Inferred, reason shown |
| per kg | **refuse** — no weight per unit supplied | Needs a human |
| unit basis not stated | assume per 100 pieces | Inferred, assumption shown |
| OCR low confidence | pass value, flag it | Inferred, reason shown |
| not quoted | null | Needs a human |

The per-kg case is the one worth arguing about. A system could estimate a gram weight per carton and produce a number. Mine refuses, because the buyer would have no way of knowing that number was invented.

---

## 6 · The Metro Boxes problem

Raw, Metro Boxes looks like the cheapest supplier by two orders of magnitude:

```
CP-001   PackRite      1,240      (per 100 pieces)
CP-001   Metro Boxes      12.10   (per box)
```

Both are correct. They're the same price. A system that sorts on the raw number hands the buyer a hundredfold error and looks confident doing it.

This is the entire argument for separating extraction from computation. The model's job was to notice the string `ALL RATES PER BOX` and report it. The code's job was to multiply by 100 and tell the buyer it did.

---

## 7 · What the buyer sees when the system is unsure

**Confident** — read directly, no assumptions. White cell.

**Inferred** — amber cell. Hover shows exactly what was assumed. Example: *"USD → INR at 88.20 · quoted per box, ×100 to reach per-100-pieces."*

**Needs a human** — grey cell, with the reason. Example: *"priced per kg; no weight per unit supplied, cannot convert."*

Every open item is also collected into a list on the award screen, so nothing that needs resolving can hide inside a green total.

---

## 8 · Test questions the demo answers

| Question | What it exercises |
|---|---|
| Cheapest per line among vendors who cleared the questionnaire | The VP's actual question. Filter, then split, then compare against single-vendor award. |
| Who's cheapest overall, and what changes if Sundar's rebate applies | Rebate found in a page-4 annexure, applied conditionally |
| Which vendors didn't quote everything | Gap analysis, partial totals shown as partial |
| Is GlobalCorr cheaper once converted | Currency handling made visible |
| What can't you tell me from these quotes | **The refusal.** System declines and explains why. |

---

## 9 · Stack

Single HTML file. No build step, no dependencies, no backend. Deploys by drag and drop.

Model: `claude-sonnet-4-6`, called directly from the browser.

The choice is deliberate: nothing in this prototype is load-bearing except the AI loops and the reasoning around them, and I didn't want a framework in the way of a reviewer reading it.

---

## 10 · Where I'd go next

Not more extraction accuracy. **Memory.**

Every RFx today pays full extraction cost. But it's the same vendors, quarter after quarter, in the same categories. The system should learn that Metro Boxes quotes per box, that Sundar buries the rebate in an annexure, that GlobalCorr writes prose instead of tables.

First RFx costs you the extraction. Tenth should be nearly free. That's the difference between a tool that saves a week and an asset that compounds.

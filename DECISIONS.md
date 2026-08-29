# Quorum — what I decided, and what I left out
**Nikhil Kumbhar · Aerchain take-home · Kill the Quote Spreadsheet**

---

## The decision everything else hangs off

**The model extracts. The code computes. Never the other way round.**

When the VP asks "cheapest per line, but only among vendors who cleared the quality questionnaire," the model's job is to turn that into a plan: which vendors pass the filter, which operation to run, whether the rebate applies. The arithmetic then runs in JavaScript over a structured table.

I did it this way because of the sentence in your brief about ₹4 crore. A buyer with that on the line will ask the same question twice. If a model is summing thirty line items across five documents, they get two different answers and the system is finished. The extraction is where variance lives and a model earns its place. Multiplication is not.

You can see this in the product: every answer shows the plan it executed, in a black box above the numbers.

---

## The proof, built into the product

Two screens exist purely to test that claim, because you shouldn't have to take my word for it.

**Extraction stability.** Re-runs the two hardest responses and diffs them field by field. Extraction is a model call, so some fields move. The screen shows which, and whether they were flagged as uncertain beforehand. When something moves that wasn't flagged, the product says so rather than hiding it.

**Answer determinism.** Asks the VP's question three times. The model writes fresh framing each run. The computed total is identical to the rupee, because the model never touches it.

Feed a whole comparison into a model and ask it the question directly and it demos beautifully. It also returns a different number each time, and you find out in month two in front of a customer.

---

## Five more decisions worth defending

**1 · Three states, never a silent guess.**
Every number is Confident, Inferred, or Needs a human. Inferred is amber and hovering tells you exactly what was assumed — "quoted per box, multiplied by 100 to reach per-100-pieces." Nothing is quietly converted. The buyer can see the difference between a number that was read and a number that was derived.

*Sacrifice:* the screen is busier than a clean comparison grid would be.

**2 · Unresolvable stays unresolvable.**
Anand Industries quoted "₹42/kg for the 5-ply, 38 for the 3-ply, rest same as last year." A system that wanted to look impressive would assume a weight per unit and produce a number. Mine returns null, says why, and puts it in a list of things a human has to resolve. Anand therefore appears in the comparison with almost nothing filled in, which looks like a gap in the product. It isn't. It's the correct answer.

*Sacrifice:* a demo where one vendor is mostly empty is less satisfying to look at.

**3 · The system will refuse to answer.**
Ask it something the data can't support and it says so rather than producing a plausible figure. There's a suggested question in the demo that triggers this deliberately. I'd rather a buyer learn on day one that this thing tells them when it doesn't know.

**4 · No single recommended winner.**
The award screen shows who is eligible and what is still open, and stops. Freight basis differs across vendors, two have unquoted lines, and one rebate is conditional on annual offtake nobody has committed to. Producing "award to X" would be dressing up a judgement the system isn't entitled to make. Its job is to make the decision defensible, not to make it.

*Sacrifice:* it's less impressive in a demo than a big green recommendation.

**5 · One exchange rate, set by the buyer, applied in code.**
GlobalCorr quoted in USD. The rate is a constant the buyer controls, not something the model decides per call. Otherwise the same comparison shifts between refreshes and nobody trusts it.

---

## What I deliberately did not build

**Live email ingestion.** The brief said I could stub the plumbing. Vendor responses are seeded payloads. Building an IMAP listener would have consumed the time I spent on extraction quality, which is the part being assessed.

**A real OCR pipeline.** The angled photo is represented as degraded OCR output, with the specific failures a phone photo produces: `1O9.OO` with letter O for zero, three lines lost to shadow, and a handwritten note running off the edge of the frame. The model has to cope with exactly what OCR would hand it. I chose to make the downstream problem real rather than the upstream one.

**Authentication, multi-tenancy, persistence.** Not what is being tested.

**Vendor negotiation loops.** Chasing the three missing lines from Metro Boxes is the obvious next feature. It's a different counterparty with different failure modes and it would have split the build.

---

## The traps I put in my own data, on purpose

I fabricated the dataset, so I seeded the edges rather than hoping for them:

| Vendor | Format | What makes it hard |
|---|---|---|
| PackRite | Clean Excel | Nothing. The control case. |
| Sundar | PDF letterhead | 7% rebate buried on page 4 in an annexure, not in the rate table. Fails FSC. |
| GlobalCorr | Word, prose | Quoted in USD. Thirty prices written as sentences, not a table. |
| Metro Boxes | Phone photo | Angled, OCR degraded. Priced **per box** not per 100. Only 27 of 30 lines. |
| Anand | Two-line email | Priced per kg. References prices the system does not have. |

The interesting one is Metro Boxes. On the raw numbers it looks by far the cheapest, because ₹12.10 per box sits next to ₹1,240 per hundred. Get the unit basis wrong and you hand a buyer a hundredfold error with total confidence. That single trap is why extraction reports the unit basis separately, with the evidence that established it, and why conversion is code.

---

## If I'd had another week

**The interesting problem is somewhere else.**

An RFx is not a one-off. It's a quarterly event with mostly the same vendors in mostly the same categories. Today every cycle pays the full extraction cost again.

It should get cheaper each time. The system should learn that Metro Boxes always quotes per box, that Sundar always buries the rebate in an annexure, that GlobalCorr writes prose. By the tenth RFx, extraction should be nearly free and the model should only be working on what's genuinely new.

That turns this from a tool that saves a buyer a week into an asset that compounds. It's not what the brief asked for, and it's where I'd go next.

---

## Running it

Open the app, paste an Anthropic API key in the header, and walk the six steps. There is no offline fallback anywhere — the brief said the AI loops must be real, so if the key is missing the product tells you it failed rather than showing you canned output.

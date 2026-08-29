// ============================================================
// FABRICATED DATASET — Corrugated packaging RFx
// 30 line items, 5 vendors, 6 deliberate traps
// ============================================================

const LINE_ITEMS = [
  { code:'CP-001', desc:'RSC Box 250x200x150mm, 3-ply, Kraft', qty:48000 },
  { code:'CP-002', desc:'RSC Box 300x250x200mm, 3-ply, Kraft', qty:36000 },
  { code:'CP-003', desc:'RSC Box 400x300x250mm, 3-ply, Kraft', qty:30000 },
  { code:'CP-004', desc:'RSC Box 450x350x300mm, 3-ply, Kraft', qty:24000 },
  { code:'CP-005', desc:'RSC Box 500x400x350mm, 3-ply, Kraft', qty:18000 },
  { code:'CP-006', desc:'RSC Box 600x400x400mm, 3-ply, Kraft', qty:12000 },
  { code:'CP-007', desc:'RSC Box 250x200x150mm, 5-ply, Kraft', qty:42000 },
  { code:'CP-008', desc:'RSC Box 300x250x200mm, 5-ply, Kraft', qty:38000 },
  { code:'CP-009', desc:'RSC Box 400x300x250mm, 5-ply, Kraft', qty:33000 },
  { code:'CP-010', desc:'RSC Box 450x350x300mm, 5-ply, Kraft', qty:27000 },
  { code:'CP-011', desc:'RSC Box 500x400x350mm, 5-ply, Kraft', qty:21000 },
  { code:'CP-012', desc:'RSC Box 600x400x400mm, 5-ply, Kraft', qty:15000 },
  { code:'CP-013', desc:'RSC Box 700x500x450mm, 5-ply, Kraft', qty:9000 },
  { code:'CP-014', desc:'RSC Box 400x300x250mm, 7-ply, Heavy duty', qty:8000 },
  { code:'CP-015', desc:'RSC Box 500x400x350mm, 7-ply, Heavy duty', qty:6500 },
  { code:'CP-016', desc:'RSC Box 600x400x400mm, 7-ply, Heavy duty', qty:5000 },
  { code:'CP-017', desc:'Die-cut mailer 220x160x60mm, 3-ply, White', qty:60000 },
  { code:'CP-018', desc:'Die-cut mailer 280x200x80mm, 3-ply, White', qty:45000 },
  { code:'CP-019', desc:'Die-cut mailer 350x250x100mm, 3-ply, White', qty:30000 },
  { code:'CP-020', desc:'Die-cut mailer 400x300x120mm, 5-ply, White', qty:22000 },
  { code:'CP-021', desc:'Corrugated sheet 1000x800mm, 3-ply', qty:25000 },
  { code:'CP-022', desc:'Corrugated sheet 1200x1000mm, 3-ply', qty:18000 },
  { code:'CP-023', desc:'Corrugated sheet 1200x1000mm, 5-ply', qty:14000 },
  { code:'CP-024', desc:'Partition set 4-cell, 3-ply, for CP-003', qty:20000 },
  { code:'CP-025', desc:'Partition set 6-cell, 3-ply, for CP-005', qty:15000 },
  { code:'CP-026', desc:'Partition set 9-cell, 5-ply, for CP-011', qty:10000 },
  { code:'CP-027', desc:'Export carton 600x400x400mm, 7-ply, waterproof', qty:7000 },
  { code:'CP-028', desc:'Export carton 800x600x500mm, 7-ply, waterproof', qty:4500 },
  { code:'CP-029', desc:'Telescopic box 500x400x300mm, 5-ply', qty:11000 },
  { code:'CP-030', desc:'Telescopic box 700x500x400mm, 5-ply', qty:7500 }
];

const QUESTIONNAIRE = [
  { id:'Q1', q:'Do you hold a valid ISO 9001:2015 certificate?', critical:true },
  { id:'Q2', q:'Do you hold FSC Chain of Custody certification?', critical:true },
  { id:'Q3', q:'What is your standard lead time in days for repeat orders?', critical:false },
  { id:'Q4', q:'Can you support monthly call-off against an annual contract?', critical:false },
  { id:'Q5', q:'What is your maximum monthly production capacity in units?', critical:false }
];

// ============================================================
// VENDOR RESPONSES — deliberately inconsistent
// ============================================================

const VENDORS = [

// ---------- V1: clean Excel. The control. ----------
{
  id:'V1', name:'PackRite Industries', location:'Hosur, TN',
  format:'Excel attachment (.xlsx)', icon:'sheet',
  received:'Day 4',
  traps:[],
  raw:`RE: RFx-2026-CP-014 | Corrugated Packaging | Annual Contract
Attachment: PackRite_Quote_RFx2026CP014.xlsx

SHEET 1 — COMMERCIAL

Item Code | Description | Annual Qty | Rate (INR per 100 pcs) | Notes
CP-001 | RSC 250x200x150 3ply | 48000 | 1,240 |
CP-002 | RSC 300x250x200 3ply | 36000 | 1,585 |
CP-003 | RSC 400x300x250 3ply | 30000 | 2,240 |
CP-004 | RSC 450x350x300 3ply | 24000 | 2,890 |
CP-005 | RSC 500x400x350 3ply | 18000 | 3,620 |
CP-006 | RSC 600x400x400 3ply | 12000 | 4,410 |
CP-007 | RSC 250x200x150 5ply | 42000 | 1,880 |
CP-008 | RSC 300x250x200 5ply | 38000 | 2,390 |
CP-009 | RSC 400x300x250 5ply | 33000 | 3,340 |
CP-010 | RSC 450x350x300 5ply | 27000 | 4,280 |
CP-011 | RSC 500x400x350 5ply | 21000 | 5,390 |
CP-012 | RSC 600x400x400 5ply | 15000 | 6,540 |
CP-013 | RSC 700x500x450 5ply | 9000 | 8,120 |
CP-014 | RSC 400x300x250 7ply HD | 8000 | 4,980 |
CP-015 | RSC 500x400x350 7ply HD | 6500 | 7,240 |
CP-016 | RSC 600x400x400 7ply HD | 5000 | 9,150 |
CP-017 | Mailer 220x160x60 3ply | 60000 | 980 |
CP-018 | Mailer 280x200x80 3ply | 45000 | 1,320 |
CP-019 | Mailer 350x250x100 3ply | 30000 | 1,740 |
CP-020 | Mailer 400x300x120 5ply | 22000 | 2,860 |
CP-021 | Sheet 1000x800 3ply | 25000 | 1,150 |
CP-022 | Sheet 1200x1000 3ply | 18000 | 1,690 |
CP-023 | Sheet 1200x1000 5ply | 14000 | 2,420 |
CP-024 | Partition 4-cell 3ply | 20000 | 640 |
CP-025 | Partition 6-cell 3ply | 15000 | 890 |
CP-026 | Partition 9-cell 5ply | 10000 | 1,480 |
CP-027 | Export carton 600x400x400 7ply WP | 7000 | 11,200 |
CP-028 | Export carton 800x600x500 7ply WP | 4500 | 15,800 |
CP-029 | Telescopic 500x400x300 5ply | 11000 | 6,100 |
CP-030 | Telescopic 700x500x400 5ply | 7500 | 8,450 |

SHEET 2 — TERMS
Currency: INR
Prices: Ex-works Hosur. Freight extra at actuals.
Payment: 45 days from invoice
Validity: 90 days
Price basis: Fixed for 12 months

SHEET 3 — QUESTIONNAIRE
Q1 ISO 9001:2015 — Yes, valid till Mar 2028 (cert attached)
Q2 FSC Chain of Custody — Yes, FSC-C142876
Q3 Lead time repeat orders — 12 days
Q4 Monthly call-off — Yes, supported
Q5 Max monthly capacity — 850,000 units

Attachments: ISO_cert.pdf, FSC_cert.pdf, Plant_photos.zip`
},

// ---------- V2: PDF, discount buried in footnote ----------
{
  id:'V2', name:'Sundar Packaging Pvt Ltd', location:'Coimbatore, TN',
  format:'PDF on letterhead', icon:'pdf',
  received:'Day 6',
  traps:['Volume discount buried in a footnote, not in the rate table'],
  raw:`[PDF — Sundar_Packaging_Quotation_Aug2026.pdf, 4 pages]

────────────────────────────────────────
       SUNDAR PACKAGING PRIVATE LIMITED
       SIDCO Industrial Estate, Coimbatore 641021
       GSTIN: 33AABCS4521M1ZP
────────────────────────────────────────

QUOTATION REF: SP/QT/2026/0847
DATE: 18 August 2026
AGAINST: RFx-2026-CP-014

Dear Sir/Madam,

With reference to your enquiry, we are pleased to submit our
most competitive rates for the mentioned corrugated items.

PRICE SCHEDULE (Rate in Rupees per 100 pieces)

CP-001    1,190      CP-016    8,880
CP-002    1,530      CP-017      940
CP-003    2,180      CP-018    1,280
CP-004    2,810      CP-019    1,690
CP-005    3,540      CP-020    2,790
CP-006    4,320      CP-021    1,120
CP-007    1,830      CP-022    1,640
CP-008    2,320      CP-023    2,360
CP-009    3,260      CP-024      625
CP-010    4,190      CP-025      870
CP-011    5,280      CP-026    1,440
CP-012    6,410      CP-027   10,900
CP-013    7,960      CP-028   15,400
CP-014    4,860      CP-029    5,950
CP-015    7,090      CP-030    8,240

TERMS & CONDITIONS
1. Prices are FOR Bangalore, freight and unloading included.
2. Payment terms: 30 days from date of invoice.
3. Offer valid for 60 days from date hereof.
4. GST @ 18% extra as applicable.
5. Delivery within 15 working days of firm PO.
6. Minimum order quantity 5,000 pieces per SKU per despatch.

                                        Page 3 of 4
────────────────────────────────────────

ANNEXURE — GENERAL NOTES

* All rates quoted are based on current kraft paper prices as
  of August 2026 and are subject to revision if raw material
  index moves beyond +/- 8%.

* An additional volume rebate of 7% shall be applicable on the
  total contract value where committed annual offtake exceeds
  4,00,000 units across all SKUs. Rebate to be settled by
  credit note at the end of each quarter.

* Buyer to provide artwork in AI/CDR format 10 days prior to
  first production run.

QUESTIONNAIRE RESPONSES
Q1. ISO 9001:2015 — Yes. Certificate no. IND/QMS/2024/88213,
    valid till 11 Nov 2027.
Q2. FSC Chain of Custody — No. Application under process,
    expected certification by Q1 2027.
Q3. Lead time for repeat orders — 15 working days.
Q4. Monthly call-off — Yes, against annual PO.
Q5. Maximum monthly capacity — 6,20,000 units.

                                        Page 4 of 4`
},

// ---------- V3: Word doc, commercials in prose, USD ----------
{
  id:'V3', name:'GlobalCorr Packaging LLC', location:'Dubai, UAE',
  format:'Word document (.docx)', icon:'doc',
  received:'Day 7',
  traps:['Quoted in USD, not INR','Commercials written as prose, not a table'],
  raw:`[Word document — GlobalCorr_Proposal_BLR.docx]

GLOBALCORR PACKAGING LLC
Proposal for Annual Corrugated Packaging Supply
Reference: Your RFx-2026-CP-014

1. INTRODUCTION

GlobalCorr Packaging LLC is pleased to present this proposal for the
supply of corrugated packaging materials to your Bangalore fulfilment
centre. We operate manufacturing facilities in Dubai and Sharjah with
a combined annual capacity in excess of 40 million units.

2. COMMERCIAL PROPOSAL

All pricing in this proposal is quoted in United States Dollars (USD)
per one hundred (100) pieces, on a CIF Chennai basis.

For the three-ply regular slotted cartons, we are pleased to offer
USD 14.20 for the 250x200x150mm size, USD 18.40 for the 300x250x200mm,
USD 26.10 for the 400x300x250mm, USD 33.80 for the 450x350x300mm,
USD 42.60 for the 500x400x350mm and USD 51.90 for the 600x400x400mm
variant.

Moving to the five-ply range, our rates are USD 21.80 for
250x200x150mm, USD 27.90 for 300x250x200mm, USD 39.20 for
400x300x250mm, USD 50.40 for 450x350x300mm, USD 63.10 for
500x400x350mm, USD 76.80 for 600x400x400mm and USD 95.20 for the
larger 700x500x450mm carton.

For heavy duty seven-ply cartons we quote USD 58.40, USD 84.90 and
USD 107.20 for the 400x300x250mm, 500x400x350mm and 600x400x400mm
sizes respectively.

Our white die-cut mailer range is offered at USD 11.60, USD 15.40 and
USD 20.30 for the three-ply sizes in ascending order, and USD 33.40
for the five-ply 400x300x120mm mailer.

Corrugated sheets are quoted at USD 13.70 and USD 19.80 for the
three-ply sizes, and USD 28.40 for the five-ply 1200x1000mm sheet.

Partition sets are offered at USD 7.40, USD 10.30 and USD 17.20 for
the four-cell, six-cell and nine-cell variants respectively.

Waterproof export cartons are quoted at USD 131.00 for the
600x400x400mm and USD 184.50 for the 800x600x500mm size.

Finally, our telescopic boxes are offered at USD 71.40 for the
500x400x300mm and USD 98.90 for the 700x500x400mm variant.

3. COMMERCIAL TERMS

Payment against irrevocable LC at sight. Prices firm for six months
from date of order. Delivery 25-30 days ex-Dubai. Import duties,
clearing charges and inland freight from Chennai port to Bangalore
are to the buyer's account.

4. COMPLIANCE

We confirm we hold ISO 9001:2015 certification (Cert. AE/9001/22/4471,
valid to June 2027) and FSC Chain of Custody certification
(FSC-C118902). Standard lead time for repeat orders is 25 days. We are
able to support monthly call-off arrangements. Maximum monthly
production capacity is approximately 3.2 million units.`
},

// ---------- V4: photo of a rate card, per-box UoM, 27 of 30 lines ----------
{
  id:'V4', name:'Metro Boxes & Cartons', location:'Peenya, Bengaluru',
  format:'Photo of printed rate card (JPEG, angled)', icon:'photo',
  received:'Day 8',
  traps:['Photo taken at an angle, OCR partially degraded','Priced PER BOX, not per 100 pieces','Only 27 of 30 lines quoted'],
  raw:`[Image — IMG_20260822_1614.jpg — 3.2 MB — photo of a printed
sheet, taken at an angle on a phone. Lower right corner in shadow.]

OCR OUTPUT (confidence varies by region):

    METRO BOXES & CARTONS
    Peenya Ind. Area, Bangalore - 560058
    RATE CARD - AUG 2026
    ** ALL RATES PER BOX **

    CP-001   12.10        CP-016   90.50
    CP-002   15.60        CP-017    9.60
    CP-003   22.20        CP-018   13.10
    CP-004   28.70        CP-019   17.30
    CP-005   36.10        CP-020   28.40
    CP-006   44.00        CP-021   11.40
    CP-007   18.70        CP-022   16.70
    CP-008   23.80        CP-023   24.10
    CP-009   33.20        CP-024    6.30
    CP-010   42.60        CP-025    8.80
    CP-011   53.70        CP-026   14.60
    CP-012   65.10        CP-027  1O9.OO     <- low confidence
    CP-013   80.80        CP-028  [obscured]
    CP-014   49.40        CP-029  [obscured]
    CP-015   72.10        CP-030  [obscured]

    Terms: Ex-works Peenya. Fr8 extra.
    Pymt 30 days. Rates valid 45 days.
    Min order 2000 pcs.

    ISO 9OO1 - YES  |  FSC - YES
    Lead time 10 days
    Call off - yes
    Capacity 4,5O,OOO/month

[Handwritten in pen at the bottom of the sheet, partially cut off
by the edge of the photo:]
    "CP-028/029/030 - will quote sep..."`
},

// ---------- V5: the email. Genuinely underspecified. ----------
{
  id:'V5', name:'Anand Industries', location:'Hosur, TN',
  format:'Plain email, no attachment', icon:'mail',
  received:'Day 9',
  traps:['Priced per KG, not per piece','Refers to "last year" prices the system does not have','Covers only 2 of 30 lines explicitly'],
  raw:`From: anand.k@anandindustries.co.in
To: procurement@[buyer].com
Subject: Re: RFx-2026-CP-014 corrugated annual
Date: 26 Aug 2026, 19:42

Dear Nikhil,

Rates as discussed.

₹42/kg for the 5-ply, 38 for the 3-ply, rest same as last year,
freight extra.

We can start supply from 1st Oct. Same team will handle.

ISO and FSC both valid, will send copies.

Regards
Anand K
Anand Industries
+91 98xxx xxxxx

Sent from my iPhone`
}
];

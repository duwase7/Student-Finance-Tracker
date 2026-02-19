# Student Finance Tracker

## Overview
A responsive, accessible, vanilla JS application to track student transactions, with budgets, categories, live search, sorting, and import/export functionality.

 ## Features
- Add, view, and delete transactions
- Sort transactions by description, amount, category, and date
- Regex-powered live search with highlighted matches
- Statistics dashboard: total transactions, sum, top category
- Spending cap tracking with ARIA live updates
- Currency selection (USD, EUR, RWF)
- JSON import/export
- Fully accessible: keyboard navigation, focus outlines, ARIA live, skip link
- Responsive mobile-first design (≥3 breakpoints)

 ## Regex Catalog
- Description/Category: `/^\S(?:.*\S)?$/` — no leading/trailing spaces
- Amount: `/^(0|[1-9]\d*)(\.\d{1,2})?$/` — numeric with 2 decimals
- Date: `/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/`
- Advanced: `/\b(\w+)\s+\1\b/` — back-reference for duplicate words
- Search patterns are compiled safely in `search.js`

## Keyboard Map
- Tab to navigate form and table
- Enter to submit form
- Arrow keys for table navigation

## Accessibility Notes
- Semantic landmarks: header, nav, main, sections, footer
- Skip link for content
- Visible focus styles
- Status messages via `aria-live` regions

 ## How to Run
1. Clone repository
```bash
git clone https://github.com/duwase7/Student-Finance-Tracker.git
cd Student-Finance-Tracker

evelopment Milestones (M1–M7)

 M1 – Spec & Wireframes
- Initial specification outline
- Validation & accessibility planning

 M2 – Semantic HTML & Base CSS
- Semantic HTML skeleton
- Mobile-first CSS layout

 M3 – Forms & Regex Validation
- Transaction form
- 4+ regex rules
- tests.html assertions

 M4 – Render + Sort + Regex Search
- Dynamic table rendering
- Sorting logic
- Safe regex compiler
- Highlight matches

 M5 – Stats + Cap Logic
- Dashboard metrics
- Spending cap with ARIA live updates

 M6 – Persistence + Import/Export
- localStorage
- JSON round-trip validation
- Currency setting

 M7 – Polish & A11y Audit
- UI improvements
- Accessibility focus states
- README
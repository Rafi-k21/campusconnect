
# CampusConnect

A multi-page student services portal built for **COM109 CW2**. It showcases HTML, CSS, JavaScript, and jQuery with accessibility, animations, validation, and localStorage.

## Quick start

1. Open with a live server (e.g., VS Code Live Server extension) and visit `index.html`.
2. Try the **Events** filters, **Tools** (GPA + Budget), **Booking** form (live validation), and **Contact** (live preview).

## Repo structure

```
.
├── index.html
├── events.html
├── tools.html
├── booking.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── events.js
│   ├── tools.js
│   ├── booking.js
│   └── contact.js
├── images/
└── docs/
    └── REPORT-template.md
```

## Collaboration (Git + GitHub)

- Create branches per feature: `feature-events`, `feature-booking`, `feature-tools`, `feature-home`.
- Commit often with clear messages: `feat(events): add date filter` / `fix(booking): email regex`.
- Open Pull Requests; require one teammate approval before merging to `main`.

## Accessibility

- Semantic HTML (`header`, `nav`, `main`, `footer`), labelled controls, keyboard-friendly UI, `aria-live` on dynamic content, sufficient contrast, skip link.
- Dark mode with prefers-color-scheme + localStorage.

## Validation & Interactivity

- Booking + Contact forms have JS validation and dynamic error display.
- Events use jQuery animations (`slideDown/Up`), plus filtering logic.
- Tools use `localStorage` to persist data.

## License

Educational use.

# Food App Frontend

Static restaurant website for **Das Landhähnchenhaus**.

The project contains simple HTML, CSS and JavaScript pages for a landing page, menu, contact details and legal notice.

## Pages

- `index.html` — landing page
- `speisekarte.html` — food and drink menu
- `kontakt.html` — contact and opening hours
- `impressum.html` — legal notice

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

No frontend framework or build step is required for local development.

## Local Preview

Open `index.html` directly in a browser or serve the folder with a small local server:

```bash
python3 -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

## Navigation Behavior

The hamburger button opens the dropdown navigation. On the menu page, category tabs switch between menu sections without a page reload.

## Maintenance Checklist

Before publishing changes:

1. Open all HTML pages locally.
2. Test the dropdown navigation.
3. Test menu category tabs.
4. Check contact links.
5. Confirm external map links open in a new tab.

## Roadmap

Possible improvements:

- Add image optimization
- Add responsive menu refinements
- Add structured data for restaurant information
- Add deployment instructions

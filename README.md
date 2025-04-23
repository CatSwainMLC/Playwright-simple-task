# 🎯 QA Automation Interview Task

Welcome! This task is designed to evaluate your ability to work with Playwright for basic browser automation.

## 🔧 What’s Set Up for You

- A working Playwright test framework
- A starter test that checks if the homepage loads
- Codespaces-ready environment (you can run everything in-browser!)

---

## 🧪 Your Task

Improve the existing test in `tests/homepage.spec.ts` by doing the following:

1. ✅ **Check that the top navigation is visible**
   - Look for elements like "Our Villages", "Living Options", etc.
2. ✅ **Click the “Contact Us” link in the navigation**
   - Verify that the page loads correctly (you may check the heading or URL)
3. ✅ **Take a screenshot of the contact page**
   - Save it with the filename `contact.png`

You can use Playwright’s `page.locator`, `click`, and `screenshot` functions.

> Bonus: Add a test that fills out the “Contact Us” form (do **not** submit).

---

## 🏁 How to Run the Test

```bash
npx playwright test

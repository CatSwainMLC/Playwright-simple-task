import { test, expect } from '@playwright/test';

test('Metlifecare homepage loads', async ({ page }) => {
  await page.goto('https://www.metlifecare.co.nz');
  await expect(page).toHaveTitle(/Metlifecare/);
});
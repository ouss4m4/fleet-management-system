import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/vehicles');
  await page
    .getByRole('link', { name: 'Name Site 1 - Drill Model' })
    .first()
    .click();
  await page.getByRole('button', { name: 'Add Maintenance' }).click();
  await page
    .getByRole('textbox', { name: 'Description' })
    .fill('Startup Maintenance');
  await page.getByRole('textbox', { name: 'Description' }).press('Tab');
  await page.getByRole('spinbutton', { name: 'Cost ($)' }).fill('100');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(
    page.getByRole('cell', { name: 'Startup Maintenance' }).first()
  ).toBeVisible();
});

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/vehicles');
  await page
    .getByRole('link', { name: 'Name Site 1 - Drill Model' })
    .first()
    .click();
  await page.getByRole('button', { name: 'Add Sensor' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Location');
  await page.getByRole('combobox', { name: 'Type' }).click();
  await page.getByRole('option', { name: 'GPS' }).click();
  await page.getByRole('textbox', { name: 'Unit' }).click();
  await page.getByRole('textbox', { name: 'Unit' }).fill('Coordinates');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(
    page.getByRole('cell', { name: 'Location' }).first()
  ).toBeVisible();
});

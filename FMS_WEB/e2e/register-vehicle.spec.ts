import { test, expect } from '@playwright/test';

test('create a vehicle', async ({ page }) => {
  await page.goto('http://localhost:5173/vehicles');

  await page.getByRole('button', { name: 'Register Vehicle' }).click();

  await page.getByRole('textbox', { name: 'Name' }).fill('Site 1 - Drill');
  await page.getByRole('textbox', { name: 'Model' }).fill('Caterpillar');
  await page.getByRole('textbox', { name: 'Type' }).fill('Excavator');
  await page.getByRole('textbox', { name: 'Region' }).fill('Dubai');

  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.getByText('Site 1 - Drill').first()).toBeVisible();
  await expect(page.getByText('Caterpillar').first()).toBeVisible();
  await expect(page.getByText('Excavator').first()).toBeVisible();
  await expect(page.getByText('Dubai').first()).toBeVisible();
});

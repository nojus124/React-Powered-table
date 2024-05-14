import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page.getByRole('cell', { name: 'Viva' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Homenick' })).toBeVisible();
  await expect(page.getByRole('row', { name: 'Viva Homenick More information' }).locator('div')).toBeVisible();
  await expect(page.locator('tbody')).toContainText('Viva');
  await expect(page.locator('tbody')).toContainText('Homenick');
  await expect(page.locator('tbody')).toContainText('More information');
  await page.getByRole('row', { name: 'Viva Homenick More information' }).locator('div').click();
  await expect(page.getByText('More Information', { exact: true })).toBeVisible();
  await expect(page.getByText('First Name: Viva')).toBeVisible();
  await expect(page.getByText('Last Name: Homenick')).toBeVisible();
  await expect(page.getByText('Birth Date: 2001-12-')).toBeVisible();
  await expect(page.getByText('Gender: Male')).toBeVisible();
  await expect(page.getByText('Customer Identification Code')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Close' })).toBeVisible();
  await expect(page.getByRole('dialog')).toContainText('First Name: Viva');
  await expect(page.getByRole('dialog')).toContainText('Last Name: Homenick');
  await expect(page.getByRole('dialog')).toContainText('Birth Date: 2001-12-17');
  await expect(page.getByRole('dialog')).toContainText('Gender: Male');
  await expect(page.getByRole('dialog')).toContainText('Customer Identification Code: 847A937E');
  await expect(page.getByRole('dialog')).toContainText('Close');
  await page.getByRole('button', { name: 'Close' }).click();
});
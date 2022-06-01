import { newE2EPage } from '@stencil/core/testing';

describe('cat-facts', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cat-facts></cat-facts>');

    const element = await page.find('cat-facts');
    expect(element).toHaveClass('hydrated');
  });
});

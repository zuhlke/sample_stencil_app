import { newSpecPage } from '@stencil/core/testing';
// jest.mock('../cat-facts-service.ts');
jest.mock('../cat-facts-service.ts', () => ({
  fetchCatFactsText: () => Promise.resolve(['a cat fact text here', 'another cat fact text here', 'and a third one here']),
}));
import { CatFacts } from '../cat-facts';

describe('cat-facts', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [CatFacts],
      html: `<cat-facts></cat-facts>`,
    });
    expect(page.root).toEqualHtml(`
      <cat-facts>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cat-facts>
    `);
  });
});

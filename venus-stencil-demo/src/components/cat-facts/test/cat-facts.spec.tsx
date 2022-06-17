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
          Hi, do you want some cat facts? Because they are awesome?
          <p> a cat fact text here </p>
          <p> another cat fact text here </p>
          <p> and a third one here </p>
        </mock:shadow-root>
      </cat-facts>
    `);
  });
});

import { newSpecPage } from '@stencil/core/testing';
import { CatFacts } from '../cat-facts';
import { fetchCatFactsText } from '../cat-facts-service';

jest.mock('../cat-facts-service.ts');
const fetchCatFactsTextMock = fetchCatFactsText as jest.MockedFunction<typeof fetchCatFactsText>;

describe('cat-facts', () => {
  it('should render', async () => {
    fetchCatFactsTextMock.mockImplementation(() => Promise.resolve(['hello', 'hello again']));
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

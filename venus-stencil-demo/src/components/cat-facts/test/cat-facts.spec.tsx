import { newSpecPage } from '@stencil/core/testing';
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

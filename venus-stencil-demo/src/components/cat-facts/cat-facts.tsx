import { Component, h, State, Fragment } from '@stencil/core';
import { fetchCatFactsText } from './cat-facts-service';

@Component({
  tag: 'cat-facts',
  styleUrl: 'cat-facts.css',
  shadow: true,
})
export class CatFacts {

  @State() items: string[];

  async componentWillLoad() {
    this.items = await fetchCatFactsText();
  }

  render() {
    return (
      <Fragment>
        Hi, do you want some cat facts? Because they are awesome?
        {this.items.map(i => <p>{i}</p> )}
      </Fragment>
    );
  }

}

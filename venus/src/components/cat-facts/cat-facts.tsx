import { Component, h, State, Fragment } from '@stencil/core';

interface CatFact {
  fact: string;
  length: number;
}

@Component({
  tag: 'cat-facts',
  styleUrl: 'cat-facts.css',
  shadow: true,
})
export class CatFacts {

  @State() items: string[];

  componentWillLoad() {
    return fetch('https://catfact.ninja/facts')
      .then(response => response.json())
      .then(data => {
        this.items = data.data.map((e: CatFact) => e.fact)
      });
  }

  render() {
    return (
      <Fragment>
        Hi, do you want some cat facts?
        {this.items.map(i =>
          <p>{i}</p>
        )}

      </Fragment>
    );
  }

}

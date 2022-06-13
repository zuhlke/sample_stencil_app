import { CatFact } from './CatFact'

export async function fetchCatFactsText() : Promise<string[]> {
  const response = await fetch('https://catfact.ninja/facts');
  const data = await response.json();
  return data.data.map((e: CatFact) => e.fact);
}

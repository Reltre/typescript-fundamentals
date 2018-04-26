import * as React from 'react';
import { PlaceSearchResultList } from './place-search-result-list';
import { PlaceDetails, PlaceSummary, fetchPlaceSummaries, fetchPlaceDetails } from './utils/places';

interface IAppState {
  inProgress?: boolean;
  term?: string; 
  results?: PlaceDetails[];
}

export type IAppProps = IAppState;

export class App extends React.Component<{}, IAppState> {
  constructor() {
    super({});
    this.state = {
      results:  [],
      term: '',
      inProgress: false
    };
  }

  async trySearch(search: string) {
    this.setState({ inProgress: true, term: search });
    let placeSummaries: PlaceSummary[] = await fetchPlaceSummaries(search);
    let results: PlaceDetails[] = await fetchPlaceDetails(placeSummaries.map(p => p.place_id));
    this.setState({ results, inProgress: false });
  }

  componentDidMount() {
    const input = document.querySelector("input");
    if (!input) return;
    input.addEventListener('input', () => {
      this.trySearch(input.value)
    });
  }

  render() {
    return (
      <div>
        <input type="text"  />
        <PlaceSearchResultList {...this.state}/>
      </div>
    );
  }
};
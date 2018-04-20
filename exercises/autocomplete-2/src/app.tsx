import * as React from 'react';
import { PlaceSearchResultList } from './place-search-result-list';
import { PlaceDetails, PlaceSummary, fetchPlaceSummaries, fetchPlaceDetails } from './utils/places';



export class App extends React.Component<{}, {}> {
  async trySearch(search: string) {
    try {
      this.setState({ inProgress: true, term: search });
      let placeSummaries: PlaceSummary[] = await fetchPlaceSummaries(search);
      let results: PlaceDetails[] = await fetchPlaceDetails(placeSummaries.map(p => p.place_id));
      this.setState({ results, inProgress: false });
    } catch {
      throw new Error("There was a problem fetching place data")
    }
  }
  render() {
    return (
      <PlaceSearchResultList { ...this.trySearch }/>
    );
  }
};
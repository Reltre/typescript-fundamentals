import * as React from 'react';
import { PlaceSearchResultList } from './place-search-result-list';
import { PlaceDetails, PlaceSummary, fetchPlaceSummaries, fetchPlaceDetails } from './utils/places';



export const App: React.SFC = () => {
  <input type="text"></input>
  return (
      <PlaceSearchResultList inProgress={true} term={'xylophone'} results={[] as PlaceDetails[]}/>
  );
};
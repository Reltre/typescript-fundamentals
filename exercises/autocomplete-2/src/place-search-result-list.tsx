import * as React from 'react';
import { PlaceDetails, PlaceSummary, fetchPlaceSummaries, fetchPlaceDetails } from './utils/places';
import { IAppProps } from './app'
import {PlaceSearchResult} from './place-search-result';

export const PlaceSearchResultList: React.SFC<IAppProps> = (props) => {
  let placeResults = props.results!.map(pr => {
    return <PlaceSearchResult {...pr}/>;
  });

  if (props.term && props.results!.length > 0) {
    return (
      <pre>
        <ul className='results'>
          {placeResults}
        </ul>
      </pre>
    )
  } else {
    return <p>No results</p>
  }
}

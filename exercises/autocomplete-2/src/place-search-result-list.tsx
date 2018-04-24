import * as React from 'react';
import { PlaceDetails, PlaceSummary, fetchPlaceSummaries, fetchPlaceDetails } from './utils/places';
import { IAppProps } from './app'
export const PlaceSearchResultList: React.SFC<IAppProps> = (props) => {
  // {/* {JSON.stringify(props.inProgress)} */}
  console.log(props);
  if (props.term) {
    return (
      <pre>
        <ul className='results'>
          {props.results}
        </ul>
      </pre>
    )
  } else {
    return <p>No results</p>
  }
}

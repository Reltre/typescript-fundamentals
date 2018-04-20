import * as React from 'react';
import { PlaceDetails } from './utils/places';

export const PlaceSearchResult: React.SFC<PlaceDetails> = (placeDetails) => {
  return (
    <div>
      <li className="search-result">
        <img className="icon" src={placeDetails.icon} />
        <h3>{placeDetails.name}</h3>
        <p>
          <a href={placeDetails.url} target="_blank">
            {placeDetails.vicinity}
          </a>
          -  
          <a href={placeDetails.website} target="_blank">
            {placeDetails.website}
          </a>
        </p>
      </li>
    </div>
  );
};
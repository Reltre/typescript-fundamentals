import * as React from 'react';
import { IAppState, App } from './app'
import {PlaceSearchResult} from './place-search-result';

interface IResultListProps extends IAppState {
  handleSearch?: (term: string) => void
}

const NO_OP = () => {};

export const PlaceSearchResultList: React.SFC<IResultListProps> = (props) => {
  let handler = props.handleSearch || NO_OP;
  let placeResults: JSX.Element[] = [];
  
  if (props.term === '') {
    placeResults.push(
      <li className="blue">
        Please Enter A Search Term Above
      </li>
    );
  } else if (props.inProgress) {
   placeResults.push(
     <li className="blue">
        Searching for {props.term}
     </li>
   );
  } else if (props.results && props.results.length > 0) {
    placeResults = props.results.map(pr => {
      return <PlaceSearchResult {...pr}/>;
    });
  }

  return (
    <div>
      <h2>Search for a place</h2>
      <input onChange={e => handler(e.target.value)} placeholder="Search" type="search"/>
      <ul className='results'>
        {placeResults}
      </ul>
    </div>
  )
}

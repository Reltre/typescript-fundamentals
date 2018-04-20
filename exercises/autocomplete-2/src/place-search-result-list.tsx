import * as React from 'react';
import { PlaceDetails } from './utils/places';

interface IAppState {
  results: PlaceDetails[];
  inProgress: boolean;
  term: string; 
}

export class PlaceSearchResultList extends React.Component<{}, IAppState> {
  constructor() {
    super({}, {});
    this.state = {
      results: [],
      term: '',
      inProgress: false
    };
  }

  render() {
    console.log(this.state.results);
    return (
      <pre>{JSON.stringify(arguments)}</pre>
    )
  }
}

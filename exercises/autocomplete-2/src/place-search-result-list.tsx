import * as React from 'react';
import { PlaceDetails } from './utils/places';

interface IAppProps {
  inProgress?: boolean;
  term?: string; 
  results?: PlaceDetails[];
}

type IAppState = IAppProps;

/** @augments {React.Component<object, object>} */

export class PlaceSearchResultList extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super({...props}, {});
    // console.log(state);
    this.state = {
      results: props.results || [],
      term: props.term || '',
      inProgress: props.inProgress || false
    };
  }

  render() {
    console.log(this.state.results);
    
    return (
      <pre>{JSON.stringify(arguments)}</pre>
    )
  }
}

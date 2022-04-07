import React, { Component } from "react";

interface Repository {
  id: number,
  name: string
}

// A propriedade "Props" será um array de Repository
interface Props {
  repositories: Repository[] 
}

interface State {
  // newRepository -> opcional, mas se existir é uma string
  newRepository?: string
}
export default class RepositoryList extends Component<Props, State> {
  state = {
    newRepository: '',
  }
  
  componentDidMount() {}

  render() {
    // acessa as propiedades passadas em 'Props'
    const { repositories } = this.props;
    // const { newRepository } = this.props;

    return (
      <ul>
        {repositories.map(value => <li>{ value.id }</li>)}
      </ul>)
  }
}
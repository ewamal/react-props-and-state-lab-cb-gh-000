import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const{pets}=this.props;

    return <div className="ui cards">
    {pets.map((pet) =>
      <Pet
      pet={pets}
      onAdoptPet={() => {}}
      />)}
    </div>
  }
}

export default PetBrowser

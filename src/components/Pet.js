import React from 'react'

class Pet extends React.Component {
  render() {
    const{pet, isAdopted, onAdoptPet}= this.props;
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            PET NAME
            {pet.name}

          </a>
          <div className="meta">
            <span className="date">
            PET TYPE
            {pet.type}
            </span>
          </div>
          <div className="description">
            <p>Age: {pet.age}
            </p>
            <p>Weight: {pet.weight}
            </p>
          </div>
        </div>
        <div className="extra content">
          {pet.isAdopted ?
            <button className="ui disabled button">Already adopted</button>
           : <button onClick={() => onAdoptPet(pet.id)} className="ui primary button">
           Adopt pet</button>
         }

        </div>
      </div>
    )
  }
}

export default Pet

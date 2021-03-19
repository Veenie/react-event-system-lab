// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

    doBlur = () => console.log('Hey! Eyes on me!')
    doFocus = () => console.log('Good!')
    render() {
        return (
            <div>
            <button
              onBlur={this.doBlur}
              onFocus={this.doFocus}>
                  Private Eyes
              </button>
          </div>

        )
    }
}

export default EyesOnMe;
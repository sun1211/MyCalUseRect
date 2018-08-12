import React from 'react'; // import react module
import { prototype } from 'stream';

// create our Button component as a functional component
const Button = (props) => {
  return (
    <input
      type="button"
      class="btn btn-info"
      onClick={props.handleClick}
      DoAction={props.type === 'action' ? 'button action-button' : 'button input-button'}
      value={props.label}
    />
  );

  // describe our expected props types
Button.propTypes = {
  DoAction: PropTypes.string.isRequired,
  handleClick: React.PropTypes.func.isRequired,
  label: React.PropTypes.string.isRequired
};
}



// export our button component.
export default Button;

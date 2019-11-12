import React from 'react';

class Button extends React.Component {
  render() {
    const { onClick, title, btnClass } = this.props;

    return (
      <button type="button" className={`btn btn-${btnClass}`} onClick={onClick}>{title}</button>
    );
  }
}

export default Button;

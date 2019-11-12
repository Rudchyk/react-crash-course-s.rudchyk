import React from 'react';

class Radio extends React.Component {
  render() {
    const { value, title, name, onChange, checked } = this.props;

    return (
      <div className="form-check form-check-inline">
        <label className="form-check-label">
          <input className="form-check-input" type="radio" name={name} value={value} defaultChecked={checked} onChange={onChange} />
          {title}
        </label>
      </div>
    );
  }
}

export default Radio;

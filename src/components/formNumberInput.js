import React from "react"
import PropTypes from "prop-types"

const FormNumberInput = ({ id, name, value, unit, onChange }) => {
  return (
    <div className="field">
      <label className="label" htmlFor={id}>
        {name}
      </label>
      <div className="control">
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              className="input is-medium"
              id={id}
              type="number"
              min="0"
              name={id}
              value={value}
              onChange={onChange}
            />
          </div>
          <div className="control">
            <button className="button is-static is-medium">{unit}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

FormNumberInput.defaultProps = {
  unit: "cm",
}

FormNumberInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  unit: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default FormNumberInput
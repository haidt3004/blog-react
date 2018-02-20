import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'

class CheckboxList extends Component {

    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.inputs = []
    }

    handleChange(event) {
        this.props.onChange({
            target: {
                name: this.props.name,
                value: this.getFormValue()
            }
        })
    }

    getFormValue() {
        return $(this.element).find(':checkbox').toArray()
            .filter(input => input.checked)
            .map(input => this.props.items[input.value].value)
    }

    getIsChecked(formValue) {
        return this.props.value.indexOf(formValue)>-1
    }

    render() {
        return (
            <div ref={el => this.element=el }>
            {this.props.items.map((item, index) =>
                <div className="checkbox" key={index}>
                    <label>
                        <input type="checkbox" name={this.props.name} value={index}
                            checked={this.getIsChecked(item.value)}
                            onChange={this.handleChange} />
                        {item.label}
                    </label>
                </div>
            )}
            </div>
        )
    }
}

CheckboxList.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.array,
    items: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
}

CheckboxList.defaultProps = {
    value: [],
    items: [],
    onChange: () => null
}

export default CheckboxList
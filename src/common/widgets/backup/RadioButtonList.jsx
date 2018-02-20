import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RadioButtonList extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.items = props.items.slice(0);
    }

    handleChange(event) {
        const target = event.target;
        const selected = this.items[target.value];
        const value = selected ? selected.value : null;
        this.props.onChange({ target: {
            name: this.props.name,
            value: value
        }});
    }

    render() {
        var items = this.items;
        return items.map((item, index) =>
            <div className="radio" key={index}>
                <label>
                    <input type="radio" name={this.props.name} value={index}
                    checked={this.props.value===item.value} onChange={this.handleChange} />
                    {item.label}
                </label>
            </div>
        );
    }
}

RadioButtonList.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    items: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
};

RadioButtonList.defaultProps = {
    value: null,
    items: [],
    onChange: () => null
};

export default RadioButtonList;
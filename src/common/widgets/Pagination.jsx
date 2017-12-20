import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * display a pagination link base on total page, current page
 * highlight active page
 * click on a item will set it to active
 * expose an event when item is clicked
 */
class Pagination extends Component {

    constructor(props) {
        super(props);
    }

    onClick(page) {
        this.props.onChange(page);
    }

    range(min, max, step) {
        if (!max) return [];
        step = step || 1;
        var result = [];
        for (var i = min; i <= max; i += step) {
            result.push(i);
        }
        return result;
    }

    renderFirst() {
        return (this.props.page > 1 && <li>
            <a role="button" onClick={() => this.onClick(1)}>
                <span className="glyphicon glyphicon-step-backward" aria-hidden="true"></span>
            </a>
        </li>);
    }

    renderPrevious() {
        return (this.props.page > 1 && <li>
            <a role="button" onClick={() => this.onClick(this.props.page - 1)}>
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            </a>
        </li>);
    }

    renderNext() {
        return (this.props.page < this.props.pageCount && <li>
            <a role="button" onClick={() => this.onClick(this.props.page + 1)}>
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            </a>
        </li>);
    }

    renderLast() {
        return (this.props.page < this.props.pageCount && <li>
            <a role="button" onClick={() => this.onClick(this.props.pageCount)}>
                <span className="glyphicon glyphicon-step-forward" aria-hidden="true"></span>
            </a>
        </li>);
    }

    renderItem(page) {
        return (<li key={page} className={page === this.props.page ? 'active' : ''}>
            <a role="button" onClick={() => this.onClick(page)}>{page}</a>
        </li>)
    }

    renderItems() {
        let range = 3, current = this.props.page, total = this.props.pageCount;
        return this.range(Math.max(current - range, 1), Math.min(current + range, total))
            .map((item) => this.renderItem(item));
    }

    render() {
        return (this.props.pageCount > 1 &&
            <ul className="pagination pagination-sm">
                {this.renderFirst()}
                {this.renderPrevious()}
                {this.renderItems()}
                {this.renderNext()}
                {this.renderLast()}
            </ul>
        );
    }
}

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    pageCount: PropTypes.number.isRequired,
    onChange: PropTypes.func,
};

Pagination.defaultProps = {
    onChange: () => null
};

export default Pagination;
import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import filter from 'lodash/filter';

import { EmptyMessage } from './EmptyMessage';
const Table = ({ items, renderRow, renderHeader, renderMessage }) => {
  const isEmpty = items.length === 0;
  const header = renderHeader({ disabled: !isEmpty });
  const headerColumns = React.Children.toArray(
    React.Children.only(header).props.children,
  );
  const columnCount = filter(headerColumns, column => !!column).length;
  return (
    <table className="table table-hover table-bordered">
      <thead disabled={isEmpty}>{header}</thead>
      <tbody>
        {!isEmpty ? (
          map(items, renderRow)
        ) : (
          <EmptyMessage
            emptyMessage={renderMessage}
            columnCount={columnCount}
          />
        )}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  items: PropTypes.array,
  renderMessage: PropTypes.node,
  renderHeader: PropTypes.func.isRequired,
  renderRow: PropTypes.func.isRequired,
};

Table.defaultProps = {
  items: [],
};

export default Table;

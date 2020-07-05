import React from 'react';
import PropTypes from 'prop-types';

export const EmptyMessage = ({ emptyMessage, columnCount }) => (
  <tr>
    <td colSpan={columnCount} className="empty">
      <div className="empty-message text-center text-muted">{emptyMessage}</div>
    </td>
  </tr>
);

EmptyMessage.propTypes = {
  columnCount: PropTypes.number.isRequired,
  emptyMessage: PropTypes.node,
};

EmptyMessage.defaultProps = {
  emptyMessage: null,
};

export default EmptyMessage;

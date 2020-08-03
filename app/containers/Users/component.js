/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
// import startCase from 'lodash/startCase';
import './componet.css';
// import { Panel } from 'primereact/panel';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
// import history from '../../utils/history';

const Users = ({ users, loadUsers }) => {
  const [layout, setLayout] = useState('list');
  const [selectedUser, setSelectedUser] = useState(null);
  const [visible, setVisible] = useState(false);
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [sortField, setSortField] = useState(null);
  useEffect(() => {
    loadUsers();
  }, []);
  const onSortChange = event => {
    const { value } = event;
    let sort_Order;
    let sort_Field;
    const sort_Key = value;

    if (value.indexOf('!') === 0) {
      sort_Order = -1;
      sort_Field = value.substring(1, value.length);
    } else {
      sort_Order = 1;
      sort_Field = value;
    }
    setSortOrder(sort_Order);
    setSortField(sort_Field);
    setSortKey(sort_Key);
  };

  // const navigateToUser = id => {
  //   history.push(`/user/${id}`);
  // };
  const renderListItem = user => (
    <div className="p-col-12">
      <div className="user-details">
        <div>
          <img src={user.avatar_url} alt={user.avatar_url} />
          <div className="p-grid">
            <div className="p-col-12">
              login: <b>{user.login}</b>
            </div>
            <div className="p-col-12">
              type: <b>{user.type}</b>
            </div>
            <div className="p-col-12">
              node_id: <b>{user.node_id}</b>
            </div>
            <div className="p-col-12">
              avatar_url: <b>{user.avatar_url}</b>
            </div>
          </div>
        </div>
        <Button
          icon="pi pi-search"
          onClick={() => {
            setSelectedUser(user);
            setVisible(true);
          }}
        />
      </div>
    </div>
  );
  // const renderGridItem = user => (
  //   <div style={{ padding: '.5em' }} className="p-col-12 p-md-3 Gridview">
  //     <Panel header={user.login} style={{ textAlign: 'center' }}>
  //       <img src={user.avatar_url} alt={user.avatar_url} />
  //       <div className="user-detail">
  //         {user.type} - {user.node_id}
  //       </div>
  //       <Button
  //         icon="pi pi-search"
  //         onClick={() => {
  //           setSelectedUser(user);
  //           setVisible(true);
  //         }}
  //       />
  //     </Panel>
  //   </div>
  // );
  const renderUserDialogContent = () => {
    if (selectedUser) {
      return (
        <div
          className="p-grid"
          style={{ fontSize: '16px', textAlign: 'center', padding: '20px' }}
        >
          <div className="p-col-12" style={{ textAlign: 'center' }}>
            <img src={selectedUser.avatar_url} alt={selectedUser.avatar_url} />
          </div>

          <div className="p-col-4">Login: </div>
          <div className="p-col-8">{selectedUser.login}</div>

          <div className="p-col-4">Type: </div>
          <div className="p-col-8">{selectedUser.type}</div>

          <div className="p-col-4">Node_id: </div>
          <div className="p-col-8">{selectedUser.node_id}</div>

          <div className="p-col-4">avatar_url: </div>
          <div className="p-col-8">{selectedUser.avatar_url}</div>
        </div>
      );
    }

    return null;
  };

  const renderHeader = () => {
    const sortOptions = [
      { label: 'Newest First', value: '!year' },
      { label: 'Oldest First', value: 'year' },
      { label: 'Brand', value: 'brand' },
    ];

    return (
      <div className="p-grid">
        <div className="p-col-6" style={{ textAlign: 'left' }}>
          <Dropdown
            options={sortOptions}
            value={sortKey}
            placeholder="Sort By"
            onChange={onSortChange}
            style={{ width: '12em' }}
          />
        </div>
        <div className="p-col-6" style={{ textAlign: 'right' }}>
          <DataViewLayoutOptions
            layout={layout}
            onChange={e => setLayout(e.value)}
          />
        </div>
      </div>
    );
  };

  const header = renderHeader();
  // const itemTemplate = (user, layout) => {
  //   if (!user) {
  //     return;
  //   }

  //   if (layout === 'list') return renderListItem(user);
  //   if (layout === 'grid') return renderGridItem(user);
  // };
  return (
    <div className="dataview-demo">
      <DataView
        value={users}
        layout={layout}
        header={header}
        itemTemplate={renderListItem}
        paginatorPosition="both"
        paginator
        rows={20}
        sortOrder={sortOrder}
        sortField={sortField}
      />
      <Dialog
        header="user Details"
        visible={visible}
        modal
        onHide={() => setVisible(false)}
      >
        {renderUserDialogContent()}
      </Dialog>
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      login: PropTypes.string.isRequired,
    }),
  ),
  loadUsers: PropTypes.func,
};

export default Users;

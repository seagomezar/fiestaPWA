import React from 'react';

export default class GuestLayout extends React.PureComponent {
  render() {
    // eslint-disable-next-line
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

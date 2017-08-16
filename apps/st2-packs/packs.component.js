import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Menu from '../../modules/st2-menu/menu.component';
import PacksPanel from './packs-panel.component';

export default class Packs extends React.Component {
  static propTypes = {
    context: React.PropTypes.object,
    routes: React.PropTypes.array
  }

  render() {
    return <Provider store={store}>
      <div className="wrapper">
        <Menu {...this.props} />
        <PacksPanel {...this.props} />
      </div>
    </Provider>;
  }
}

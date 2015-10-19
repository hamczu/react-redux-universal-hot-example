import React, { Component, PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';

// todo: move to config
const title = 'React Redux Example';
const description = 'All the modern best practices in one example.';
const image = 'https://react-redux.herokuapp.com/logo.jpg';

const meta = {
  title,
  description,
  meta: {
    charSet: 'utf-8',
    property: {
      'og:site_name': title,
      'og:image': image,
      'og:locale': 'en_US',
      'og:title': title,
      'og:description': description,
      'twitter:card': 'summary',
      'twitter:site': '@erikras',
      'twitter:creator': '@erikras',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image,
      'twitter:image:width': '200',
      'twitter:image:height': '200'
    }
  }
};

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  static fetchData(getState, dispatch) {
    const promises = [];
    if (!isInfoLoaded(getState())) {
      promises.push(dispatch(loadInfo()));
    }
    return Promise.all(promises);
  }

  render() {
    return (
      <div>
        <DocumentMeta {...meta}/>
        {this.props.children}
      </div>
    );
  }
}

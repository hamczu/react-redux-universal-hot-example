import React, { Component } from 'react';
import { Link } from 'react-router';
import { CounterButton } from 'components';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
        <div className={styles.counterContainer}>
          <CounterButton multireducerKey="counter1"/>
          <CounterButton multireducerKey="counter2"/>
          <CounterButton multireducerKey="counter3"/>
        </div>
      </div>
    );
  }
}

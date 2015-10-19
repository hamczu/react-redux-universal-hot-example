import React, { Component } from 'react';
import { CounterButton } from 'components';

export default class Home extends Component {
  render() {
    const styles = require('./Home.css');
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
        <div className={styles.counterContainer}>
          <CounterButton multireducerKey="counter1"/>
          <CounterButton multireducerKey="counter2"/>
          <CounterButton multireducerKey="counter3"/>
        </div>
        <img src={logoImage}/>
      </div>
    );
  }
}

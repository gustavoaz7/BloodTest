import React, { Component } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { ThemeProvider } from 'styled-components/native';
import Routes from './routes';
import { theme } from './theme';

const postGroteskLight = require('../assets/fonts/PostGrotesk-Light.ttf');

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({ 'PostGrotesk-Light': postGroteskLight });

    this.setState({ isLoadingComplete: true });
  }

  render() {
    const { isLoadingComplete } = this.state;

    if (!isLoadingComplete) return <AppLoading />;

    return (
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    );
  }
}

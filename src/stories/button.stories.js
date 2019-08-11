import React from 'react';
import { storiesOf } from '@storybook/react';
// import { Button } from '@storybook/react/demo';
import Button from '../components/buttons/buttons.jsx';
debugger;
// https://medium.com/@emmawedekind/documenting-react-components-with-storybook-6c83abe7cb29
storiesOf('Button', module)
  .add('default primary button', () => (
    <Button color='primary'>Primary</Button>
  ))
  .add('block', () => (
    <Button color='primary' block>Block Button</Button>
  ));

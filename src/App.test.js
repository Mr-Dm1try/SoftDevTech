import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react'
import'@testing-library/jest-dom/extend-expect'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders selector being enabled and visible', () => {
  const { getByTestId } = render(<App />);
  const selector = getByTestId('selector');
  expect(selector).toBeInTheDocument();
  expect(selector).toBeVisible();
  expect(selector).toBeEnabled();
});

it('renders selector with correct initial text', () => {
  const { getByTestId } = render(<App />);
  const selector = getByTestId('selector');
  expect(selector).toBeInTheDocument();
  expect(selector).toHaveTextContent('Andorra');
});

it('renders correct initial image', () => {
  const { getByTestId } = render(<App />);
  const image = getByTestId('image');
  expect(image).toBeInTheDocument();
  expect(image).toHaveProperty('src','https://www.countryflags.io/AD/shiny/64.png');
});
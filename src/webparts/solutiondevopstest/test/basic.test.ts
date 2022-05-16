/// <reference types="jest" />

import * as React from 'react';
import { configure, mount, ReactWrapper } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Solutiondevopstest from '../components/Solutiondevopstest';
import { ISolutiondevopstestProps } from '../components/ISolutiondevopstestProps';

describe('Enzyme basics', () => {

  let reactComponent: ReactWrapper<ISolutiondevopstestProps, {}>;

  beforeEach(() => {

    reactComponent = mount(React.createElement(
      Solutiondevopstest,
      {
        description: "Description",
         test:"test",
         test1:true, 
         test2:"test2",
         test3:true
      }
    ));
  });

  afterEach(() => {
    reactComponent.unmount();
  });

  it('should root web part element exists', () => {

    // define the css selector
    let cssSelector: string = '#spfxTest';

    // find the element using css selector
    const element = reactComponent.find(cssSelector);
    expect(element.length).toBeGreaterThan(0);
  });

  it('should has the correct title', () => {

    // Arrange
    // define contains/like css selector
    let cssSelector: string = 'h1';

    // Act
    // find the element using css selector
    const text = reactComponent.find(cssSelector).text();

    // Assert
    expect(text).toBe("SPFx Test webpart");  
  });
});

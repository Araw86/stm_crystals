import React, { Component, Fragment } from 'react';
import {
  Button,
  Typography,
  Box,
  TextField,
  InputAdornment
} from '@material-ui/core';

const components = {
  Fragment: Fragment,
  Button: Button,
  Typography: Typography,
  Box: Box,
  TextField: TextField,
  InputAdornment: InputAdornment,
  b: 'b',
  i: 'i',
  div: 'div'
};

export class RandomComponentConstructor extends Component {
  // constructor(props) {
  //   super(props);
  // }

  propertySearch(objectToSearch) {
    let returnedObject = {};
    //search over every property in object
    // console.log('--> Enter Property search: ');
    for (let property in objectToSearch) {
      // console.log('Property: ' + property);
      const propertyContent = objectToSearch[property];
      // console.log(propertyContent);
      // check if property content is object or array;
      if (Array.isArray(propertyContent)) {
        // console.log('property is an array');
        //map throu array elements and generate content for all of them
        returnedObject[property] = propertyContent.map(object => {
          return this.propertySearch(object);
        });
      } else if (typeof propertyContent === 'object') {
        //investigate object content
        // console.log('property is an object');
        let { type } = propertyContent;
        console.log(type);
        if (type === undefined) {
          // console.log('property content is object calling property search');
          returnedObject[property] = this.propertySearch(propertyContent);
        } else {
          // console.log(
          //   'property content is Component calling Component creator'
          // );
          returnedObject[property] = (
            <RandomComponentConstructor data={propertyContent} />
          );
        }
        // childrenContent = <RandomCompontConstructor data={property} />;
      } else {
        // console.log('property is srting or var');
        //children is variable or string
        returnedObject[property] = propertyContent;
      }
    }
    // console.log(returnedObject);
    // console.log('<-- return from propery search function');
    return returnedObject;
  }

  propertyChildren(children) {
    let childrenContent;
    if (children !== undefined) {
      //check if children is object or array;
      if (Array.isArray(children)) {
        //map throu childrens and generate content fro all of them
        children.forEach(object => {
          childrenContent.push(<RandomComponentConstructor data={object} />);
        });
      } else if (typeof children === 'object') {
        //generate children component
        childrenContent = <RandomComponentConstructor data={children} />;
      } else {
        //children is variable or string
        childrenContent = children;
      }
    } else {
      childrenContent = ''; //children content is not existing
      console.log('Children content is not existing');
    }
    return childrenContent;
  }

  render() {
    // console.log(this.props);
    const { data } = this.props; //get data where is generating info
    if (!components.hasOwnProperty(data.type)) {
      console.log('No componenty or tag type found found');
      return <Fragment></Fragment>;
    }
    const GeneratedComponent = components[data.type];
    const { children, ...restOfProps } = data.props; //get children
    const { mapedProps, mapedChildren } = data;
    let childrenContent;
    if (mapedChildren === undefined) {
      childrenContent = this.propertyChildren(children);
    } else {
      childrenContent = this.props[mapedChildren.prop];
    }
    //check if children is defined
    // if (children !== undefined) {
    //   //check if children is object or array;
    //   if (Array.isArray(children)) {
    //     //map throu childrens and generate content fro all of them
    //     children.forEach(object => {
    //       childrenContent.push(<RandomCompontConstructor data={object} />);
    //     });
    //   } else if (typeof children === 'object') {
    //     //generate children component
    //     childrenContent = <RandomCompontConstructor data={children} />;
    //   } else {
    //     //children is variable or string
    //     childrenContent = children;
    //   }
    // } else {
    //   childrenContent = ''; //children content is not existing
    //   console.log('Children content is not existing');
    // }

    let propertyContent = this.propertySearch(restOfProps);
    // if (label !== undefined) {
    //   // console.log(label);
    //   propertyContent = { label: <Fragment>{label}</Fragment> };
    // }

    // for (var property in restOfProps);
    // {...propertyContent}

    //check if we have mapedProperty
    if (mapedProps !== undefined) {
      mapedProps.forEach(element => {
        propertyContent[element.propName] = this.props[element.stateID]; //add properrty value from this.props to component property
      });
    }

    return (
      <GeneratedComponent {...propertyContent}>
        {/* <GeneratedComponent {...restOfProps}> */}
        {childrenContent}
      </GeneratedComponent>
    );
  }
}

export default RandomComponentConstructor;

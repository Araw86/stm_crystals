import React, { Component, Fragment } from 'react';
import { Button, Typography, Box } from '@material-ui/core';
// const data = {
//   // React: ...and Button told me this! I guess I'm done.
//   type: 'Box',
//   props: {
//     style: { borderStyle: 'solid', borderColor: 'green' },
//     m: 2,
//     children: {
//       type: 'Button',
//       props: {
//         children: {
//           type: 'b',
//           props: {
//             children: 'OK!'
//           }
//         }
//       }
//     }
//   }
// };
const components = {
  Button: Button,
  Typography: Typography,
  Box: Box,
  b: 'b',
  i: 'i',
  div: 'div'
};

export class RandomCompontConstructor extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { data } = this.props; //get data where is generating info
    if (!components.hasOwnProperty(data.type)) {
      console.log('No componenty or tag type found found');
      return <Fragment></Fragment>;
    }
    const GeneratedComponent = components[data.type];
    const { children, ...restOfProps } = data.props; //get children
    let childrenContent;
    //check if children is defined
    if (children !== undefined) {
      //check if children is object or array;
      if (Array.isArray(children)) {
        //map throu childrens and generate content fro all of them
        children.forEach(object => {
          childrenContent.push(<RandomCompontConstructor data={object} />);
        });
      } else if (typeof children === 'object') {
        //generate children component
        childrenContent = <RandomCompontConstructor data={children} />;
      } else {
        //children is variable or string
        childrenContent = children;
      }
    } else {
      childrenContent = ''; //children content is not existing
      console.log('Çhildren content is not existing');
    }

    return (
      <GeneratedComponent {...restOfProps}>
        {childrenContent}
      </GeneratedComponent>
    );
  }
}

export default RandomCompontConstructor;

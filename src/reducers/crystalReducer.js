import * as TYPES from '../actions/types';

const initialState = {
  lsef: 32768,
  lsec0: 0,
  lsecl: 0,
  lseesr: 0,
  lsegmcrit: 0
};
function calculateGM({ c0, cl, esr, f }) {
  let gmcrit =
    4 *
    esr *
    1e3 *
    Math.pow(2 * Math.PI * f, 2) *
    Math.pow((cl + c0) * 1e-12, 2) *
    1e6;
  gmcrit = Number(gmcrit.toFixed(4));
  return { gmcrit: gmcrit };
}

function calculatePpm({ fmeas, fnom }) {
  // ppm = (Fmeas/Fnom - 1)x1000 000
  const ppm = (fmeas / fnom - 1) * 10000000;
  const roundedPpm = Number(ppm.toFixed(2));
  return { ppm: roundedPpm };
}

function calculateCl12({ cs, cl }) {
  let cl12 = (cl - cs) * 2;
  if (cl12 !== this.state.cl12) {
    return { cl12: cl12 };
  }
  return {};
}

const searchFor = [
  {
    payload: ['lsec0', 'lsecl', 'lseesr'], //list of wanter properties
    call: calculateGM,
    callFormat: [
      { s: 'lsec0', d: 'c0' },
      { s: 'lsecl', d: 'cl' },
      { s: 'lseesr', d: 'esr' },
      { s: 'lsef', d: 'f' }
    ],
    returnFormat: [{ d: 'lsegmcrit', s: 'gmcrit' }]
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.UPDATE_STATE:
      //create new state from action payload
      var newState = { ...state, ...action.payload };
      //use all patterns on input data
      searchFor.forEach(element => {
        const propertyName = Object.keys(action.payload); //get all property names from action
        if (element.payload.includes(propertyName[0])) {
          //check if the action property name is in payload list
          let prepareArguments = {};
          //prepare all arguments used in call function
          element.callFormat.forEach(element => {
            prepareArguments[element.d] = newState[element.s]; //now copy the action propery into empty object
          });
          //all function to handle calculation
          const resultObj = element.call(prepareArguments);
          let newStateElement = {};
          //now modify output data into state
          element.returnFormat.forEach(element => {
            newStateElement[element.d] = resultObj[element.s];
          });
          //funaly update state with result from call function
          newState = { ...newState, ...newStateElement };
        }
      });
      return newState;
    default:
      return state;
  }
}

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

const searchFor = [
  {
    payload: ['lsec0', 'lsecl', 'lseesr'],
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
      var newState = { ...state, ...action.payload };
      searchFor.forEach(element => {
        const propertyName = Object.keys(action.payload);
        if (element.payload.includes(propertyName[0])) {
          let prepareArguments = {};
          element.callFormat.forEach(element => {
            prepareArguments[element.d] = newState[element.s];
          });
          const resultObj = element.call(prepareArguments);
          let newStateElement = {};
          element.returnFormat.forEach(element => {
            newStateElement[element.d] = resultObj[element.s];
          });
          newState = { ...newState, ...newStateElement };
        }
      });
      return newState;
    default:
      return state;
  }
}

import * as TYPES from '../actions/types';

const initialState = {
  lsef: 32768,
  lsec0: 0,
  lsecl: 0,
  lseesr: 0,
  lsegmcrit: 0
};
function calculateGM(newState) {
  const { lsec0, lsecl, lseesr, lsef } = newState;
  let lsegmcrit =
    4 *
    lseesr *
    1e3 *
    Math.pow(2 * Math.PI * lsef, 2) *
    Math.pow((lsecl + lsec0) * 1e-12, 2) *
    1e6;
  lsegmcrit = Number(lsegmcrit.toFixed(4));
  console.log(lsegmcrit);
  return { ...newState, lsegmcrit: lsegmcrit };
  // const { c0, cl, esr, f } = this.state;
  // let gmcrit =
  //   4 *
  //   esr *
  //   1e3 *
  //   Math.pow(2 * Math.PI * f, 2) *
  //   Math.pow((cl + c0) * 1e-12, 2) *
  //   1e6;
  // gmcrit = Number(gmcrit.toFixed(4));
  // console.log(gmcrit);
  // return gmcrit;
}

const searchFor = [
  { payload: ['lsec0', 'lsecl', 'lseesr'], call: calculateGM }
];

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.UPDATE_STATE:
      var newState = { ...state, ...action.payload };
      searchFor.forEach(element => {
        const propertyName = Object.keys(action.payload);
        if (element.payload.includes(propertyName[0])) {
          newState = element.call(newState);
        }
      });
      return newState;
    default:
      return state;
  }
}

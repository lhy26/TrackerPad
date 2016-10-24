import{BS_CHECK_REQUEST,
      BS_CHECK_SUCCESSFULL,
      BS_CHECK_FAIL}
from '../actions/trackerUtilActions'

const initialTracker = {
  doBScheck:0
    fs:{
      a:'hello',
      z:'is it me',
      d:'you looking for'
      },
    bs:{a:'hello',
        z:'its',
        d:'me'
        }
  };

const trackerReducer = (state = initialTracker, action) => {
  switch(action.type){
    case BS_CHECK_SUCCESSFULL:{
      return Object.assign({}, state,  {
        doBScheck: state.doBScheck+1,
          fs:{
            a:'',
            z:'',
            d:''
            },
          bs:{a:'',
              z:' ',
              d:''
              }
      });
  }
    case BS_CHECK_FAIL:{
      return Object.assign({}, state,  {
          doBScheck:state.doBScheck
      });
    }
  }
  return state;
}
export default trackerReducer

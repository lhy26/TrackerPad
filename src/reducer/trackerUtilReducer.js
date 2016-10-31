import{CHANGE_MEASUREMENT_CONFIG_REQUEST,
      CHANGE_MEASUREMENT_CONFIG_SUCCESSFULL,
      CHANGE_MEASUREMENT_CONFIG_FAIL}
from '../actions/trackerUtilActions'

const initialTracker = {
  changeMeasurementConfig:'single',
  doBScheck:0,
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
    case CHANGE_MEASUREMENT_CONFIG_SUCCESSFULL:{
      return Object.assign({}, state,  {
        changeMeasurementConfig:'double',
        });
  }
    case CHANGE_MEASUREMENT_CONFIG_FAIL:{
      return Object.assign({}, state,  {
          changeMeasurementConfig:state.changeMeasurementConfig
      });
    }
  }
  return state;
}
export default trackerReducer

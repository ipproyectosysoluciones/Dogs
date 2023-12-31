import {
  API_DB_FILTER,
  GET_ALL_DOGS,
  GET_ALL_TEMPERAMENTS,
  GET_DOG_BY_ID,
  GET_DOGS_BY_NAME,
  SORT_FILTER_A_Z,
  TEMPERAMENT_FILTER,
  SORT_FILTER_WEIGHT,
  RESET_FILTER,
  RESET_DOG,
  RESET_DOGS,
  RESET_LOADING

} from './actions-types.js';

const initialState = {
  dogs: [],
  dog: [],
  temperaments: [],
  loading: false,
  filter: false
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_DOGS:
      return { 
        ...state, 
        dogs: payload, 
        filter: true, 
        loading: true 
      }
    case GET_ALL_TEMPERAMENTS:
      return { 
        ...state, 
        temperaments: payload 
      }
    case GET_DOG_BY_ID:
      return { 
        ...state, 
        dog: payload, 
        loading: true 
      }
    case GET_DOGS_BY_NAME:
      return { 
        ...state, 
        dogs: payload, 
        filter: true, 
        loading: true 
      }
    case SORT_FILTER_A_Z:
      return { 
        ...state, 
        dogs: payload, 
        filter: true, 
        loading: true 
      }
    case TEMPERAMENT_FILTER:
      return { 
        ...state, 
        dogs: payload, 
        filter: true 
      }
    case API_DB_FILTER:
      return { 
        ...state, 
        dogs: payload, 
        filter: true 
      }
    case SORT_FILTER_WEIGHT:
      return { 
        ...state, 
        dogs: payload, 
        filter: true 
      }
    case RESET_FILTER:
      return { 
        ...state, 
        filter: false 
      }
    case RESET_DOG:
      return { 
        ...state, 
        dog: [] 
      }
    case RESET_DOGS:
      return { 
        ...state, 
        dogs: [] 
      }
    case RESET_LOADING:
      return { 
        ...state, 
        loading: false 
      }
    default:
      return { 
        ...state 
      };
  }
}

export default reducer;
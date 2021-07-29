import {types} from './types';

export const getFoodsActionCreator = (foods) => {
  return {
    type: types.FOODS,
    foods,
  };
};

export const getFoodsAction = () => async (dispatch) => {
  try {
    dispatch({type: types.FOODS_LOADING, loading: true});
    //Api call
    let foods = [];

    foods = [
      {id: 1, title: 'An awesome recipe', time: 15},
      {id: 1, title: 'Tomatto sauce', time: 25},
      {id: 1, title: 'Rice', time: 10},
      {id: 1, title: 'Pasta', time: 24},
      {id: 1, title: 'Amlet', time: 40},
    ];

    const delay = await new Promise((resolve) =>
      setTimeout(() => resolve(), 1000),
    );
    dispatch({type: types.FOODS_LOADING, loading: false});
    dispatch(getFoodsActionCreator(foods));
  } catch (error) {
    dispatch({type: types.FOODS_LOADING, loading: false});

    if (error.message === 'Network Error') {
      dispatch({
        type: types.NETWORK_ERROR,
        error: error.message,
      });
    } else {
      dispatch({
        type: types.NETWORK_ERROR,
        error: 'Unknown Error',
      });
    }
  }
};

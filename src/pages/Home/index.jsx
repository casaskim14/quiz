// import { connect } from 'react-redux';
// import Home from './home';

// const mapStateToProps = ({ products, loading, errors }) => ({
//   products,
//   loading: loading.some(
//     x => x.action === 'LOAD_PRODUCTS' || x.action === 'LOAD_CART',
//   ),
//   hasError: errors.some(
//     x => x.action === 'LOAD_PRODUCTS' || x.action === 'LOAD_CART',
//   ),
// });

// const mapDispatchToProps = dispatch => ({
//   loadProducts: () =>
//     dispatch({
//       type: 'LOAD_PRODUCTS_REQUEST',
//       payload: {
//         url: '660/products',
//         method: 'get',
//       },
//       meta: {
//         loadingId: -1,
//       },
//     }),
//   loadCart: () =>
//     dispatch({
//       type: 'LOAD_CART_REQUEST',
//       payload: {
//         url: '660/cart',
//         method: 'get',
//       },
//       meta: {
//         loadingId: -1,
//       },
//     }),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Home);

import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = ({
  user,
  results,
  loading,
  errors,
}) => ({
  user,
  results,
  loading: loading.some(
    x => x.action === 'LOAD_RESULTS',
  ),
  hasError: errors.some(
    x => x.action === 'LOAD_RESULTS',
  ),
});

const mapDispatchToProps = dispatch => ({
  loadResults: user => {
    console.log(user);
    dispatch({
      type: 'LOAD_RESULTS_REQUEST',
      payload: {
        url: `660/results?user_id=${user.user.id}`,
        method: 'get',
      },
      meta: { loadingId: -1 },
    });
  },
  quizStart: () =>
    dispatch({ type: 'QUIZ_START' }),
  logout: () => dispatch({ type: 'LOGOUT' }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

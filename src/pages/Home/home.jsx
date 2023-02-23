// import React, { useCallback, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import Product from '../../components/Product';

// function Home({ loadProducts, loadCart, products, loading, hasError }) {
//   const loadData = useCallback(async () => {
//     await Promise.all([loadProducts(), loadCart()]);
//   }, [loadProducts, loadCart]);

//   useEffect(() => {
//     loadData();
//   }, [loadData]);

//   if (loading) {
//     return <h1 data-testid="loading">Loading...</h1>;
//   }

//   if (hasError) {
//     return <h1 data-testid="error">Something went wrong...</h1>;
//   }

//   return (
//     <div data-testid="products-info">
//       {products.map(product => (
//         <Product key={product.id} product={product} />
//       ))}
//     </div>
//   );
// }

// Home.propTypes = {
//   loadProducts: PropTypes.func.isRequired,
//   loadCart: PropTypes.func.isRequired,
//   products: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       description: PropTypes.string.isRequired,
//       category: PropTypes.string.isRequired,
//       image: PropTypes.string.isRequired,
//       rating: PropTypes.exact({
//         rate: PropTypes.number.isRequired,
//         count: PropTypes.number.isRequired,
//       }).isRequired,
//     }),
//   ).isRequired,
//   loading: PropTypes.bool.isRequired,
//   hasError: PropTypes.bool.isRequired,
// };

// export default Home;

import React, {
  useCallback,
  useEffect,
} from 'react';
import {
  Link,
  useNavigate,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import History from '../../components/History';
import Title from '../../components/Title';

function Home({
  user,
  results,
  loading,
  loadResults,
  hasError,
  logout,
  quizStart,
}) {
  useEffect(() => {
    loadResults(user);
  }, [loadResults]);

  console.log('results: ', results);

  return (
    <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 lg:px-8 ">
      <div className="text-center">
        <Title />
        <p className="m-8 text-4xl font-medium">
          {`Welcome ${user.user.name}!`}
        </p>
        <div className="">
          <Link
            to="/quiz"
            className="btn rounded-full"
            onClick={() => quizStart()}
          >
            Begin
          </Link>
        </div>
        <div>
          <button
            type="button"
            className="mt-8 btn bg-red-500 relative rounded-full"
            onClick={logout}
          >
            Logout
          </button>
        </div>

        <div
          className="mt-4 grid grid-cols2 gap-2 text-center border-2 rounded-3xl"
          style={
            {
              // borderTop: '1px solid black',
              // paddingTop: '1rem',
            }
          }
        >
          <h1
            className="m-2 text-center text-lg font-medium"
            style={{ textTransform: 'uppercase' }}
          >
            Your History
          </h1>
          <div
            className="mt-4 grid grid-cols-2 gap-2 text-center"
            style={
              {
                // borderTop: '1px solid black',
                // paddingTop: '1rem',
              }
            }
          >
            {results.history.length != 0 ? (
              results.history.map((x, index) => (
                <History
                  key={index}
                  details={x}
                  counter={index + 1}
                />
              ))
            ) : (
              <p className="text-xs font-light italic text-gray-400 ">
                No history available!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

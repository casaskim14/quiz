// const error = () => next => async action => {
//   const { type, payload, meta } = action;
//   const match = /(.*)_(FAIL)/.exec(type);
//   if (match) {
//     next({
//       type,
//       meta,
//       payload: {
//         message: payload.message,
//         title: `${type
//           .split('_')
//           .map((x, i) => {
//             if (i === 0) {
//               return `${x[0].toUpperCase()}${x.slice(1).toLocaleLowerCase()}`;
//             }
//             return x.toLocaleLowerCase();
//           })
//           .join(' ')} fail`,
//       },
//     });
//   } else {
//     next(action);
//   }

//   //   const {
//   //     user: { user },
//   //   } = store.getState();
//   //   const match = /(.*)_(FAIL)/.exec(action.type);

//   //   if (match) {
//   //     await axiosInstance.post('errors', {
//   //       user,
//   //       ...action.payload,
//   //       createdAt: new Date(),
//   //     });
//   //   }

//   //   next(action);
// };

// export default error;

import axiosInstance from '../utils/axiosInstance';

const error = store => next => async action => {
  const {
    user: { user },
  } = store.getState();

  const { type, payload, meta } = action;

  const match = /(.*)_(FAIL)/.exec(action.type);

  if (match) {
    const data = {
      user,
      type,
      payload: {
        message: payload.message,
        title: `${type
          .split('_')
          .map((x, i) => {
            if (i === 0) {
              return `${x[0].toUpperCase()}${x
                .slice(1)
                .toLocaleLowerCase()}`;
            }
            return x.toLocaleLowerCase();
          })
          .join(' ')}`,
      },
      meta,
      createdAt: new Date(),
    };

    await axiosInstance
      .post('/errors', data)
      .then(
        res => {
          next(action);
        },
        err => {
          const errors =
            JSON.parse(
              localStorage.getItem('errors'),
            ) || [];
          localStorage.setItem(
            'errors',
            JSON.stringify([...errors, data]),
          );
          next(action);
        },
      );
  } else {
    next(action);
  }
};

export default error;

import React from 'react';

function History({ details, counter }) {
  return (
    <div className="m-4 px-4 py-2 col-span-1  rounded-lg bg-white text-left shadow-xl transition-all">
      <div className="text-center">
        <div className="flex justify-center items-center font-normal text-lg">
          <div className="flex">
            <div className="font-bold text-2xl">
              Attemp #{' '}
            </div>
            <div className="ml-2 font-light text-2xl">
              {counter}
            </div>
          </div>
        </div>
        {/* <div className='flex'> */}
        {/* <div className='font-bold text-lg'>Date: </div> */}
        <div className="ml-2 font-light text-xs">
          {new Date(
            details.datetime,
          ).toDateString()}
        </div>
        {/* </div> */}
        <div className="mt-4 flex justify-center items-center font-normal text-lg">
          <div className="flex">
            <div className="font-bold text-lg">
              Correct{' '}
            </div>
            <div className="ml-2 font-light text-lg">
              {details.correct}
            </div>
          </div>
          <div className="flex">
            <div className="ml-4 font-bold text-lg">
              Score{' '}
            </div>
            <div className="ml-2 font-light text-lg">
              {details.score}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;

'use client'
import React from 'react';
import { LineWave } from 'react-loader-spinner'
const Loading = () => {
    return (
        <div className='flex justify-center items-center py-24'>
            
            <LineWave
  visible={true}
  height="100"
  width="100"
  color="#000"
  ariaLabel="line-wave-loading"
  wrapperStyle={{}}
  wrapperClass=""
  firstLineColor=""
  middleLineColor=""
  lastLineColor=""
  />
        </div>
    );
}

export default Loading;
import React from 'react';
import Logo from '../Logo/logo';

const Loader = ({loading}) => {
  return (
    <div className={loading ? "loading" : "non-display"}>
      <Logo loader={true}/>
    </div>
  )
};

export default Loader;
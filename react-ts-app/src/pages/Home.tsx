import React from 'react';
import NavHeader from 'src/components/NavHeader/NavHeader';
import 'src/globalStyles/mainStyles.scss';

function Home() {
  return (
    <div className="Home Body">
      <NavHeader />
      <h1>HOME</h1>
    </div>
  );
}

export default Home;
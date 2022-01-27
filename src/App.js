import React from 'react';
import { Route } from 'react-router-dom';

import Main from './Main';
import Review from './Review';

function App() {
  return (
    <div className = "App">
      <Route path="/" component={Main} exact/>
      <Route path="/review/:week_arr" component={Review} />
      {/* 동적 라우팅 꼭! week_arr에 있는걸 받아와서 review 주소창에 더해준다 */}
    </div>
  );
}

export default App;
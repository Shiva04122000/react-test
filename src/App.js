import { useState } from 'react'
import './App.css';
import data from './data.json'


function App() {

  const [user, setUser] = useState(data);
  console.log(user)

  return (
    <>
      <h1 className='heading'>List of Github Users</h1>
      <div className="main">

        {user.map((currElem) => {
          return (
            <div className="card">
              <img src={currElem.avatar_url} alt="" />
              <div className="inner">
                <span className='name'>{currElem.login}</span>
                <span className='followers'>following/other_user</span>
                <div className="social-numbers">
                  <div className="article">
                    Articles <br />
                    38
                  </div>
                  <div className="follower">
                    follower <br />
                    980
                  </div>
                  <div className="following">
                    following <br />
                    80
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        
      </div>
    </>

  );
}

export default App;

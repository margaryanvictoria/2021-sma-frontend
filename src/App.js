import Login from './screens/Login';
import { ReactComponent as Logo } from './assets/icons/logo.svg';

function App() {
  return (
    <div style={{backgroundColor: '#F1F1F1'}} className='w-screen h-screen'>
      <div className='w-full h-full flex items-center'>
        <div className='bg-white w-96 h-96 mx-auto flex flex-col px-16 justify-center rounded-2xl shadow-lg'>
          <Logo />
          <h1>Log into Bitr</h1>
          <div className='flex flex-col space-y-5 my-5'>
            <input type='text' placeholder='username'
              className='border border-green-500 px-2 py-1 rounded-lg focus:outline-none' />
            <input type='password' placeholder='password'
              className='border border-green-500 px-2 py-1 rounded-lg focus:outline-none' />
          </div>
          <div className='flex space-x-3'>
            <button type='button'
              className='focus:outline-none w-full px-2 py-1 text-sm rounded-full border border-green-500 text-gray-400'>
                Sign Up</button>
            <button type='button'
              className='focus:outline-none w-full px-2 py-1 text-sm rounded-full border border-green-500 text-gray-400'>
                Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

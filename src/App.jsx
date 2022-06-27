import React from 'react'
import Home from './components/Home';
import SimpleBarReact from 'simplebar-react'

const App = () => {
  return (
    <SimpleBarReact id="app">
      <Home />
    </SimpleBarReact>
  )
}

export default App;
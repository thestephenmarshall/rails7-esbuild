import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'

const App = () => (
  <main>
    <Header />
    <p>
      {"This is a very basic example of Rails 7 using ESBuild."}
    </p>
  </main>
)

window.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('app'))
})

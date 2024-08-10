import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import New from './Beg'

function MyApp(){
  return (
    <div>
      <h1>Custom ViteAPP | Class-4</h1>
    </div>
  )
}


// const ReactElement = {
//       type: 'a',
//       props: {
//           href: 'https://google.com',
//           target: '_blank'
//       },
//       children: 'Click me to visit google'
//   }


const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

const anotherUser = 'vinita'
const ReactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank'},
  'Click me to visit google ',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).
render(
  ReactElement
  // <MyApp />
  // <React.StrictMode>
  //
  //   {/* <New /> */}
  // </React.StrictMode>,
)

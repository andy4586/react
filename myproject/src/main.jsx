import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyApp from './App.jsx'

const anotherElement = (
    <a href="https://google.com" target='_blank'> Google</a>
)

const anotheruser = '  Page'

const reactElement = React.createElement( 
    'a',
    { href: 'https://reactjs.org', target: '_blank' },
    ' React',
    anotheruser
)



createRoot(document.getElementById('root'))
.render(
    <StrictMode>
        <MyApp />
        {anotherElement}
        {reactElement}
    </StrictMode>
)

import React from 'react'

// This is an example of functional components

function BasicGreet(){
    return <div className='basicFunctionComponent'>
            <h1> Hello Gandus !</h1>
            </div>
}


//with ES6 arrow function syntax:


//if we use export here in arrow function line, then we have to import it by same name in App.js
// export 
export const Greet = () => <div className='functionComponent'> 
                    <h1> Hello Gandus, from  Arrow Function Component </h1>
                    </div>

//we need to export the component in order to import in App.js

// export default Greet //this is a default export. And we can use anyname while importing it into App.js

export default BasicGreet




import React, { useState } from 'react'

const UseForm = (recipes) => {
  
  var [val,setval] = useState(recipes)
    return [val,(event)=>{
        setval({
            ...val,[event.target.name]:event.target.value
        })
    }]
}

export default UseForm
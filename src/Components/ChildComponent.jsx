import React from "react"


const ChildComponent = React.memo(({name}) =>{
    console.log('Child Component Render')
    return(
        <h2>Child Component - Name : {name}</h2>
    )
})

export default ChildComponent

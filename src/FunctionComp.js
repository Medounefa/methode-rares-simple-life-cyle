import React from "react";

function FunctionComp(props){

    console.log('%c render() du Function enfant ','color:purple');

    return(
        <div>
         <p>
           <span className='purple'>Function Component : </span>
           {props.name}
        </p>
        </div>
    )

}

export default React.memo(FunctionComp);

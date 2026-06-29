import {memo, useRef} from "react";

 export const Counts = memo(() =>{
    const renderCount =useRef(0);
    console.log(renderCount);

    return (
        <>
            <p>
                Nothing Changes here but i have render: (to see why memo was created)
                <span>{renderCount.current++} times(s)</span>
            </p>
        </>
    )
}
 )
//export default memo(Counts);

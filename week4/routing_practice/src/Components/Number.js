import { useParams } from "react-router-dom";

const Number = (props)=> {
    const { number } = useParams();
    const Body = isNaN(number) ? 'word' : 'number'
    return(
        <div>
            <h1 style={{textAlign:'center'}}>The {Body} is: { number }</h1>
        </div>
    )
}

export default Number
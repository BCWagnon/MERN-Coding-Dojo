import { useParams } from "react-router-dom";

const BlueRed = (props)=> {
    const { word } = useParams();
    const { textColor } = useParams();
    const { backgroundColor } = useParams();
    const Body = isNaN(word) ? 'word' : 'number'
    return(
        <div>
            <h1 style={{textAlign:'center', color:textColor, backgroundColor:backgroundColor }}>The {Body} is: { word }</h1>
        </div>
    )
}

export default BlueRed
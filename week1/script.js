const ParentPersonCard = (props) => {
    return (
        <div>
            <ChildPersonCard firstName = {"Nandor"} lastName = {"The Relentless"} age = {760} hairColor = {"Brown"}/>
        </div>
    );
}





const ChildPersonCard = (prop) => {
    return (
    <div>
        <h1>{props.lastName}, {props.firstName}</h1>
        <p>Age: {props.age}</p>
        <p>Hair Color: {props.hairColor}</p>
    </div>
    )
};
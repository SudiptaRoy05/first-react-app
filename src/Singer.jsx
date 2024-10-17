export default function Singer({singer}){

    const {name, age} = singer
    console.log(Singer);
    return(
        <>
            <h3>Singer : {name}</h3>
            <p>Age : {age} </p>
        </>
    )
}
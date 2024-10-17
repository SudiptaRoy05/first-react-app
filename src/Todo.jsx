

export default function Todo({task, isDone}){
//    if(isDone === true){
//     return <li>Finished : {task}</li>
//    }else{
//     return <li>Incomplete : {task}</li>
//    }
    return (
        isDone? <li>Finished {task}</li> : <li>Incomplete : {task}</li>
    )

}
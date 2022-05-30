import * as S from "./style"
import {GoTrashcan} from "react-icons/go"
import {GrEdit} from "react-icons/gr"
import { useContext } from "react"
import { TaskContext } from "../../Providers/TaskContext"

export const Task = (props) => {

    const{ deleteTask, editTask } = useContext(TaskContext)
    
    return <S.Task color={props.color}>
        <h3>Descrição:</h3>
        <p>{props.description}</p>
        <h3>Prazo:</h3>
        <p>{props.date}</p>
        <div className="icons">
        <GrEdit onClick={()=>editTask(props.index)}/>
        <GoTrashcan onClick={()=>deleteTask(props.index)}/>
        </div>
    </S.Task>
}
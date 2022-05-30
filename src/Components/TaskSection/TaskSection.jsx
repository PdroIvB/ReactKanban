import { useContext } from "react"
import { TaskContext } from "../../Providers/TaskContext"
import { Task } from "../Task/Task"
import * as S from "./style"

export const TaskSection = (props) => {

    let {tasksArray} = useContext(TaskContext)

    return <S.TaskSection color={props.color}>
        <div className="sectionTitle">
            <h2>{props.title}</h2>
        </div>
        {
            tasksArray.map((task, index) => {
                if (task.status === props.status) {
                    return <Task description={task.description} date={task.date} status={task.status} key={index} index={index} color={props.color} /> 
                }
            })

        }
    </S.TaskSection>
}
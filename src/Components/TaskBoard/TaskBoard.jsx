import { useContext } from "react"
import {IoMdAddCircleOutline} from "react-icons/io"
import { TaskContext } from "../../Providers/TaskContext"
import { TaskSection } from "../TaskSection/TaskSection"
import * as S from "./style"

export const TaskBoard = (props) => {

    const{openModal} = useContext(TaskContext)

    return <S.TaskBoard>
        <div className="legend">
            <div>
                <h1>{props.children}</h1>
            </div>
            <div className="sideIcons">
                <IoMdAddCircleOutline onClick={()=>openModal()} id="addTaskIcon"/>
            </div>
        </div>
        <div className="board">
        <TaskSection title="A Fazer" status="todo" color={"#D21B1B"}/>
        <TaskSection title="Fazendo" status="doing" color={"#DFD600"}/>
        <TaskSection title="Finalizado" status="done" color={"#0CE155"}/>
        </div>
    </S.TaskBoard>
}
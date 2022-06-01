import { useContext } from "react"
import {IoMdAddCircleOutline} from "react-icons/io"
import { TaskContext } from "../../Providers/TaskContext"
import { TaskSection } from "../TaskSection/TaskSection"
import * as S from "./style"

export const TaskBoard = (props) => {

    const{openTaskModal, sectionsArray, openSectionModal} = useContext(TaskContext)

    return <S.TaskBoard>
        <div className="legend">
            <div>
                <h1>{props.children}</h1>
            </div>
            <div className="sideIcons">
            <p>Adicionar Tarefa</p><IoMdAddCircleOutline onClick={()=>openTaskModal()} id="addTaskIcon"/>
            <p>Adicionar Seção</p><IoMdAddCircleOutline onClick={()=>openSectionModal()} id="addSectionIcon"/>
            </div>
        </div>
        <div className="board">
            {
                sectionsArray.map((section, index)=>{
                    return <TaskSection title={section.title} status={section.status} color={section.color} key={index}/>
                })
            }
        </div>
    </S.TaskBoard>
}
import { Task } from "../Task/Task"
import { TaskSection } from "../TaskSection/TaskSection"
import * as S from "./style"

export const TaskBoard = (props) => {

    return <S.TaskBoard>
        <div className="legend">
            <h1>{props.children}</h1>
        </div>
        <div className="board">
        <TaskSection title="A Fazer" status="todo" color={"#D21B1B"}/>
        <TaskSection title="Fazendo" status="doing" color={"#DFD600"}/>
        <TaskSection title="Finalizado" status="done" color={"#0CE155"}/>
        </div>
    </S.TaskBoard>
}
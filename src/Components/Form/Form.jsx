import { useContext } from "react"
import { TaskContext } from "../../Providers/TaskContext"
import { TbArrowBackUp } from "react-icons/tb";
import * as S from "./style"

export const Form = (props) => {

    const { closeTaskModal } = useContext(TaskContext);

    return <S.Form>
        <div className="legend">
            <div>
                <h1>{props.title}</h1>
            </div>
            <div className="sideIcons">
                <TbArrowBackUp onClick={props.closeModal} id="arrowBack"/>
            </div>
        </div>
        {props.children}
    </S.Form>
}
import { useContext } from "react"
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import { TaskContext } from "../../Providers/TaskContext"
import { TbArrowBackUp } from "react-icons/tb";
import * as S from "./style"

export const Form = (props) => {

    const {
        date,
        setDate,
        description,
        setDescription,
        setStatus,
        handleDataNAddTask,
        closeModal
    } = useContext(TaskContext);



    return <S.Form>
        <div className="legend">
            <div>
                <h1>{props.children}</h1>
            </div>
            <div className="sideIcons">
                <TbArrowBackUp onClick={()=>closeModal()} id="arrowBack"/>
            </div>
        </div>
        <div className="inputs">
        <Input placeholder="Descrição" type="text" legend="Sua Tarefa" value={description} onInput={(e)=>setDescription(e.target.value)} ></Input>

        <Input placeholder="Prazo" type="date" legend="Prazo" value={date} onInput={(e)=>setDate(e.target.value)}></Input>

        <Input placeholder="Status" type="select" legend="Selecione o Status" onChange={(e)=>setStatus(e.target.value)}></Input>
        </div>
        <Button type="submit" onClick={()=>handleDataNAddTask()}>Inserir Tarefas</Button>

    </S.Form>
}
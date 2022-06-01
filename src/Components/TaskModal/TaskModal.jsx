import { useContext } from "react"
import { TaskContext } from "../../Providers/TaskContext"
import Modal from "react-modal"
import { Form } from "../Form/Form"
import { Input } from "../Input/Input"
import { Button } from "../Button/Button"

export const TaskModal = () => {

    const { isTaskModalOpen,
        closeTaskModal,
        description,
        setDescription,
        date,
        setDate,
        setStatus,
        handleDataNAddTask,
    } = useContext(TaskContext)

    return <>
        <Modal isOpen={isTaskModalOpen} onRequestClose={closeTaskModal} overlayClassName="react-modal-overlay" className="react-modal-content">
            <Form title="Cadastrar uma Tarefa" closeModal={()=>closeTaskModal()}>
                <div className="inputs">            
                    <Input placeholder="Descrição" type="text" legend="Sua Tarefa" value={description} onInput={(e)=>setDescription(e.target.value)} ></Input>

                    <Input placeholder="Prazo" type="date" legend="Prazo" value={date} onInput={(e)=>setDate(e.target.value)}></Input>

                    <Input placeholder="Status" type="select" legend="Selecione o Status" onChange={(e)=>setStatus(e.target.value)}></Input>
                </div>

            <Button type="submit" onClick={()=>handleDataNAddTask()}>Inserir Tarefas</Button>
            </Form>
    </Modal>
    </>
}
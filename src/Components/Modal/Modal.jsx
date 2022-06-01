import { useContext } from "react"
import { TaskContext } from "../../Providers/TaskContext"
import Modal from "react-modal"
import { Form } from "../Form/Form"

export const NewModal = () => {

    const { isOpen, closeModal } = useContext(TaskContext)

    return <Modal isOpen={isOpen} onRequestClose={closeModal} overlayClassName="react-modal-overlay" className="react-modal-content">
        <Form>Cadastrar uma Tarefa</Form>
    </Modal>
}
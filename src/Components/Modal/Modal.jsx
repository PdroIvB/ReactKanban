import { useContext } from "react"
import { TaskContext } from "../../Providers/TaskContext"
import Modal from "react-modal"
import { Form } from "../Form/Form"

export const NewModal = () => {

    const { isOpen, setModal, closeModal } = useContext(TaskContext)

    return <Modal isOpen={isOpen} onRequestClose={closeModal} overlayClassName="react-modal-overlay" className="react-modal-content">
        <Form>Cadastrar uma Tarefa</Form>
    </Modal>

    {/* // <>
    // <Modal isOpen={isOpen} onRequestClose={closeModal} overlayClassName="react-modal-overlay" className="react-modal-content">
    //     <h1>Preencha todos os campos!</h1>
    //     <button onClick={()=>setModal(false)}>Fechar Modal</button>
    // </Modal>
    // </> */}
}
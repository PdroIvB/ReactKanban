import { Form } from "./Components/Form/Form.jsx";
import { NewModal } from "./Components/Modal/Modal.jsx";
import { TaskBoard } from "./Components/TaskBoard/TaskBoard.jsx";
import Modal from "react-modal"
import { useContext } from "react";
import { TaskContext } from "./Providers/TaskContext.jsx";

Modal.setAppElement("#root")

function App() {

    const{openModal} = useContext(TaskContext)

    return (
        <>
            <section className="container">
                <div className="title">
                    <h1>Gerenciador de Tarefas - Kanban</h1>
                </div>
                <TaskBoard>Quadro de Tarefas</TaskBoard>
                <NewModal isOpen={openModal}></NewModal>
            </section>
            
        </>
    );
}

export default App;

import { TaskModal } from "./Components/TaskModal/TaskModal.jsx";
import { SectionModal } from "./Components/SectionModal/SectionModal.jsx";
import { TaskBoard } from "./Components/TaskBoard/TaskBoard.jsx";
import Modal from "react-modal"
import { useContext } from "react";
import { TaskContext } from "./Providers/TaskContext.jsx";

Modal.setAppElement("#root")

function App() {

    const{openTaskModal,openSectionModal} = useContext(TaskContext)

    return (
        <>
            <section className="container">
                <div className="title">
                    <h1>Gerenciador de Tarefas - Kanban</h1>
                </div>
                <TaskBoard>Quadro de Tarefas</TaskBoard>
                <TaskModal isOpen={openTaskModal}/>
                <SectionModal isOpen={openSectionModal}/>
            </section>
            
        </>
    );
}

export default App;

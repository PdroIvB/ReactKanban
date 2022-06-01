import { useContext } from "react"
import { TaskContext } from "../../Providers/TaskContext"
import Modal from "react-modal"
import { Form } from "../Form/Form"
import { Input } from "../Input/Input"
import { Button } from "../Button/Button"

export const SectionModal = () => {

    const {
        sectionTitle,
        setSectionTitle,
        sectionStatus,
        setSectionStatus,
        handleSection,
        sectionColor,
        setSectionColor,
        isSectionModalOpen,
        closeSectionModal
    } = useContext(TaskContext)

    return <Modal isOpen={isSectionModalOpen} onRequestClose={closeSectionModal} overlayClassName="react-modal-overlay" className="react-modal-content">
        <Form title="Criar nova seção" closeModal={()=>closeSectionModal()}>
            <div className="inputs">
                <Input placeholder="Título da seção" legend="Título" value={sectionTitle} onInput={(e)=>setSectionTitle(e.target.value)}/>
                <Input placeholder="Status da seção" legend="Status" value={sectionStatus} onInput={(e)=>setSectionStatus(e.target.value)}/>
                <Input placeholder="Cor da seção" legend="Cor" type="color" value={sectionColor} onInput={(e)=>setSectionColor(e.target.value)}/>
            </div>
            <Button type="submit" onClick={()=>handleSection()}>Criar Seção</Button>
        </Form>
    </Modal>
}
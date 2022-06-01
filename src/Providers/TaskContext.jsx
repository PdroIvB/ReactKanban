import { createContext, useState } from "react";


export const TaskContext = createContext({});

export const TaskProvider = (props) => {

    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("")
    const [sectionTitle, setSectionTitle] = useState("")
    const [sectionStatus, setSectionStatus] = useState("")
    const [sectionColor, setSectionColor] = useState("")

    const [isTaskModalOpen, setTaskModal] = useState(false)
    const [isSectionModalOpen, setSectionModal] = useState(false)
    
    //TODO Fazer a função de adicionar uma nova seção
    const [sectionsArray,addSectionNoArray] = useState([
        {
            title:"A Fazer",
            status: "todo",
            color: "#D21B1B"
        },
        {
            title:"Fazendo",
            status: "doing",
            color: "#DFD600"
        },
        {
            title:"Finalizado",
            status: "done",
            color: "#0CE155"
        }
    ])
    
    const [tasksArray, addTaskNoArray] = useState([
        {
            description:"Uma tarefa que ainda tem que ser feita",
            date: "2020-10-10",
            status:"todo"
        },
        {
            description:"Aqui temos um card de uma tarefa que está sendo realizada",
            date: "2000-31-31",
            status: "doing"
        },
        {
            description:"E aqui uma tarefa que já foi concluída",
            date: "9999-99-99",
            status:"done"
        }
    ])

    //TODO Estudar o dragNdrop pra alterar o status da task
    function handleDataNAddTask(){
        if(description === "" || date === "" || status==="-1"){
            //TODO adicionar um alerta de "preencher inputs", usar a biblioteca que a Luana indicou
            return
        } else {
            const newTask = {
                description:description,
                date: date,
                status:status
            }
    
            let allTasks = tasksArray;
            allTasks.push(newTask);
            addTaskNoArray(allTasks);
            clearTaskInputs();
            closeTaskModal();
        }
    }

    function handleSection(){
        const newSection = {
            title:sectionTitle,
            status:sectionStatus,
            color:sectionColor
        }

        let allSections = sectionsArray;
        allSections.push(newSection);
        addSectionNoArray(allSections);
        clearSectionInputs();
        closeSectionModal();
    }

    function clearTaskInputs(){
        setDate("")
        setDescription("")
        setStatus("-1")
    }

    function clearSectionInputs(){
        setSectionTitle("")
        setSectionStatus("")
        setSectionColor("")
    }

    function deleteTask (index) {
        let filteredTasks = tasksArray.filter((element, i)=>i !== index)
        addTaskNoArray(filteredTasks)
    }

    function editTask (index) {
        setDescription(tasksArray[index].description);
        setDate(tasksArray[index].date);
        setStatus(tasksArray[index].status);
        openTaskModal();

        deleteTask(index)
    }

    function openTaskModal () {
        setTaskModal(true)
    }

    function closeTaskModal() {
        setTaskModal(false)
    }

    function openSectionModal(){
        setSectionModal(true)
    }

    function closeSectionModal() {
        setSectionModal(false)
    }

    return <TaskContext.Provider
        value={{
            tasksArray,
            addTaskNoArray,
            date,
            setDate,
            description,
            setDescription,
            status,
            setStatus,
            handleDataNAddTask,
            clearTaskInputs,
            deleteTask,
            editTask,
            isTaskModalOpen,
            setTaskModal,
            openTaskModal,
            closeTaskModal,
            sectionsArray,
            addSectionNoArray,
            sectionTitle,
            setSectionTitle,
            sectionStatus,
            setSectionStatus,
            handleSection,
            sectionColor,
            setSectionColor,
            clearSectionInputs,
            openSectionModal,
            closeSectionModal,
            isSectionModalOpen,
            setSectionModal
            }}>
            
        {props.children}
    </TaskContext.Provider>
}
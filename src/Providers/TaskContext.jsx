import { createContext, useState } from "react";


export const TaskContext = createContext({});

export const TaskProvider = (props) => {

    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("")

    const [isOpen, setModal] = useState(false)
    
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

    function handleDataNAddTask(){
        if(description === "" || date === "" || status==="-1"){
            openModal()
            console.log("preencher todos os campos")
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
            clearInputs()
        }
    }

    function clearInputs(){
        setDate("")
        setDescription("")
        setStatus("-1")
    }

    function deleteTask (index) {
        let filteredTasks = tasksArray.filter((element, i)=>i !== index)
        addTaskNoArray(filteredTasks)
    }

    function editTask (index) {
        setDescription(tasksArray[index].description)
        setDate(tasksArray[index].date)
        setStatus(tasksArray[index].status)

        deleteTask(index)
    }

    function openModal () {
        setModal(true)
    }

    function closeModal() {
        setModal(false)
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
            clearInputs,
            deleteTask,
            editTask,
            isOpen,
            setModal,
            openModal,
            closeModal
            }}>
            
        {props.children}
    </TaskContext.Provider>
}
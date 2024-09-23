import { useState } from "react"

type TodoItem ={
    label: string,
    checked: boolean
}

const TodoList = () => {
    const [input,setInput] = useState("");
    const [list,setList] = useState<TodoItem[]>([]);

    //events
    const handleAddEvent = () =>{
        setList([...list, {label:input, checked:false} ])
    }
    const handleRemoveEvent = (index:number) => {
        const novoArray = list.filter((element,key) => key !== index ) 
        setList(novoArray);
    }
    const handleToggleEvent  = (index:number) =>{
        let cloneArray = [...list];
        cloneArray[index].checked = !cloneArray[index].checked; //vai inverter de o valor boolean atual
        setList(cloneArray)
    }

    //Render
    return(
        <section className="w-svw h-screen flex flex-col gap-7">
            <div className="flex justify-start items-center flex-col mt-7 gap-2">
                <h1 className="text-center text-4xl">Adicionar Tarefa</h1>
                <div className="flex flex-row gap-6">
                    <input 
                        type="text" 
                        value={input}
                        onChange={key => setInput(key.target.value)}
                        placeholder="Insira a tarefa aqui"
                        className="text-black text-center"
                    />
                    <button onClick={handleAddEvent}> Adicionar </button>
                </div>
            </div>
            <div className="flex justify-start items-center flex-col">
                <div>{list.length > 1? `você tem ${list.length} itens`: `você tem ${list.length} item`}</div>
                <ol>
                    {list.map((element,index) => (
                        <li key={index} className="flex gap-2">
                            <input type="checkbox" name="checked" id="checked" checked={element.checked} onClick={() => handleToggleEvent(index)}/>
                            {element.label} - <button className="hover:underline" onClick={() => handleRemoveEvent(index)}>[ deletar ]</button>
                        </li>))}
                </ol>
            </div>
        </section>
    )
}

export{TodoList}

//TODO Fazer Refatoração
//TODO  Adicionar Responsividade(para celulares)
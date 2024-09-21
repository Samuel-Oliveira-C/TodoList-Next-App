import { useState } from "react"

type TodoItem ={
    label: string,
    checked: false
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
                <div></div>
                <ol>
                    {list.map((element,index) => (
                        <li key={index}>{element.label} - <button className="hover:underline" onClick={() => handleRemoveEvent(index)}>[ deletar ]</button></li>))}
                </ol>
            </div>
        </section>
    )
}

export{TodoList}

//TODO Fazer o botão de remover
//TODO fazer o checkbox
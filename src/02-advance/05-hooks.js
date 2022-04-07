import React, { useCallback, useEffect, useState , useMemo, useRef, useContext } from 'react'

const todolistContext = React.createContext()

export default function App() {
    // inputRef = React.createRef()

    const [tasks, setTasks] = useState([])

    const inputRef = useRef()

    useEffect(() => {
        setTasks([
            { id: 1, name: '吃饭' },
            { id: 2, name: '睡觉' },
            { id: 3, name: '打豆豆' }
        ])
    },[])

    const addTask = useCallback(() => {
            setTasks([...tasks, { id: tasks.length + 1, name: inputRef.current.value }])
            inputRef.current.value = ''
    }, [tasks])

    const deleteTask = useCallback((index) => {
        let newList = [...tasks]
        newList.splice(index, 1)
        // delete 是直接删除属性，并没有通过数组的内部方法，导致列表长度并没有变化 
        // delete newList[index]
        // console.log(newList)
        setTasks([...newList])
    },[tasks])
    const itemList = useMemo(() => {
        return <ul>
        {
            tasks.map((item, index) => {
                return <Myli key={item.id} item={item} index={index}></Myli>
            })
        }
    </ul>
    }, [tasks])

    return (<todolistContext.Provider value={{
        deleteTask
    }}>
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={addTask}>添加</button>
            {itemList}
            {tasks.length===0 && <p>暂无待办</p>}
        </div>
        </todolistContext.Provider>
    )
}

function Myli (props){
    const context = useContext(todolistContext)
    const {item, index} = props
    useEffect(()=>{
        const timer = setInterval(() => {
            console.log('正在运行')
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <li>{item.name}
        <button onClick={()=>context.deleteTask(index)}>删除</button>
        </li>
    )
}
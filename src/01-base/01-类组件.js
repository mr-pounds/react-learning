import react from 'react'

// 类的名称必须大写，不然会被识别为html的标签
class App extends react.Component{
    render(){
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        )
    }
}

export default App
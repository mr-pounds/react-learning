import React, { Component } from 'react'

export default class App extends Component {
    inputRef = React.createRef()
    state = {
        taks: [
            {id:1,name:'吃饭'},
            {id:2,name:'睡觉'},
            {id:3,name:'打豆豆'}
        ],
    }
  render() {
    return (
      <div>
          <input type="text" ref={this.inputRef}/>
          <button onClick={()=>this.addTask()}>添加</button>
          <ul>
              {
                  this.state.taks.map((item, index)=>{
                      return <li key={item.id}>{item.name}
                            {/* <button onClick={this.handleDelClick.bind(this, index)}>删除</button> */}
                            <button onClick={()=>this.handleDelClick2(index)}>删除</button>
                      </li>
                  })
              }
          </ul>
          {/* 写法1 */}
          {/* {this.state.taks.length==0?<p>暂无待办</p>:null} */}
          {/* 写法2 */}
          {/* {this.state.taks.length===0 && <p>暂无待办</p>} */}
      </div>
    )
  }

  addTask(){
    //   console.log(this.inputValue)
        this.setState({
            taks:[...this.state.taks,{id:this.state.taks.length+1,name:this.inputRef.current.value}],
        })
        this.inputRef.current.value = ''
  }

  handleDelClick(index){
        console.log('删除', index)
  }

  handleDelClick2(index){
    
    let newList = [...this.state.taks]
    newList.splice(index,1)
    // delete 是直接删除属性，并没有通过数组的内部方法，导致列表长度并没有变化 
    // delete newList[index]
    console.log(newList)
    this.setState({
        taks:newList
    })
    }
}

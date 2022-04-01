import React, { Component } from 'react'

// 这个方法就是通过父子通信的方式实现，但是若有多层父子关系，那么传递就会很麻烦，所以我们可以通过context或者订阅/发布来实现
export default class App extends Component {
    films = [
        {
            'name': '黑衣人',
            'id': '1'
        },
        {
            'name': '黑衣人2',
            'id': '2'
        },
        {
            'name': '黑衣人3',
            'id': '3'
        },
        {
            'name': '黑衣人4',
            'id': '4'
        }
    ]

    state = {
        currentFilm: this.films[0]
    }

  render() {
    return (
      <div>
          <ul>
              {this.films.map((film) => {
                  return <MyLi key={film.id} name={film.name} onClickEvent={()=>this.changeFilm(film.id)}></MyLi>
              })}
          </ul>
          <div>
              <MySpan content={this.state.currentFilm}></MySpan>
          </div>
      </div>
    )
  }

  changeFilm(id){
        this.setState({
            currentFilm: this.films.find((film) => {
                return film.id === id
            })
        })
  }
}


class MyLi extends Component {
    render() {
        return (
            <li onClick={this.onClickEvent}>{this.props.name}</li>
        )
    }

    onClickEvent = (e) => {
        this.props.onClickEvent()
        // console.log(e.target)
    }
}


class MySpan extends Component {
    render() {
        return (
            <span>{this.props.content.name}</span>
        )
    }
}
import React, { Component } from 'react'

const FilmContext = React.createContext()

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

    // state = {
    //     currentFilm: this.films[0]
    // }

  render() {
    return (
        <FilmContext.Provider value={{
            films: this.films,
            currentFilm: '',
        }}>
            <div>
                <ul>
                    {this.films.map((film) => {
                        return <MyLi key={film.id} name={film.name}></MyLi>
                    })}
                </ul>
                <div>
                    <MySpan content={this.films[0].name}></MySpan>
                </div>
            </div>
      </FilmContext.Provider>
    )
  }
}


class MyLi extends Component {
    // constructor() {
    //     super()
    //     bus.subscribe()
    // }

    render() {
        return (
            <FilmContext.Consumer>
                {(context) => {
                    return <li onClick={() => {
                        context.currentFilm = this.props.name
                    }}>{this.props.name}</li>
                }}
            </FilmContext.Consumer>
        )
    }
}


class MySpan extends Component {

    render() {
        return (
            <FilmContext.Consumer>
                {(context) => {
                    return <span>{context.currentFilm}</span>
                }}
            </FilmContext.Consumer>
        )
    }
}
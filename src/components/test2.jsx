// class组件

import React from "react";

class Test2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "RuinGuard",
            arr: [{title: "title1", content: "content1"}, 
                  {title: "title2", content: "content2"},
                  {title: "title3", content: "content3"}]
        }
    }

    render() {
        setTimeout(() => {
            this.setState({
                name: "modify"
            })
        }, 1000)
        return (
            <div>
                <p> {this.state.name} </p>
                {
                    this.state.arr.map((item) => {
                        return (
                            <div>
                                <h1> {item.title} </h1>
                                <p> {item.content} </p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Test2
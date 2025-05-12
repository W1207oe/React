// 函数组件

import {react, useState} from "react"

// 组件首字母必须大写
function Test1() {
    let [objA, setA] = useState({
        name: "name"
    })

    let [R, changeR] = useState(true);

    const [cnt, setCnt] = useState(0);

    // console.log(cnt);

    setTimeout(() => {
        setA({
            name: "update"
        })
        setCnt(prev => prev + 1);
    }, 3000)

    let [show, changeShow] = useState(false);

    function showTab() {
        if(show) return <div> 123 </div>
    }

    function changeDiv() {
        let _show = !show
        changeShow(_show);
    }

    return (
        <div>
            <p> {objA.name} </p>
            {showTab()}
            <button onClick = {changeDiv}> {show ? '隐藏': '显示'} </button>
        </div>
    )
}

export default Test1
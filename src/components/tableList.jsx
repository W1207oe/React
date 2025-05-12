import React from "react";
import style from "./tableList.module.css"
import {CSSTransition} from "react-transition-group"
import "./transition.css";
import classNames from "classnames/bind";
const cls = classNames.bind(style)

class TableList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addGoodsPop: false,
            goodsInfo: {
                goodsName: "",
                stock: 998244353
            },
            tabChannel: 0,
            arr1: [
                {goodsName: "电脑", stock: 100},
                {goodsName: "手机", stock: 100},
                {goodsName: "平板", stock: 100}
            ],
            arr2: [
                {goodsName: "xxx电脑", price: "12000"},
                {goodsName: "yyy手机", price: "300"},
                {goodsName: "zzz平板", price: "4000"}
            ]
        }
    }

    changeTab(num) {
        this.setState({
            tabChannel: num
        })
    }

    contentOne() {
        let _content = <div>
            <button onClick = {this.showGoodsPop}> 添加商品 </button>
            {
                this.state.arr1.map(item => {
                    return <div><span> {item.goodsName} </span><span> {item.stock} </span></div>
                })
            }
        </div>
        return _content;
    }

    deleteGoods(name) {
        let _arr = [];
        this.state.arr2.forEach((item) => {
            if(item.goodsName != name) {
                _arr.push(item);
            }
        })
        this.setState({
            arr2: _arr
        })
    }

    contentTwo() {
        let _content = <div>
            {
                this.state.arr2.map(item => {
                    return <div>
                        <span> {item.goodsName} </span>
                        <span> {item.price} </span>
                        <span onClick = {this.deleteGoods.bind(this, item.goodsName)}> 删除 </span>
                    </div>
                })
            }
        </div>
        return _content;
    }

    showContent() {
        return this.state.tabChannel == 0 ? this.contentOne(): this.contentTwo();
    }
    
    tabNowIn(num) {
        return this.state.tabChannel == num ? cls("tab", "tab-on") : style.tab
    }

    showGoodsPop = () => {
        this.setState({
            addGoodsPop: true
        })
    }

    hiddenGoodsPop = () => {
        this.setState({
            addGoodsPop: false
        })
    }

    addGoodsConfirm = () => {
        let _arr = this.state.arr1;
        let _info = this.state.goodsInfo;
        _arr.push(_info);
        this.setState({
            arr1: _arr
        })
    }

    goodsNameChange = (e) => {
        let _info = this.state.goodsInfo;
        _info.goodsName = e.target.value;
        this.setState({
            goodInfo: _info
        })
    }

    stockChange = (e) => {
        let _info = this.state.goodsInfo;
        _info.stock = e.target.value;
        this.setState({
            goodInfo: _info
        })
    }

    render() {
        return (
            <div>
                <div className = {style["tab-choose"]}>
                    <div className = {this.tabNowIn(0)} onClick = {this.changeTab.bind(this, 0)}> 库存 </div>
                    <div className = {this.tabNowIn(1)} onClick = {this.changeTab.bind(this, 1)}> 商品 </div>
                </div>

                <CSSTransition in = {this.state.addGoodsPop} classNames = "addGoods" timeout = {1000}>
                    <div class = {style.hidden}>
                        <h1> 添加货品 </h1>
                        <div>
                            <label> 货品名字 </label>
                            <input value = {this.state.goodsInfo.goodsName} onChange = {this.goodsNameChange} />
                        </div>
                        <div>
                            <label> 库存 </label>
                            <input value = {this.state.goodsInfo.stock} onChange = {this.stockChange} />
                        </div>
                        <div>
                            <button onClick = {this.addGoodsConfirm}> 确认 </button>
                            <button onClick = {this.hiddenGoodsPop}> 取消 </button>
                        </div>
                    </div>
                </CSSTransition>

                <div>
                {
                    this.showContent()
                }
                </div>
            </div>
        )
    }
}

export default TableList
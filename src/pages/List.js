import React from 'react';
import { connect } from 'dva';

const namespace = "list";

// Connect page and model, return the data from model,
// and bind the data to this.props
const mapStateToProps = (state) => {
    const dataList = state[namespace].data;
    const maxNum = state[namespace].maxNum;
    return {
        dataList, maxNum
    }
}

// Bind defined functions into this.props in order to call functions in model
const mapDispatchToProps = (dispatch) => {
    return {// Bind the returned function into this.props
        add: function () {
            dispatch({ // Call function defined in model through dispatch
                type: namespace + "/addNewData"
            });
        }, 
        init: () => {
            dispatch({
                type: namespace + "/initData"
            });
        }
    }
}

@connect(mapStateToProps, mapDispatchToProps)
class List extends React.Component{

    componentDidMount() {
        this.props.init();
    }

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <ul>
                    {this.props.dataList.map((value,index) => {
                        return <li key={index}>{value}</li>
                    })}
                </ul>
                <button onClick={()=>{
                    this.props.add();
                }}>Add new number</button>
            </div>
        );
    }
}

export default List;
import React from 'react'
import {connect} from 'dva'
import {Table, Divider, Tag} from 'antd';

const {Column} = Table;
const namespace = 'userList';

@connect((state)=>{
    return {
        data : state[namespace].list
    }
}, (dispatch) => {
    return {
        initData : () => {
            dispatch({
                type: namespace + "/initData"
            });
        }
    }
})
class UserList extends React.Component {
    componentDidMount() {
        this.props.initData();
    }

    render() {
        return (
            <div>
                <Table dataSource={this.props.data} pagination=
                    {{position:"bottom",total:500,pageSize:10, defaultCurrent:3}}>
                    <Column title="Name" dataIndex="name" key="name"/>
                    <Column title="Age" dataIndex="age" key="age" />
                    <Column title="Address" dataIndex="address" key="address" />
                    <Column
                        title="Tags"
                        dataIndex="tags"
                        key="tags"
                        render={tags => (
                            <span>
                            {tags.map(tag => <Tag color="blue" key={tag}>{tag}
                            </Tag>)}
                            </span>
                        )}
                    />
                    <Column
                        title="Operation"
                        key="action"
                        render={(text, record) => (
                            <span>
                            <a href="javascript:;">Edit</a>
                            <Divider type="vertical"/>
                            <a href="javascript:;">Delete</a>
                            </span>
                        )}
                    />
                </Table>
            </div>
        );
    }
}

export default UserList;
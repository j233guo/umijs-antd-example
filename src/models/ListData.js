import request from '../util/request'

export default {
    namespace: 'list',
    state: {
        data: [],
        maxNum: 1
    },
    reducers: { // define some functions
        addNewData(state, result) { // state: the state data before update, result: data requested

            if (result.data) { // if state has data then return, initializing
                return result.data;
            }

            // return new state after update
            let maxNum = state.maxNum + 1;
            let list = [...state.data, maxNum];
            return ({ // return new state after update
                data : list,
                maxNum : maxNum
            });
        }
    },
    effects: { // Add effect for asynchrounous data loading
        *initData(params, sagaEffects) { // define async method
            const {call, put} = sagaEffects; // call and put method
            const url = "/ds/list"; // define requesting url
            let data = yield call(request, url); // execute the request
            yield put({ // call method from reducer
                type : "addNewData", // specify method
                data : data // pass the data from ajax
            });
        }
    }
}
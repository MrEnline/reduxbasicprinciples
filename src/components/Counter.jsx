import { connect } from 'react-redux';
//import { inc, dec, rnd } from './../actions';
import * as actions from './../actions';
import { bindActionCreators } from 'redux';

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={dec} className="btn btn-primary">
                DEC
            </button>
            <button onClick={inc} className="btn btn-primary">
                INC
            </button>
            <button onClick={rnd} className="btn btn-primary">
                RND
            </button>
        </div>
    );
};

//пример реализации на классовых компонентах
// class Counter extends components {
//     render() {
//         { counter, inc, dec, rnd } = this.props;
//         return (
//             <div className="jumbotron">
//                 <h1>{counter}</h1>
//                 <button onClick={dec} className="btn btn-primary">
//                     DEC
//                 </button>
//                 <button onClick={inc} className="btn btn-primary">
//                     INC
//                 </button>
//                 <button onClick={rnd} className="btn btn-primary">
//                     RND
//                 </button>
//             </div>
//         );
//     }
// }

const mapStateToProps = (state) => {
    return {
        counter: state.value,
    };
};

//1-й вариант реализации функции
// const mapDispatchToProps = (dispatch) => {
//     return {
//         inc: () => dispatch(inc()),
//         dec: () => dispatch(dec()),
//         rnd: () => dispatch(rnd(Math.floor(Math.random() * 10))),
//     };
// };

//2-й вариант реализации функции
// const mapDispatchToProps = (dispatch) => {
//     const { inc, dec, rnd } = actions;
//     return {
//         inc: () => dispatch(inc()),
//         dec: () => dispatch(dec()),
//         rnd: () => dispatch(rnd()),
//     };
// };

//3-й вариант реализации функции через bindActionCreators
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch);
// };

//export default connect(mapStateToProps, mapDispatchToProps)(Counter);
//экспорт ниже аналогичен закомментированному экспорту выше
export default connect(mapStateToProps, actions)(Counter);

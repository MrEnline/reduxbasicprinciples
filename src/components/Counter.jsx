import { useDispatch, useSelector } from 'react-redux';
//import { inc, dec, rnd } from './../actions';
import { inc, dec, rnd } from './../actions';

const Counter = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={() => dispatch(dec())} className="btn btn-primary">
                DEC
            </button>
            <button onClick={() => dispatch(inc())} className="btn btn-primary">
                INC
            </button>
            <button onClick={() => dispatch(rnd())} className="btn btn-primary">
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

export default Counter;

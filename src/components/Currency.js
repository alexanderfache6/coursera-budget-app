import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);

    // const [newCurrency, setNewCurrency] = useState(currency);

    

    return (
        // <div className="dropdown">
        //     <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //         {currency}
        //     </a>
        //     <ul className="dropdown-menu">
        //         <li><a className="dropdown-item" href="#">Action</a></li>
        //         <li><a className="dropdown-item" href="#">Another action</a></li>
        //         <li><a className="dropdown-item" href="#">Something else here</a></li>
        //     </ul>
        // </div>

        <div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
  <span className="caret"></span></button>
  <ul className="dropdown-menu">
    <li><a href="#">HTML</a></li>
    <li><a href="#">CSS</a></li>
    <li><a href="#">JavaScript</a></li>
  </ul>
</div>

        // <div classNameName='alert alert-secondary'>
        //     <span>Currency: {currency}</span>
        // </div>
    );
};
export default Currency;
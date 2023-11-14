// https://react-bootstrap.github.io/docs/components/dropdowns/

import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';

const Currency = () => {
    const { currency } = useContext(AppContext);
    
    const [currencyLong, setCurrencyLong] = useState();

    useEffect(() => {
        switch (currency) {
            case '$':
                setCurrencyLong('$ Dollar');
                break;
            case '£':
                setCurrencyLong('£ Pound');
                break;
            case '€':
                setCurrencyLong('€ Euro');
                break;
            case '₹':
                setCurrencyLong('₹ Ruppee');
                break;
        }
    }, [currency]);

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">Currency ({currencyLong})</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item value="$">$ Dollar</Dropdown.Item>
                <Dropdown.Item value="£">£ Pound</Dropdown.Item>
                <Dropdown.Item value="€">€ Euro</Dropdown.Item>
                <Dropdown.Item value="₹">₹ Ruppee</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default Currency;
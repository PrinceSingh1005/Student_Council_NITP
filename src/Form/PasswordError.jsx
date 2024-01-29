import React, { useState, useEffect } from 'react';
import { IoIosLock } from 'react-icons/io';
import { FaRegCircle, FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const PasswordError = ({ pass, isInputFocus }) => {
    
    const [caseIcon, setCaseIcon] = useState(<FaRegCircle color="white" size={12} />);
    const [symbolIcon, setSymbolIcon] = useState(<FaRegCircle color="white" size={12} />);
    const [lengthIcon, setLengthIcon] = useState(<FaRegCircle color="white" size={12} />);
    const [Color, setColor] = useState('sky');

    useEffect(() => {
        checkCase();
        checkSymbol();
        checkLength();
    }, [pass]);

    function hasBothUpperLowerCase(str) {
        return /[a-z]/.test(str) && /[A-Z]/.test(str);
    }
    const hasNumberOrSymbol = (input) => /[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(input);
    const isLengthValid = (input) => input.length >= 8;

    const checkCase = () => {
        if (pass === "") {
            setCaseIcon(<FaRegCircle color='black' size={12} />);
            setColor('blue')
        } else if (hasBothUpperLowerCase(pass)) {
            setCaseIcon(<FaCheck color='green' size={12} />);
        } else {
            setCaseIcon(<ImCross color='red' size={12} />);
            setColor('red');
        }
    };


    const checkSymbol = () => {
        if (pass === "") {
            setSymbolIcon(<FaRegCircle color='black' size={12} />);
        } else if (hasNumberOrSymbol(pass)) {
            setSymbolIcon(<FaCheck color='green' size={12} />);

        } else {
            setSymbolIcon(<ImCross color='red' size={12} />);
            setColor('red');
        }
    };

    const checkLength = () => {
        if (pass === "") {
            setLengthIcon(<FaRegCircle color='black' size={12} />);
        } else if (isLengthValid(pass)) {
            setLengthIcon(<FaCheck color='green' size={12} />);
        } else {
            setLengthIcon(<ImCross color='red' size={12} />);
            setColor('red');
        }
    };

    useEffect(() => {
        // Check if any icon has a red color, and set the border color accordingly
        if (
            caseIcon.props.color === 'red' ||
            symbolIcon.props.color === 'red' ||
            lengthIcon.props.color === 'red'
        ) {
            setColor('red');
        }
        else if (
            caseIcon.props.color === 'black' ||
            symbolIcon.props.color === 'black' ||
            lengthIcon.props.color === 'black'
        ) {
            setColor('sky');
        } else {
            setColor('green');
        }
    }, [caseIcon, symbolIcon, lengthIcon]);

    return (
        <>
            {isInputFocus && (
                <div className={`border-2 rounded-lg my-1 p-3 border-${Color}-500`}>
                    <div className={`flex gap-2`}>
                        <IoIosLock className={`text-${Color}-500`} size={25} />
                        <p className={`font-semibold text-${Color}-500`}>Your Password needs to:</p>
                    </div>
                    <div className={`flex gap-3 ml-9 items-center text-${caseIcon.props.color==='green'?'green':'black'}-500`}>
                        {caseIcon}
                        <p className='text-sm'>include both lower and upper case characters.</p>
                    </div>
                    <div className={`flex gap-3 ml-9 items-center text-${symbolIcon.props.color==='green'?'green':'black'}-500`}>
                        {symbolIcon}
                        <p className='text-sm'>include at least one number or symbol.</p>
                    </div>
                    <div className={`flex gap-3 ml-9 items-center text-${lengthIcon.props.color==='green'?'green':'black'}-500`}>
                        {lengthIcon}
                        <p className='text-sm'>be at least 8 characters long.</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default PasswordError;

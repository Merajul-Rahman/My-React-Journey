import { useState } from 'react';
export default function PasswordGenerator() {
    const [length, setLength] = useState(6);
    const [numberAllow, setNumberAllow] = useState(true);
    const [specialCharAllow, setSpecialCharAllow] = useState(false);
    const [uppercaseAllow, setUppercaseAllow] = useState(false);
    const [lowercaseAllow, setLowercaseAllow] = useState(true);

    const [numberofPasswords, setNumberOfPasswords] = useState(1);

    const [password, setPassword] = useState("");

    const handleRangeChange = (e) => {
        setLength(e.target.value);
        generatePassword();
    }
    function handleNumberofPasswords(e) {
        const value = Math.min(100, Math.max(1, Number(e.target.value)));
        setNumberOfPasswords(value);
        generatePassword();
    }
    function handleCheckboxChange(e) {
        const {name, checked} = e.target;
        if(name === "numberAllow") setNumberAllow(checked);
        else if(name === "specialCharAllow") setSpecialCharAllow(checked);
        else if(name === "uppercaseAllow") setUppercaseAllow(checked);
        else if(name === "lowercaseAllow") setLowercaseAllow(checked);
        generatePassword();
    }

    function generatePassword() {
        let charSet = "";
        const numbers = "0123456789";
        const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        if(numberAllow) charSet += numbers;
        if(specialCharAllow) charSet += specialChars;
        if(uppercaseAllow) charSet += uppercaseChars;
        if(lowercaseAllow) charSet += lowercaseChars;
        if(charSet === ""){
            alert("Please select at least one character type.");
            return;
        }
        let generatedPassword = "";
        for(let i = 0; i < numberofPasswords; i++){
            let tempPassword = "";
            for(let j = 0; j < length; j++){
                const randomIndex = Math.floor(Math.random() * charSet.length);
                tempPassword += charSet[randomIndex];
            }
            generatedPassword += tempPassword + (i !== numberofPasswords - 1 ? "\n" : "");
        }
        setPassword(generatedPassword);
    }


  return (
    <div className="min-h-screen">
        <h1 className="text-3xl p-4 mx-auto text-center  shadow-xl mb-5 bg-[#b8e2faff] rounded">Password Generator</h1>
        <div className="flex  w-full items-center justify-center gap-10">
            <div className='flex flex-col mx-4'>
                <label className='text-xl'>Select Password Length: {length}</label>
                <input type="range" 
                    value={length} 
                    onChange={handleRangeChange} 
                    className='cursor-pointer mx-4 w-60 max-w-60'
                />
            </div>
            <div className='flex flex-col mx-4'>
                <label className='text-xl'>Include Numbers</label>
                <input type="checkbox" 
                    checked={numberAllow}
                    name='numberAllow'
                    onChange={handleCheckboxChange}
                    className='cursor-pointer mx-4 w-6 h-6'
                />
            </div>
            <div className='flex flex-col mx-4'>
                <label className='text-xl'>Include Special Characters</label>
                <input type="checkbox" 
                    checked={specialCharAllow}
                    name='specialCharAllow'
                    onChange={handleCheckboxChange}
                    className='cursor-pointer mx-4 w-6 h-6'
                />
            </div>
            <div className='flex flex-col mx-4'>
                <label className='text-xl'>Include Uppercase Letters</label>
                <input type="checkbox" 
                    checked={uppercaseAllow}
                    name='uppercaseAllow'
                    onChange={handleCheckboxChange}
                    className='cursor-pointer mx-4 w-6 h-6'
                />
            </div>
            <div className='flex flex-col mx-4'>
                <label className='text-xl'>Include Lowercase Letters</label>
                <input type="checkbox" 
                    checked={lowercaseAllow}
                    name='lowercaseAllow'
                    onChange={handleCheckboxChange}
                    className='cursor-pointer mx-4 w-6 h-6'
                />
            </div>
        </div>
        <div className='flex w-full justify-center items-center gap-5'>
            <label className='text-xl'>Number of Passwords: </label>
            <input type="number" 
                value={numberofPasswords} 
                onChange={handleNumberofPasswords} 
                className='p-2 w-20 max-w-20 text-center'
                min={1}
                max={100}
            />
        </div>
        <div className='flex justify-center items-center mt-10'>
            <textarea className='w-1/3 min-h-[30vh]' value={password} ></textarea>
        </div>
        <div className='flex justify-center items-center mt-5'>
            <button className='bg-green-400 rounded-xl m-2 text-xl w-35 hover:bg-green-200 hover:text-lg' onClick={generatePassword}>Generate Password</button>
            <button className='bg-blue-400 border rounded-xl m-2 text-xl w-35 hover:bg-blue-200 hover:text-lg'>Copy to Clipboard</button>
        </div>
    </div>
  );
}
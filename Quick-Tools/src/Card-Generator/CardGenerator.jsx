import Card from './Card';
import './cardGenerator.css';
import { useState } from 'react';

export default function CardGenerator() {
    
    const [cardinfo, setCardInfo] = useState({
        name: "",
        desig: "",
        dept: "",
        orgName: "",
        email: "",
        mobile: "",
        ext: "",
        logo: "",
        link: ""
    });
    

    const updateCardInfo = (e) => {
        if (e.target.type === 'file' && e.target.files.length > 0) 
        {
            const imageURL = URL.createObjectURL(e.target.files[0]);
            setCardInfo(c => ({ ...c, logo: imageURL }));
        }
        else 
        {
            setCardInfo(c => ({ ...c, [e.target.id]: e.target.value }));
        }
  };


  return (
    <div className="max-w-[100%] max-h-[100%] overflow-hidden">
      <h1 className="text-3xl p-4 mx-auto text-center shadow-xl mb-5 bg-[#b8e2faff] rounded">Card Generator</h1>
      <div className="grid grid-cols-3 justify-items-stretch gap-x-10 px-10">
            <div className="grid ">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" onChange={updateCardInfo} placeholder="Enter Name" />
            </div>
            <div className="grid ">
                <label htmlFor="desig">Designation</label>
                <input id="desig" type="text" onChange={updateCardInfo} placeholder="Enter Designation" />
            </div>
            <div className="grid ">
                <label htmlFor="dept">Department</label>
                <input id="dept" type="text" onChange={updateCardInfo} placeholder="Enter Department" />
            </div>
            <div className="grid ">
                <label htmlFor="orgName">Organization Name</label>
                <input id="orgName" type="text" onChange={updateCardInfo} placeholder="Enter Organization" />
            </div>
            <div className="grid ">
                <label htmlFor="email">Email</label>
                <input id="email" type="text" onChange={updateCardInfo} placeholder="Enter Email" />
            </div>
            <div className="grid ">
                <label htmlFor="mobile">Mobile</label>
                <input id="mobile" type="text" onChange={updateCardInfo} placeholder="Enter Mobile" />
            </div>
            <div className="grid ">
                <label htmlFor="ext">Telephone/Ext.</label>
                <input id="ext" type="text" onChange={updateCardInfo} placeholder="Enter Extention/Telephone" />
            </div>
            <div className="grid ">
                <label htmlFor="logo">Logo</label>
                <input id="logo" type="file" accept='image/*' onChange={updateCardInfo} placeholder="Enter Logo" />
            </div>
            <div>
                <label htmlFor="link">Social Media Links</label>
                <input id="link" type="text" onChange={updateCardInfo} placeholder="Enter Social Media Links" />
            </div>
      </div>
        <div className="flex justify-center mt-10">
            <Card info={cardinfo} />
        </div>
        <div className='col-span-3 flex justify-center mt-5'>
                <button className='px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-700' onClick={console.log(cardinfo)}>Download Card</button>
            </div>
    </div>
  );
}
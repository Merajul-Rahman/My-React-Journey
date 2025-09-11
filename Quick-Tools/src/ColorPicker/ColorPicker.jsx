import { useState } from "react";
import ColorInput from "./ColorInput";

export default function App() {
  const [sections, setSections] = useState([1]); // start with one section

  const [file, setFile] = useState(null);

  const addSection = () => {
    setSections([...sections, 1]); // add new section
    console.log(sections);
  };

  const removeSection = (index) => {
    if(sections.length === 1) return; // Prevent removing the last section
    const newSections = sections.filter((_, i) => i !== index);
    setSections(newSections);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  }


  return (
    <div>
        <h1 className="text-3xl p-4 mx-auto text-center  shadow-xl mb-5 bg-[#b8e2faff] rounded">Color Picker</h1>
      <div className="flex gap-4">
        <div className="p-4 mx-auto w-[70vw]">
          {sections.map((section, index) => (
              <div key={index} className="p-2 flex gap-0">
                <div className="flex gap-4">
                  <button onClick={addSection} className="w-20 bg-green-500 text-white rounded-xl shadow-xl hover:shadow-2xl cursor-pointer hover:scale-105 transition transform duration-300 ease-in-out"><span className="text-6xl">+</span></button>
                  <button onClick={() => removeSection(index)} className="px-4 w-20 py-2 bg-red-500 text-white rounded-xl shadow-xl hover:shadow-2xl cursor-pointer hover:scale-105 transition transform duration-300 ease-in-out mr-4"><span className="text-6xl">-</span></button>
                </div>
                <ColorInput />
              </div>
            ))}
        </div>
        <div className="w-[28vw]">
            <input type="file" accept="image/*" onChange={handleFileChange}    className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 
             file:rounded-xl file:border-0 
             file:text-sm file:font-semibold
             file:bg-blue-50 file:text-blue-700 
             hover:file:bg-blue-100 cursor-pointer"/>
            <img src={file ? URL.createObjectURL(file) : ""} alt="" className="mt-4 w-[25vw] h-auto rounded-xl shadow-lg outline"/>
        </div>
      </div>
    </div>
  );
}

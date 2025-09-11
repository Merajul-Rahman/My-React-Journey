import toolsIcon from "../assets/tools.png"; 
import {Link} from 'react-router-dom';

export default function Home() {
    const lastdiv = {
        height: '200px',
        backgroundColor: "lightgray"
    }

    const toolNames = [
        "Counter", 
        "Color-Picker", 
        "Card-Generator",
        "Password-Generator", 
        "Stop-Watch", 
        "Todo-List", 
        "Comma-Separated-text"];

    const Hadiths = [
        "No fatigue, illness, worry, sorrow, harm, grief, or even the prick of a thorn afflicts a Muslim except that Allah expiates some of his sins by it.",
        "There are two words which are light on the tongue, heavy on the scale, and loved by the Most Merciful: SubhanAllahi wa bihamdi, SubhanAllahi al-azeem (Glorified is Allah and praised is He, Glorified is Allah the Most Great).",
        "Beware of suspicion for it is the most untruthful type of speech.",
        "A slave [of Allah] may utter a word without giving it much thought by which he slips into the fire a distance further than that between east and west.",
        "Yawning is from the devil so whenever one of you yawns, then let him try to suppress it as much as possible.",
        "The Prophet (swt) would never find fault with food. If he desired it, he would eat. If he disliked it, he would leave it.",
        "The fire is surrounded by [unlawful] desires and paradise by difficulties.",
        "If a man said to his [Muslim] brother, “O Kaafir (disbeliever)”, then that [statement] will return to one of them.",
        "Trim the mustache and leave the beard. Differ from the Magians.",
    ]



  return (
    <div className="min-h-screen overflow-hidden">
      
      <div className="flex p-4 mx-auto justify-center items-center gap-x-4 shadow-xl mb-5 bg-[#b8e2faff]">
        <span className="text-2xl">Welcome to </span>
        <span className="text-3xl hover:text-4xl text-cyan-600 cursor-pointer">
          Quick Tools
        </span>
      </div>
      
      <p className="text-xl text-center"> All your handy tools in one place – quick, simple, and reliable.</p>
      
      <div className="flex h-[80vh] w-full mx-2 mt-5 gap-4">
  
  {/* Left Div - About / Tools */}
  <div className="w-[40vw] flex-shrink-0">
    <p className="p-4 text-center">
      Hello! I am <span className="font-bold text-l text-green-900">Md. Merajul Rahman Shipon</span>
    </p>
    <p className="p-2">
      As part of my React learning journey, I created <span className="text-l font-bold">Quick Tools</span>, a project to practice development while building useful everyday features.
    </p>
    <p className="p-2">
      Here, I experiment with new concepts and create handy utilities to sharpen my skills.
    </p>
    <h2 className="p-2 font-bold">Available Tools in Quick Tools:</h2>
    <ul className="space-y-2">
      {toolNames.map((tool) => (
        <li
          key={tool}
          className="px-10 flex items-center gap-2 hover:shadow-2xl cursor-pointer hover:scale-105 transition transform duration-300 ease-in-out"
        >
          <img src={toolsIcon} alt="icon" className="w-4 h-4" />
          <span><a href={"\\"+ tool}>{tool}</a></span>
        </li>
      ))}
    </ul>
  </div>
  
  {/* Right Div - Hadiths */}
  <div className="w-[58vw] h-full overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
    <p className="text-center text-2xl font-bold pb-2">Hadiths</p>
    <ul className="space-y-4">
      {Hadiths.map((hadith) => (
        <li
          key={hadith}
          className="bg-[#b8e2faff] p-2 rounded-xl shadow-lg
                     hover:shadow-2xl hover:scale-105 transition transform duration-300 ease-in-out"
        >
          {hadith}
        </li>
      ))}
    </ul>
  </div>
</div>

    </div>
  )
}

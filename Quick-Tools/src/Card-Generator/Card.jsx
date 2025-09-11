import toolsIcon from "../assets/social-media_15575353.png";
export default function Card({info}) {
    return (
        <div className='flex w-110 h-45 bg-green-300 rounded-xl mx-auto mt-5'>
      <div className='w-40 border-r border-gray p-2 text-center'>
        <h2 className='text-blue-700 max-h-[20%] font-bold'>{info.orgName}</h2>
        <img className='w-30 h-[75%] mt-2 m-auto justify-middle' src={info.logo} alt="Company Logo" />
      </div>
      <div className='w-70 p-2 text-black'>
        <h2 className='font-bold text-lg'>{info.name}</h2>
        <h3 className='font-semibold'>{info.desig}</h3>
        <h3>{info.dept}</h3>
        <h4><span className='font-semibold'>Mobile:</span> {info.mobile}</h4>
        <h4><span className='font-semibold'>Email:</span> {info.email}</h4>
        <div className="flex items-center gap-x-4">
            <h4 className="m-0">
                <span className="font-semibold">Ext:</span> {info.ext}
            </h4>
            <a href={info.link} className="flex items-center gap-x-2">
                Social: <img src={toolsIcon} alt="Social Media Icon" className="w-6 h-6" />
            </a>
        </div>
      </div>
    </div>

    );
}

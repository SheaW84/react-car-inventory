import Background from "../assets/images/traffic.jpg"

const About = () => {
  return (
    <div
    style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-col mx-auto bg-cover bg-fixed h-screen bg-slate-700 bg-blend-multiply'>
        <div className="flex basis-1/8">
          <h2 className="text-2xl text-red-500 p-5 font-display">About</h2>  
        </div>
        <div className="flex basis 1/4">
          <div className="flex  border rounded-lg bg-opacity-25 font-display bg-slate-50 p-5 shadow-lg shadow-red-500">
            <p className="p-5 text-xl text-white">This app designed to help the user keep track of their personal 
               car collection or maybe cars they wish they had.😅</p>
          </div>
        </div>
        
      
    </div>
  )
}

export default About

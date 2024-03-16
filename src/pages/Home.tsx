import Background from '../assets/images/ferrari.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed bg-slate-700 bg-blend-multiply'
      >
        <div className='flex place-items-center h-screen'>
          <h1 className='p-4 text-6xl text-white  font-display'>Welcome The Car Inventory</h1>
        </div>
    </div>
  )
}

export default Home



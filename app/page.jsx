import AuthForm from "./components/AuthForm"

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-900 text-gray-300">
      <div className="container mx-auto p-6 sm:p-12">
          <nav className="flex flex-col p-6 gap-4  justify-around">
            <div className="flex  items-center" > 
                <img src="/logo1.jpg" alt=""   className="w-28 h-28 rounded-full " />
                <h1 className="text-3xl font-bold px-3 text-black ">Clarity</h1>
                <p className="flex ">Welcome to Clarity</p>
            </div>
            {/* <div className="flex items-center flex-col">
               Fossil Groups
            </div> */}
          </nav>


          <div className="bg-yellow-800 p-6 rounded-full  shadow-lg">
              <AuthForm />
          </div>
      </div>
  </div>
  )
}

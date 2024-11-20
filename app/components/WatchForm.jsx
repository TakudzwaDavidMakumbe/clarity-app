import { addWatch } from "../server-actions/addWatch";

export default function WatchForm(){
    return (
        <form action={addWatch} className="mb-6">
            <div className="mb-4">
                <label htmlFor="brand" className="block text-white mb-2">Client Full Name</label>
                <input 
                    type="text"
                    id="brand"
                    name="brand"
                    className="shadow appearance-none border border-gray-600 bg-blue-700 rounded w-full py-2 px-3 text-white"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="model" className="block text-white mb-2">Contact Details</label>
                <input 
                    type="text"
                    id="model"
                    name="model"
                    className="shadow appearance-none border border-gray-600 bg-blue-700 rounded w-full py-2 px-3 text-white"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="referenceNumber" className="block text-white mb-2">Project Details</label>
                <input 
                    type="text"
                    id="referenceNumber"
                    name="referenceNumber"
                    className="shadow appearance-none border border-gray-600 bg-blue-700 rounded w-full py-2 px-3 text-white"
                />
            </div>
            <button type="submit" className="bg-gray-600 hover:bg-blue-700 text-white hover:text-black font-bold py-2 px-4 rounded">
                Add Client
            </button>
        </form>     
    )
}
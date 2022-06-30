import { closeIcon, infoIcon } from "./icons"


const DeleteModal = ({ setModal, handleDelete }) => {
  return (
    <div className='flex bg-gray-800 bg-opacity-40 backdrop-blur-sm p-20 text-white  items-center justify-center h-screen w-screen absolute top-0 left-0'>
      <div className="relative p-4 w-full max-w-md h-full md:h-auto shadow">
        <div className="relative bg-gray-100 rounded-lg shadow dark:bg-gray-700">
          <button onClick={() => setModal(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
            {closeIcon}
          </button>
          <div className="p-6 text-center">
            {infoIcon}
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this bill?</h3>
            <button onClick={handleDelete} type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
              Yes, I'm sure
            </button>
            <button onClick={() => setModal(false)} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default DeleteModal;
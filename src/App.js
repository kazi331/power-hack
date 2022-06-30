import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function App() {

  const data = [
    { id: uuidv4(), name: 'sayem', email: 'sayem@email.com', phone: '01612178331', amount: 230 },
    { id: uuidv4(), name: 'sayem', email: 'sayem@email.com', phone: '01612178331', amount: 230 },
    { id: uuidv4(), name: 'sayem', email: 'sayem@email.com', phone: '01612178331', amount: 230 },
    { id: uuidv4(), name: 'sayem', email: 'sayem@email.com', phone: '01612178331', amount: 230 },
  ]
  const total = 200;

  const MySwal = withReactContent(Swal)



  const handleAddBill = () => {
    MySwal.fire({
      html: <div class=" inset-0 rounded-lg bg-gray-900">
        <div class="container p-5 mx-auto flex">
          <div class=" bg-gray-900 shadow-md rounded-lg flex flex-col md:ml-auto w-full md:mt-0 z-10">
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
              <input type="email" id="email" name="email" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-400">Message</label>
              <textarea id="message" name="message" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Bill</button>
          </div>
        </div>
      </div>,
      // icon: 'success'
    })
  }
  const handleDelete = () => {
    Swal.fire({
      icon: "question",
      title: 'Do you want to delete this bill?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Deleted!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
  const handleEdit = () => {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  return (
    <div className="app">
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="ml-3 text-xl">Power Hack</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <p className="mr-5">Paid Total: {total} </p>
          </nav>
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Login
          </button>
        </div>
      </header>

      {/* search bar  */}
      <div className="mb-4 py-2 px-8 overflow-x-auto bg-gray-600">
        <div className=" flex gap-x-3 min-w-max  justify-between items-center">
          <form className="flex  gap-2">
            <label htmlFor="billing" className="leading-7 text-sm">Billing</label>
            <input type="text" id="billing" placeholder='Search item' className="w-full bg-gray-700  rounded border border-gray-700 focus:border-indigo-300 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3" />
            <button className="md:hidden flex text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded">Search</button>
          </form>
          <div>
            <button onClick={handleAddBill} className="flex text-white bg-green-600 border-0 py-1 px-4 focus:outline-none hover:bg-green-700 rounded">Add New Bill</button>
          </div>
        </div>
      </div>

      {/* main content table  */}
      <div className="overflow-x-auto">
        <table className="border-collapse table-auto w-full min-w-content text-sm ">
          <thead className='bg-gray-600'>
            <tr className="text-left whitespace-nowwrap">
              <th className="border-b border-slate-600 whitespace-nowrap  font-medium p-4 pl-8">Billing ID</th>
              <th className="border-b border-slate-600 whitespace-nowrap  font-medium p-4 pl-8">Full Name</th>
              <th className="border-b border-slate-600 whitespace-nowrap  font-medium p-4 pl-8">Email</th>
              <th className="border-b border-slate-600 whitespace-nowrap  font-medium p-4 pl-8">Phone</th>
              <th className="border-b border-slate-600 whitespace-nowrap  font-medium p-4 pl-8">Paid Amount</th>
              <th className="border-b border-slate-600 whitespace-nowrap  font-medium p-4 pl-8">Action</th>
            </tr>
          </thead>
          <tbody className="bg-slate-700 text-slate-300 text-left ">
            {data && data.map(d => {
              const { id, name, email, phone, amount } = d;
              return (<tr key={d.id}>
                <td className="border-b border-slate-600 p-2 pl-8 ">{id.slice(0, 6)}</td>
                <td className="border-b border-slate-600 p-2 pl-8 ">{name}</td>
                <td className="border-b border-slate-600 p-2 pl-8 ">{email}</td>
                <td className="border-b border-slate-600 p-2 pl-8 ">{phone}</td>
                <td className="border-b border-slate-600 p-2 pl-8 ">{amount}</td>
                <td className="border-b border-slate-600 p-2 pl-8 flex gap-1 ">
                  <button onClick={handleEdit} className="flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Edit</button>
                  <button onClick={handleDelete} className="flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Delete</button>
                </td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

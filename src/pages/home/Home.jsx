import { useState } from 'react';
import { useSelector } from 'react-redux';
import DeleteModal from '../../components/DeleteModal';
function Home() {

  const bills = useSelector(state => state.billSlice.bills)
  const [modal, setModal] = useState(false);
  const handleEdit = () => {
    console.log('edit')
  }
  const handleDelete = () => {
    console.log('Deleted')
    setModal(false)
  }
  const handleAddBill = () => {
    console.log('add')
  }
  return (
    <>
      {/* search bar  */}
      <div className="mb-4 py-2 px-8 overflow-x-auto bg-gray-600">
        <div className=" flex gap-x-3 min-w-max  justify-between items-center">
          <form className="flex  gap-2">
            <label htmlFor="billing" className="leading-7 text-sm">Billing</label>
            <input type="text" id="billing" placeholder='Search item' className="w-full bg-gray-700  rounded border border-gray-700 focus:border-indigo-300  text-base outline-none text-gray-100 py-1 px-3" />
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
            {bills && bills.map(bill => {
              const { id, name, email, phone, amount } = bill;
              return (<tr key={id}>
                <td className="border-b border-slate-600 p-2 pl-8 ">{id.slice(0, 6)}</td>
                <td className="border-b border-slate-600 p-2 pl-8 ">{name}</td>
                <td className="border-b border-slate-600 p-2 pl-8 ">{email}</td>
                <td className="border-b border-slate-600 p-2 pl-8 ">{phone}</td>
                <td className="border-b border-slate-600 p-2 pl-8 ">{amount}</td>
                <td className="border-b border-slate-600 p-2 pl-8 flex gap-1 ">
                  <button onClick={handleEdit} className="flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Edit</button>
                  <button onClick={() => setModal(true)} className="flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Delete</button>
                </td>
              </tr>)
            })}
          </tbody>
        </table>
        {/* modals  */}
      {modal && <DeleteModal setModal={setModal} handleDelete={handleDelete} />}
      </div>
    </>
  )
}

export default Home
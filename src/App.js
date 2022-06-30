import { v4 as uuidv4 } from 'uuid';
function App() {
  const data = [
    { id: uuidv4(), name: 'sayem', email: 'sayem@email.com', phone: '01612178331', amount: 230 },
    { id: uuidv4(), name: 'sayem', email: 'sayem@email.com', phone: '01612178331', amount: 230 },
    { id: uuidv4(), name: 'sayem', email: 'sayem@email.com', phone: '01612178331', amount: 230 },
    { id: uuidv4(), name: 'sayem', email: 'sayem@email.com', phone: '01612178331', amount: 230 },
    { id: uuidv4(), name: 'sayem', email: 'sayem@email.com', phone: '01612178331', amount: 230 },
  ]
  console.log(data)
  return (
    <div className="app">
      <table className="border-collapse table-auto w-full text-sm">
        <thead>
          <tr className="text-left">
            <th className="border-b border-slate-600 font-medium p-4 pl-8">Billing ID</th>
            <th className="border-b border-slate-600 font-medium p-4 pl-8"> Name</th>
            <th className="border-b border-slate-600 font-medium p-4 pl-8">Email</th>
            <th className="border-b border-slate-600 font-medium p-4 pl-8">Phone</th>
            <th className="border-b border-slate-600 font-medium p-4 pl-8">Paid Amount</th>
            <th className="border-b border-slate-600 font-medium p-4 pl-8">Action</th>
          </tr>
        </thead>
        <tbody className="bg-slate-700 text-slate-300 dark:text-slate-200 text-left ">
          {data && data.map(d => {
            const { id, name, email, phone, amount } = d;
            return (<tr key={d.id}>
              <td className="border-b border-slate-600 p-2 pl-8 ">{id.slice(0, 6)}</td>
              <td className="border-b border-slate-600 p-2 pl-8 ">{name}</td>
              <td className="border-b border-slate-600 p-2 pl-8 ">{email}</td>
              <td className="border-b border-slate-600 p-2 pl-8 ">{phone}</td>
              <td className="border-b border-slate-600 p-2 pl-8 ">{amount}</td>
              <td className="border-b border-slate-600 p-2 pl-8 flex gap-1 ">
                <button className="flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Edit</button>
                <button className="flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Delete</button>
              </td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

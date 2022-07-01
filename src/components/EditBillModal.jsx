import { useForm } from "react-hook-form";
import { closeIcon, spinnerIcon } from "./icons";
import axios from 'axios'
import { toast } from 'react-toastify'


function EditBillModal({ setEditBillModal, handleEdit, bill, refetch }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { _id, name, email, phone, amount } = bill;
    const onSubmit = data => {
        console.log(data);
        const url = `https://ph-power-hack.herokuapp.com/api/update-billing/${_id}`;
        axios.patch(url, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
                method: 'PATCH'
            }
        })
            .then(res => {
                if(res.data.modifiedCount){
                    setEditBillModal(false);
                    refetch();
                    toast.info('Item updated');
                }
            });
    }

    console.log('Edit billing')
    const loading = false;
    return (
        <div className='flex bg-gray-800 bg-opacity-60 backdrop-blur p-20 text-white  items-center justify-center h-screen  w-screen absolute top-0 left-0'>
            <div className="relative p-4 w-full max-w-md min-w-max h-full md:h-auto">
                <div className="relative bg-gray-700 rounded-lg shadow dark:bg-gray-70 overflow-y-auto max-h-[90vh]">
                    <button onClick={() => setEditBillModal(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">{closeIcon} </button>
                    <div className="p-6 text-center  ">
                        <h3 className="mb-5 text-lg font-normal">Edit Bill</h3>
                        {/* main form to add bill info  */}
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-fill  justify-center gap-3   ">

                            {/* email with label warning*/}
                            <label className="label pb-0 flex justify-between">
                                <span className="label-text">Full Name</span>
                                <div>
                                    {errors.name?.type === "required" && (<span className="text-sm text-red-500">{errors.name.message}</span>)}
                                    {errors.name?.type === "pattern" && (<span className="text-sm text-red-500"> {errors.name.message}</span>)}
                                </div>
                            </label>
                            <input defaultValue={name}
                                {...register("name", {
                                    required: { value: true, message: "Name is required", }
                                })}
                                type="text" placeholder="Name" className="w-full bg-gray-600 rounded text-base outline-none  py-1 px-3"
                            />
                            <label className="label pb-0 flex justify-between">
                                <span className="label-text">Your Email</span>
                                <div>
                                    {errors.email?.type === "required" && (<span className="text-sm text-red-500">{errors.email.message}</span>)}
                                    {errors.email?.type === "pattern" && (<span className="text-sm text-red-500"> {errors.email.message}</span>)}
                                </div>
                            </label>
                            <input defaultValue={email}
                                {...register("email", {
                                    required: { value: true, message: "Email is required", },
                                    pattern: { value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Provide a valid email", },
                                })}
                                type="email" placeholder="Email" className="w-full bg-gray-600 rounded text-base outline-none  py-1 px-3"
                            />

                            {/* password  */}
                            <label className="label pb-0 flex justify-between">
                                <span className="label-text">Phone</span>
                                <div>
                                    {errors.phone?.type === "required" && (<span className="text-sm text-red-500">{errors.phone.message}</span>)}
                                    {errors.phone?.type === "minLength" && (<span className="text-sm text-red-500"> {errors.phone.message}</span>)}
                                </div>
                            </label>
                            <div>
                                <input defaultValue={phone}
                                    {...register("phone", {
                                        required: { value: true, message: "Phone is required", },
                                        minLength: { value: 11, message: "Minimum 11 digits", },
                                    })}
                                    type="number" placeholder="Phone Number" className="w-full bg-gray-600 rounded text-base outline-none  py-1 px-3" autoComplete="off"
                                />
                            </div>

                            {/* Amount  */}
                            <label className="label pb-0 flex justify-between">
                                <span className="label-text">Payment</span>
                                <div>
                                    {errors.amount?.type === "required" && (<span className="text-sm text-red-500">{errors.amount.message}</span>)}
                                    {errors.amount?.type === "minLength" && (<span className="text-sm text-red-500"> {errors.amount.message}</span>)}
                                </div>
                            </label>
                            <div>
                                <input defaultValue={amount}
                                    {...register("amount", {
                                        required: { value: true, message: "Payment is required", },
                                    })}
                                    type="number" placeholder="Payemnt Amount" className="w-full bg-gray-600 rounded text-base outline-none  py-1 px-3" autoComplete="off"
                                />
                            </div>

                            <button className="bg-gray-500 border-0 focus:outline-none hover:bg-gray-800 rounded px-5 py-2.5 my-4">
                                {loading && spinnerIcon} Edit Bill
                            </button>
                        </form>

                        <div className="flex justify-end w-full">
                            <button onClick={() => setEditBillModal(false)} type="button" className="text-gray-500 bg-white hover:bg-gray-100  focus:outline-none rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditBillModal;
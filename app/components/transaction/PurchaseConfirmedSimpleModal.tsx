"use client"
import { useSearchParams } from 'next/navigation'
import { useRef, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
// import checkEmpty from '../../utils/checkEmpty'

// type PurchaseMoviePropsType = {
//     title: string;
//     price: number;
//     purchaseType: string;
//     isActive: boolean;
//     closeModal: () => void;
// }
export default function PurchaseConfirmedSimpleModal(/*{ title, price, purchaseType, isActive, closeModal }: PurchaseMoviePropsType*/) {
    const searchParams = useSearchParams()
    const dialogRef = useRef<null | HTMLDialogElement>(null)
    let showDialog = searchParams.get('showDialog')

    useEffect(() => {
        if (showDialog === 'y') {
            dialogRef.current?.showModal()
        } else {
            dialogRef.current?.close()
        }
    }, [showDialog])

    const closeDialog = () => {
        // showDialog = 'n'
        // console.log("showDialog: " + showDialog)
        dialogRef.current?.close()
    }

    // const fixedPrice = checkEmpty(price)
    // const dueDate = new Date();
    // dueDate.setDate(dueDate.getDate() + 3);
    // let purchaseConfirmedTitle: string = "Payment of " + fixedPrice + " received for " + title
    // if (purchaseType.toLowerCase() === "rent")
    //     purchaseConfirmedTitle = purchaseConfirmedTitle + ". Watchable until " + dueDate
    // if (purchaseType.toLowerCase() === "buy")
    //     purchaseConfirmedTitle = purchaseConfirmedTitle + " forever."
    // TODO FIX GLITCH DIALOG WILL NOT CLOSE PROPERLY
    const dialog: JSX.Element | null = showDialog === 'y'
        ? (
            <dialog ref={dialogRef} className="fixed top-50 left-50 -translate-x-50 -translate-y-50 z-10  rounded-xl backdrop:bg-gray-800/50">
                <div className="w-[500px] max-w-fullbg-gray-200 flex flex-col">
                    <div className="flex flex-row justify-between mb-4 pt-2 px-5 bg-yellow-400">
                        <h1 className="text-2xl">Purchase Confirmed</h1>
                        <button
                            onClick={closeDialog}
                            className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-600 text-white"
                        >x</button>
                    </div>
                    <div className="px-5 pb-6">
                        Your payment has been successfully submitted. We’ve sent
                        you an email with all of the details of your order.
                        <div className="flex flex-row justify-end mt-2">
                            <button
                                onClick={closeDialog}
                                className="bg-green-500 py-1 px-2 rounded border-none"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            </dialog>
        ) : null
    return dialog
    // return (
    //     <>
    //         <Transition appear show={isActive} as={Fragment}>
    //             <Dialog as="div" className="relative z-10" id="confirm" onClose={closeModal}>
    //                 <Transition.Child
    //                     as={Fragment}
    //                     enter="ease-out duration-300"
    //                     enterFrom="opacity-0"
    //                     enterTo="opacity-100"
    //                     leave="ease-in duration-200"
    //                     leaveFrom="opacity-100"
    //                     leaveTo="opacity-0"
    //                 >
    //                     <div className="fixed inset-0 bg-black bg-opacity-25" />
    //                 </Transition.Child>

    //                 <div className="fixed inset-0 overflow-y-auto">
    //                     <div className="flex min-h-full items-center justify-center p-4 text-center">
    //                         <Transition.Child
    //                             as={Fragment}
    //                             enter="ease-out duration-300"
    //                             enterFrom="opacity-0 scale-95"
    //                             enterTo="opacity-100 scale-100"
    //                             leave="ease-in duration-200"
    //                             leaveFrom="opacity-100 scale-100"
    //                             leaveTo="opacity-0 scale-95"
    //                         >
    //                             <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
    //                                 <Dialog.Title
    //                                     as="h3"
    //                                     className="text-lg font-medium leading-6 text-gray-900"
    //                                 >
    //                                     {purchaseConfirmedTitle}
    //                                 </Dialog.Title>
    //                                 <div className="mt-2">
    //                                     <p className="text-sm text-gray-500">
    //                                         Your payment has been successfully submitted. We’ve sent
    //                                         you an email with all of the details of your order.
    //                                     </p>
    //                                 </div>

    //                                 <div className="mt-4">
    //                                     <button
    //                                         type="button"
    //                                         id="confirm"
    //                                         className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    //                                         onClick={closeModal}
    //                                     >
    //                                         Got it, thanks!
    //                                     </button>
    //                                 </div>
    //                             </Dialog.Panel>
    //                         </Transition.Child>
    //                     </div>
    //                 </div>
    //             </Dialog>
    //         </Transition>
    //     </>
    // )
}
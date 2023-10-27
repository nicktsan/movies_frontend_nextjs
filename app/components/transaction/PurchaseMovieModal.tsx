import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import checkEmpty from '../../utils/checkEmpty'

type PurchaseMoviePropsType = {
    title: string;
    price: number;
    purchaseType: string;
    isActive: boolean;
    handleClick2: () => void;
    closeModal: () => void;
}
export default function PurchaseMovieModal({ title, price, purchaseType, isActive, handleClick2, closeModal }: PurchaseMoviePropsType) {
    const fixedPrice = checkEmpty(price)
    let askPurchase: string = "Do you want to " + purchaseType + " " + title + " at " + fixedPrice
    if (purchaseType === "rent")
        askPurchase = askPurchase + " for 72 hours?"
    if (purchaseType === "buy")
        askPurchase = askPurchase + " forever?"
    return (
        <>
            <Transition appear show={isActive} as={Fragment}>
                <Dialog as="div" className="relative z-10" id="check" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {askPurchase}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <button
                                            type="button"
                                            id="confirm"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={handleClick2}
                                        >Yes</button>
                                        <button
                                            type="button"
                                            id="check"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            No
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
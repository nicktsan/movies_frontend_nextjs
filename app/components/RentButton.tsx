'use client'
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import checkEmpty from '../utils/checkEmpty'
export default function RentButton({ title, price }: { title: string, price: number }) {
    const [isOpen, setIsOpen] = useState({
        check: false,
        confirm: false
    });
    const fixedPrice = checkEmpty(price)
    function closeModal() {
        setIsOpen({
            check: false,
            confirm: false
        })
        console.log(isOpen)
    }

    function openModal(event: React.MouseEvent) {
        setIsOpen((prev) => ({
            ...prev,
            [(event!.target as HTMLInputElement)!.id]: true
        }))
        console.log(isOpen)
    }

    return (
        <>
            <button type="button" id="check" onClick={openModal} className="py-1 px-2 bg-blue-100">Rent Price: ${fixedPrice}</button>

            <Transition appear show={isOpen.check} as={Fragment}>
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
                                        Do you want to rent {title} at ${fixedPrice} for 72 hours?
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <button type="button" id="confirm" onClick={openModal} className="py-1 px-2 bg-blue-100">Yes</button>

                                        <Transition appear show={isOpen.confirm} as={Fragment}>
                                            <Dialog as="div" className="relative z-10" id="confirm" onClose={closeModal}>
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
                                                                    Payment of ${fixedPrice} received for {title} for 72 hours
                                                                </Dialog.Title>
                                                                <div className="mt-2">
                                                                    <p className="text-sm text-gray-500">
                                                                        Your payment has been successfully submitted. We’ve sent
                                                                        you an email with all of the details of your order.
                                                                    </p>
                                                                </div>

                                                                <div className="mt-4">
                                                                    <button
                                                                        type="button"
                                                                        id="confirm"
                                                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                                        onClick={closeModal}
                                                                    >
                                                                        Got it, thanks!
                                                                    </button>
                                                                </div>
                                                            </Dialog.Panel>
                                                        </Transition.Child>
                                                    </div>
                                                </div>
                                            </Dialog>
                                        </Transition>
                                    </div>

                                    <div className="mt-4">
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
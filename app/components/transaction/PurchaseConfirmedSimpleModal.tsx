"use client"
import { useSearchParams } from 'next/navigation'
import { useRef, useEffect } from 'react'

export default function PurchaseConfirmedSimpleModal() {
    const searchParams = useSearchParams()
    const dialogRef = useRef<null | HTMLDialogElement>(null)
    let success = searchParams.get('success')

    useEffect(() => {
        if (success === 'true') {
            dialogRef.current?.showModal()
        } else {
            dialogRef.current?.close()
        }
    }, [success])

    const closeDialog = () => {
        dialogRef.current?.close()
    }

    const dialog: JSX.Element | null = success === 'true'
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
}
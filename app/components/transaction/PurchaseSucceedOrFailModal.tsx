"use client"
import { useSearchParams } from 'next/navigation'
import { useRef, useEffect } from 'react'

export default function PurchaseSucceedOrFailModal() {
    const searchParams = useSearchParams()
    const dialogRef = useRef<null | HTMLDialogElement>(null)
    let success = searchParams.get('success')

    useEffect(() => {
        if (success === 'true' || success === 'false') {
            dialogRef.current?.showModal()
        } else {
            dialogRef.current?.close()
        }
    }, [success])

    const closeDialog = () => {
        dialogRef.current?.close()
    }
    let dialogText: string = success === 'true' ? "Your payment has been successfully submitted. We’ve sent " +
        "you an email with all of the details of your order." :
        "Your payment was not successfully submitted. We've sent you and email with all of the details of the failure."



    let dialog: JSX.Element | null = success === 'true' || success === 'false'
        ? (
            <dialog ref={dialogRef} className="fixed top-50 left-50 -translate-x-50 -translate-y-50 z-10  rounded-xl backdrop:bg-gray-800/50">
                <div className="w-[500px] max-w-fullbg-gray-200 flex flex-col">
                    <div className="flex flex-row justify-between mb-4 pt-2 px-5">
                        <h1 className="text-2xl">Purchase Confirmed</h1>
                        <button
                            onClick={closeDialog}
                            className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-gray-100 text-gray-500 hover:bg-gray-600 hover:text-gray-300"
                        >x</button>
                    </div>
                    <div className="px-5 pb-6">
                        {dialogText}
                        <div className="flex flex-row justify-end mt-2">
                            <button
                                onClick={closeDialog}
                                className="bg-gray-100 py-1 px-2 rounded border-none hover:bg-gray-700 hover:text-gray-300"
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
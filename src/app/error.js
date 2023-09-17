'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className='text-center m-6'>
            <h2>Something went wrong!</h2>
            <button className='hover:text-amber-600'
                onClick={
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    )
}
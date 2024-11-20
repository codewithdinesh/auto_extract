import React from 'react'
import FileUpload from '@/components/FileUpload'
import Tabs from '@/components/Tabs'

const Main = () => {
    return (
        <div className=' flex-col items-center justify-center'>
            <FileUpload />

            <Tabs />
        </div>


    )
}

export default Main
import React from 'react'

const Content = () => {
    const images = 'https://picsum.photos/200/300'
    return (
        <div className="flex flex-col justify-center items-center bg-white h-screen font-sans py-40">
            <img src={images} alt="image" className="h-full rounded mb-20" />
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl mb-2">Mountain</h2>
                <p className="m-2">Hot, Cold and Tired</p>
                <span>unknown location</span>
            </div>
        </div>
    )
}

export default Content

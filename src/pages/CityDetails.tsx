import React from 'react'
import Nav from '../components/Nav'

const CityDetails = () => {
    return (
        <div>
            <Nav />
            <div className='relative h-[50vh] w-full'>
                <img src="\src\assets\images\backgrounds\banner.png" alt="" />
                <div>
                    <p >Great Office in <br /> Jakarta Pusat City</p>
                    <p>
                        Kantor yang tepat dapat memberikan impact pekerjaan <br />
                        menjadi lebih baik dan sehat dalam tumbuhkan karir
                    </p>
                </div>
            </div>

        </div>
    )
}

export default CityDetails

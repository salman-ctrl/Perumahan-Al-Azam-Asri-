import React, { useEffect, useState } from 'react'
import type { Office } from '../types/type'
import axios from 'axios';
import OfficeCard from '../components/OfficeCard';
const BrowseOfficeWrapper = () => {
    const [offices, setOffices] = useState<Office[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/offices', {
                headers: {
                    "X-API-KEY": "Qsqkj3kjnaso390293n923n",
                },
            })
            .then((response) => {
                setOffices(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            })
    });
    if (loading) {
        return <div className="w-full flex justify-center">
            <div className="loading-wave">
                <div className="loading-bar" />
                <div className="loading-bar" />
                <div className="loading-bar" />
                <div className="loading-bar" />
            </div>
        </div>
    }
    if (error) {
        return <p>Eror dalam pengambilan data : {error}</p>
    }
    return (
        <div>
            <div className='flex flex-col items-center mt-32'>
                <p className='text-3xl text-center '>Browse Our Fresh Space. <br /> For Your Better Productivity</p>
                <div className='mt-16 grid grid-cols-3 gap-[30px]'>
                    {offices.map((office) => (
                        <OfficeCard key={office.id} office={office} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default BrowseOfficeWrapper;

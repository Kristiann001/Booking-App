import { useState, useEffect } from 'react';

function Booking() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        location: '',
        province: 'Nairobi',
        email: '',
        password: '',
        confirm_password: ''
    });

    useEffect(() => {
        fetch('${BASE_URl}/province', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json()).then((data) => {
            console.log(data)
        })
        .catch((err) => console.log(err));
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <h1 className="pt-20 text-center text-3xl font-thin">BOOKING INFORMATION</h1>
                    <div className="pt-10 px-96 grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-xl font-medium text-black dark:text-black">First name</label>
                            <input
                                type="text"
                                id="first_name"
                                className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-900 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Ace"
                                required
                                value={formData.first_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-xl font-medium text-black dark:text-black">Last name</label>
                            <input
                                type="text"
                                id="last_name"
                                className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-900 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Miano"
                                required
                                value={formData.last_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-xl font-medium text-black dark:text-black">Place of residence</label>
                            <input
                                type="text"
                                id="location"
                                className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-900 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Kenya"
                                required
                                value={formData.location}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-xl font-medium text-black dark:text-black">Province</label>
                            <select
                                id="province"
                                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-900 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={formData.province}
                                onChange={handleChange}
                            >
                                <option>Nairobi</option>
                                <option>Mombasa</option>
                                <option>Kisumu</option>
                                <option>Kiambu</option>
                                <option>Kilifi</option>
                                <option>Naivasha</option>
                            </select>
                        </div>
                    </div>
                    <div className="px-96 mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email address</label>
                        <input
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="john.doe@company.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="px-96 mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="•••••••••"
                            required
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="px-96 mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Confirm password</label>
                        <input
                            type="password"
                            id="confirm_password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="•••••••••"
                            required
                            value={formData.confirm_password}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="mx-96 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}

export default Booking;


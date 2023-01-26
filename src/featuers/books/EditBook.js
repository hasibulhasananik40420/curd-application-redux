import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBooks } from './BookSlice';

const EditBook = () => {
    const location = useLocation()
    const [id, setId] = useState(location.state.id)
    const [title, setTitle] = useState(location.state.title)
    const [author, setAuthor] = useState(location.state.author)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateBooks({ id, title, author }))
        navigate("/showbook")
    }
    return (
        <div>
            <h1 className='text-2xl pt-4 text-center'>Edit Book</h1>


            <div class="flex items-center justify-center p-12">

                <div class="mx-auto w-full max-w-[550px]">


                    <form onSubmit={handleSubmit}>
                        <div class="mb-5">
                            <label
                                htmlFor="title"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Title
                            </label>
                            <input onChange={(e) => setTitle(e.target.value)}

                                type="text"
                                name="title"
                                id="title"
                                value={title}
                                required

                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div class="mb-5">
                            <label
                                htmlFor="author"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Author
                            </label>
                            <input onChange={(e) => setAuthor(e.target.value)}

                                type="text"
                                name="author"
                                id="author"
                                value={author}
                                required

                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>



                        <div>
                            <button
                                class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>



        </div>
    );
};

export default EditBook;
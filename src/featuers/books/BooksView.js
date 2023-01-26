import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBooks } from './BookSlice';

const BooksView = () => {
    const books = useSelector(state => state.booksReducer.books)
    const dispatch = useDispatch()
    const handleDeleteBook = (id) => {
        dispatch(deleteBooks(id))
    }

    return (
        <div>
            <h1 className='text-2xl font-bold text-center'>List of books</h1>

            <div class="flex flex-col">
                <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="bg-white border-b">
                                    <tr>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            ID
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Title
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Author
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        books && books.map(book => {
                                            const { id, title, author } = book
                                            return (
                                                <tr class="bg-gray-100 border-b">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{book.id}</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {title}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {author}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <Link to="/editbook" state={{ id, title, author }}>  <button className='bg-green-500 px-4 py-2 rounded text-white'>  Edit</button></Link>
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <button onClick={() => { handleDeleteBook(id) }} className='bg-red-500 px-4 py-2 rounded text-white'>  Delete</button>
                                                    </td>

                                                </tr>
                                            )
                                        })
                                    }





                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default BooksView;
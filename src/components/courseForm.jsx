import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { APP_ROUTES } from '../constant/AppRoutes';
import Cookies from 'js-cookie';

function CourseForm() {

    const [courseForm, setCourseForm] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => { getUser() }, [])

    const getUser = async () => {
        try {
            const userGet = await axios.get(APP_ROUTES.GetCourse, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`
                }
            })
            console.log('userGet=>', userGet.data);
            setCourseForm(userGet.data)

        } catch (error) {
            console.log("error=>", error);

        }
    }

    const handleCourseForm = async (e) => {
        try {
            e.preventDefault();
            setLoading(true)
            const obj = {
                courseName: e.target[0].value,
                duration: e.target[1].value,
                description: e.target[2].value,
                image: e.target[3].value,
            }
            if (!obj.courseName || !obj.duration || !obj.description || !obj.image) {
                return alert("All fields are required");
            }
            console.log("Course Object=>", obj);
            console.log("API URL=>", APP_ROUTES.AddCourse);

            const addCourse = await axios.post(APP_ROUTES.AddCourse, obj, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`,
                }
            });
            if (addCourse) {
                console.log(addCourse?.data);
                getUser();
            }
            setLoading(false);
        } catch (error) {
            console.log("error=>", error.message);
            setLoading(false)
        }
    }

    console.log("CourseForm =>", courseForm);
    

    return (
        <form className="max-w-md mx-auto relative top-40" onSubmit={handleCourseForm}>
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="text"
                    name=" CourseName"
                    id=" CourseName"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required=""
                />
                <label
                    htmlFor=" CourseName"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Course Name
                </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="text"
                    name="duration"
                    id="duration"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required=""
                />
                <label
                    htmlFor="duration"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Duration
                </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="text"
                    name="description"
                    id="description"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required=""
                />
                <label
                    htmlFor="description"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Description
                </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="url"
                    name="imageUrl"
                    id="imageUrl"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required=""
                />
                <label
                    htmlFor="imageUrl"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Image Url
                </label>
            </div>
            <center>
                <button
                    disabled={loading}
                    type="submit"
                    className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    {loading ? "Loading..." : "Add Course"}
                </button>
            </center>
        </form>
    )
}

export default CourseForm
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { APP_ROUTES, BASE_URL } from '../constant/AppRoutes';
import Cookies from 'js-cookie';
import Card from './card';

function CourseForm() {

    const [courseForm, setCourseForm] = useState(null);
    const [EditCourse, setEditCourse] = useState(null);
    const [isEdited, setIsEdit] = useState(false);
    const [loading, setLoading] = useState(false)

    useEffect(() => { getCourse() }, [])

    const getCourse = async () => {
        try {
            setLoading(true)
            const courseGet = await axios.get(APP_ROUTES.GetCourse, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`
                }
            })
            setCourseForm(courseGet.data)

        } catch (error) {
            console.log("error=>", error);
        } finally {
            setLoading(false);
        }
    }

    const handleAddCourse = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const obj = {
                courseName: e.target[0].value,
                duration: e.target[1].value,
                description: e.target[2].value,
                image: e.target[3].value,
            }
            console.log('obj', obj);

            if (!obj.courseName || !obj.duration || !obj.description || !obj.image) {
                return alert("All fields are required");
            }

            console.log("EditCourse Id", EditCourse?._id);


            if (isEdited) {
                const updatedObj = {
                    courseName: EditCourse.courseName,
                    duration: EditCourse.duration,
                    description: EditCourse.description,
                    image: EditCourse.image,
                }
                const updateCourse = await axios.put(`${BASE_URL}api/addCourse/${EditCourse?._id}`, updatedObj, {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('token')}`
                    }
                })

            } else {
                const addCourse = await axios.post(APP_ROUTES.AddCourse, obj, {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('token')}`,
                    }
                });
            }
            getCourse(); // referesh course
            setEditCourse(null)
            setIsEdit(false);
            e.target.reset();
        } catch (error) {
            console.log("error=>", error.message);
        } finally {
            setLoading(false);
        }
    }


    const deleteTodo = async (id) => {
        try {
            setLoading(true)
            const deleteTodo = await axios.delete(`${BASE_URL}api/addCourse/${id}`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`
                }
            });
            getCourse(); // referesh course
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    const handleEditClick = (getCourse) => {
        setEditCourse(getCourse)
        setIsEdit(true)
    }

    console.log("EditCourse=>", EditCourse);
    console.log("CourseForm =>", courseForm);



    return (
        <>
            <form className="max-w-md mx-auto relative top-40" onSubmit={handleAddCourse}>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name=" courseName"
                        id=" courseName"
                        value={EditCourse?.courseName || ""}
                        onChange={(e) => setEditCourse({ ...EditCourse, courseName: e.target.value })}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required=""
                    />
                    <label
                        htmlFor=" courseName"
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
                        value={EditCourse?.duration || ""}
                        onChange={(e) => setEditCourse({ ...EditCourse, duration: e.target.value })}
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
                        value={EditCourse?.description || ""}
                        onChange={(e) => setEditCourse({ ...EditCourse, description: e.target.value })}
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
                        name="image"
                        id="image"
                        value={EditCourse?.image || ""}
                        onChange={(e) => setEditCourse({ ...EditCourse, image: e.target.value })}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required=""
                    />
                    <label
                        htmlFor="image"
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
                        {loading ? "Loading..." : isEdited ? "Update Course" : "Add Course"}
                    </button>
                </center>
            </form>
            <section className="text-gray-600 body-font relative top-40">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            loading ? <div className='flex justify-center items-center'>loading...</div> :
                                courseForm?.course?.map((getCourse) => {
                                    return <Card key={getCourse?._id}
                                        courses={getCourse}
                                        onClickDelete={() => deleteTodo(getCourse._id)}
                                        onClickEdit={() => handleEditClick(getCourse)} />
                                })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default CourseForm
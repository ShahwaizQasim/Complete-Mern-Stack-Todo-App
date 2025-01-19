import React from 'react'

function Card({ courses, onClickEdit, onClickDelete }) {

    const { courseName, duration, description, image } = courses;

    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={image}
                    alt="blog"
                />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {duration}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {courseName}
                    </h1>
                    <p className="leading-relaxed mb-3">
                        {description}
                    </p>
                    <div className="flex items-center flex-wrap ">
                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            Learn More
                            <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14" />
                                <path d="M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <button onClick={onClickEdit} className="text-gray-800 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto
                         leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            Edit
                        </button>
                        <button className="text-gray-800 inline-flex items-center leading-none text-sm" onClick={onClickDelete}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
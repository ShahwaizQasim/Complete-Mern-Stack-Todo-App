import CourseForm from "../components/courseForm";
import Navbar from "../components/navbar";

function Home() {
    return (
        <>
            <Navbar />
            <div>
                <h1 className="flex justify-center relative top-32 text-3xl font-bold">Add Course</h1>
                <CourseForm />
            </div>
        </>
    )
}

export default Home;
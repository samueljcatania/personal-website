import {Link} from "react-router-dom";

function SingleProject() {
    return (
        <Link to='/projects'>
            <div
                className="w-full p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                <img className="h-40 object-cover rounded-xl" src="../assets/splash/larger-compressed-splash-image.jpg"
                     alt=""/>
                <div className="p-2">
                    <h2 className="font-bold text-lg mb-2 ">Heading</h2>
                    <p className="text-sm text-gray-600">Simple Yet Beautiful Car</p>
                </div>
                <div className="m-2">
                    <a role='button' href='/projects'
                       className="text-white bg-purple-6000 px-3 py-1 rounded-md hover:bg-purple-700">Learn
                        More</a>
                </div>
            </div>
        </Link>
    )
}

export default SingleProject;

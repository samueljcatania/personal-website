import About from "../components/About";

function Home() {
    return (
        <div className='m-md-6 container-fluid px-0'>
            <div className='container'>
                <div className='row row-cols-2 m-4'>
                    <div className='col p-0 text-start'>
                        Web Developer
                    </div>
                    <div className='col p-0 text-end'>
                        Student
                    </div>
                </div>
                <div className='row text-center'>
                    <h1 className='display-'>
                        Samuel Catania</h1>
                </div>
            </div>
            <div className='row g-0'>
                <div className='thumb-post'>
                    <img className='img-fluid w-100'
                         src={require("../images/splash_image.webp")}
                         alt='Samuel Catania'/>
                </div>
            </div>
            <About/>
        </div>
    )
}

export default Home;

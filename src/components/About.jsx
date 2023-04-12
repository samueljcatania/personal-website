function About() {
    return (
        <div className="bg-white border-b py-8">
            <div className="container max-w-5xl mx-auto m-8">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                    About Me
                </h1>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 md:pr-6">
                        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                            Hi, I'm [Your Name]
                        </h3>
                        <p className="text-gray-600 mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque enim vitae eros
                            faucibus interdum. Nullam vel felis velit. Pellentesque consectetur lectus sit amet justo
                            malesuada consequat. In quis ipsum eu mauris facilisis scelerisque. Nam auctor elit sit amet
                            ipsum dignissim, id dignissim ante pulvinar. Sed commodo, eros nec accumsan dignissim, velit
                            orci lacinia diam, sed efficitur tellus augue id nisi.
                        </p>
                        <p className="text-gray-600 mb-8">
                            Sed euismod sapien eget tortor consequat, ut consequat nibh fermentum. Suspendisse rutrum in
                            lorem eget sagittis. Integer fermentum elit sit amet elit ullamcorper sollicitudin. Aliquam
                            id enim non erat fringilla maximus. Ut vel consequat quam, eu finibus ipsum. In in purus
                            augue. Duis ultrices posuere ornare. Vivamus auctor diam ac risus ultrices, sed posuere
                            metus lacinia. Integer hendrerit, lectus vel lacinia feugiat, augue magna faucibus mi, id
                            efficitur turpis ex sed sapien.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img className="shadow-lg rounded-full w-full h-auto align-middle border-none max-w-1/2 mx-auto"
                             src="https://via.placeholder.com/400x400" alt="Profile Picture"/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About;

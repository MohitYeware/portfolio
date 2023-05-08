import HeroImage from "../assets/profile.jpeg";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
      <div className="w-full h-full max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row text-xl md:text-2xl">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl md:mt-4 mb-4 font-bold text-white">
            I'm a Software Engineer
          </h2>

          <p className="text-gray-400 pt-4 max-w-md">
            I have 4 years of software development experience in multiple
            domains.
            <br />
            <br />I love to build full-stack web applications using technologies
            like React, Tailwind and NextJS.
          </p>
        </div>
        <div>
          <img
            src={HeroImage}
            className="rounded-lg w-2/3 md:w-full mx-8 mb-8 md:mt-12"
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

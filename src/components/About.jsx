const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="w-full h-full max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="pb-8 mx-auto">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-4 text-justify">
          Hi, I'm a student pursuing master's degree in Software Engineering in
          Germany. I have 4 years of professional work experience in various
          domains. I love to work on full stack web applications using
          technologies like React, Redux, NextJS, TailwindCSS. Currently I am
          learning Blockchain, Web3 and Decentralized Finance. I am always
          excited to work with like minded people, lets discuss over coffee or
          simply reach out to me on LinkedIn.
          <br />
          <br />
          Looking for an opportunity to work in a challenging position combining
          my skills in Software Engineering, which provides professional
          development, interesting experiences and personal growth.
        </p>
      </div>
    </div>
  );
};

export default About;

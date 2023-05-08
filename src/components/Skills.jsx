import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import javascriptImg from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import nextjsImg from "../assets/nextjs.png";
import graphqlImg from "../assets/graphql.png";
import tailwindImg from "../assets/tailwind.png";
import githubImg from "../assets/github.png";
import nodeImg from "../assets/node.png";

const Skills = () => {
  const skillset = [
    {
      id: 1,
      source: htmlImg,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      source: cssImg,
      title: "CSS",
      style: "shadow-blue-700",
    },
    {
      id: 3,
      source: javascriptImg,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      source: reactImg,
      title: "React",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      source: nextjsImg,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 6,
      source: tailwindImg,
      title: "Tailwind CSS",
      style: "shadow-blue-300",
    },
    {
      id: 7,
      source: nodeImg,
      title: "NodeJS",
      style: "shadow-green-400",
    },
    {
      id: 8,
      source: githubImg,
      title: "Github",
      style: "shadow-white",
    },
    {
      id: 9,
      source: graphqlImg,
      title: "Graph QL",
      style: "shadow-pink-400",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-black w-full h-screen">
      <div className="w-full h-full max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-white">
        <div className="mx-auto mt-12 md:mt-4">
          <p className="text-4xl mx-64 md:mx-80 font-bold inline border-b-4 border-gray-500 p-2">
            Skills
          </p>
          <p className="py-6 mx-28 md:mx-48 mt-4 text-xl">
            These are the technologies I've worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skillset.map(({ id, source, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img
                src={source}
                alt={`${title}`}
                className="w-20 mx-auto"
              />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

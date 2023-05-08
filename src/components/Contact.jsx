import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/mohit-yeware-a47684164/",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/MohitYeware",
      style: "shadow-white",
    },
    {
      id: 3,
      child: (
        <>
          Gmail <CgMail size={30} />
        </>
      ),
      href: "mailto:mohit0615@gmail.com",
      style: "shadow-red-500",
    },
  ];

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="w-full h-full max-w-screen-lg mx-auto my-auto p-4 flex flex-col justify-center text-white">
        <div className="mx-auto">
          <p className="text-4xl mx-64 font-bold inline border-b-4">Contact</p>
          <p className="text-xl mx-52 mt-4 py-6">
            Feel free to connect with me
          </p>
        </div>
        <div className="mx-auto">
          <ul className="flex flex-col md:flex-row">
            {links.map(({ id, child, style, href }) => (
              <li
                key={id}
                className={`flex justify-between items-center w-40 h-14 px-4 mx-56 md:mx-8 my-8 rounded-md hover:scale-110 duration-300 shadow-md ${style} bg-black`}>
                <a
                  href={href}
                  className="flex justify-between items-center w-full text-white">
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;

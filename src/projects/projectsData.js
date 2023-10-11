import EmployeeProjectImage from "../assets/EmployeeProjectImage.png";
import PortfolioProjectImage from "../assets/PortfolioProjectImage.png";
import ChatAppImage from "../assets/ChatAppImage.png";

const projects = {
  1: {
    title: "Employee Management portal",
    image: EmployeeProjectImage,
    description: (
      <>
        <p>
        The Employee Management Portal is a digital platform designed to simplify and optimize workforce management. It offers features like View All employees, Adding an employee, update details of an employee and delete employee from the database.
        </p>
      </>
    ),
    github: "https://github.com/YaswanthParuchuri/EmployeeManagement"
    // ,demo: "https://netlify.com",
  },
  2: {
    title: "Portfolio Project",
    image: PortfolioProjectImage,
    description: (
      <>
        <p>
        This platform showcases my professional journey through an 'About Me' section, highlights skills, and displays a portfolio of my recent work. It also includes contact options for networking and collaboration, making it an essential tool for personal branding and career advancement.
        </p>
      </>
    ),
    github: "https://github.com"
    // ,demo: "https://netlify.com",
  },
  3: {
    title: "Chat Application",
    image: ChatAppImage,
    description: (
      <>
        <p>
        The Chat Application project is a dynamic and versatile messaging platform that facilitates real-time communication through text. It offers a comprehensive solution for modern communication, bridging the gap between personal connections to engage in instant one-on-one or group conversations, ensuring seamless and immediate communication.
        </p>
      </>
    ),
    github: "https://github.com/YaswanthParuchuri/myChatapp"
    // ,demo: "https://netlify.com",
  },
};

export default projects;

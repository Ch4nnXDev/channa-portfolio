import { AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';
import example from "/public/nn.jpeg"
import example2 from "/public/chat.jpeg"
import example3 from "/public/graph-Rag.jpeg"
import { CiLink } from "react-icons/ci";
import {
  

 

  BiLogoMongodb,

  BiLogoReact,

  BiLogoTailwindCss,

  BiLogoNodejs,
  BiLogoAws,

} from "react-icons/bi";

const projects = [
    {
      img:example3,
      title: "Graph Rag Application",
      description: "Developed a Retrieval-Augmented Generation (RAG) system that leverages a graph-based knowledge store to provide precise and context-aware answers. Integrated Neo4j for storing entity relationships and vector embeddings for semantic search, enabling the system to retrieve relevant information efficiently. Built with a modular architecture to handle large-scale data retrieval, question-answering, and dynamic knowledge updates, demonstrating expertise in graph databases, NLP pipelines, and AI-powered retrieval systems.",
      technologies: [<BiLogoReact className="text-orange-600"/>],
      links: {
        site: "",
        github: "https://github.com/Ch4nnXDev/graph-rag-app",
      },
    },
    
    {
        img:example2,
        title: "Distributed Real time Chat Application",
      description: "A real-time chat application built using a microservices architecture, with each service running on different ports to ensure modularity and independent scaling. Leveraging Kafka for high-throughput event streaming, API Gateway for routing and request management, and load balancing for fault tolerance and high availability. The system supports concurrent users, persistent messaging, and seamless synchronization across clients, showcasing expertise in distributed systems, scalable backend design, and microservices orchestration.",
      technologies: [<BiLogoReact className="text-orange-600"/>],
      links: {
        site: "",
        github: "https://github.com/Ch4nnXDev/Distributed-Chat-Application",
      },
    },
    {
        img:example,
        title: "Neural Network from Scratch with Tensorflow",
      description: "Built a fully connected neural network from scratch using raw TensorFlow operations, without relying on Keras. Implemented forward propagation, backpropagation, and gradient descent manually to train the model for classification tasks. This project demonstrates a solid understanding of deep learning fundamentals, tensor operations, and training loops, highlighting hands-on experience with low-level neural network implementation in TensorFlow.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      links: {
        site: "",
        github: "https://github.com/Ch4nnXDev/Neural-network-from-scratch/",
      },
    },
  ];
  
const Projects = () => {
  return (
    <div id="projects">
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' >
    <h2 className='text-3xl font-bold text-gray-200 mb-8'>Intenships & Academic Projects</h2>
    {projects.map((project, index) => (
        // eslint-disable-next-line react/jsx-key
        <Reveal>
        <div key={index} 
        className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
            <div className='w-full md:w-1/2 p-4'>
                <img
                    src={project.img}
                    alt={project.title}
                    className='w-full h-full object-cover rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 '
                />
            </div>
            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                <p className='text-gray-300 mb-4'>{project.description}</p>
                <div className="flex space-x-4 mb-4">
                  {project.technologies && project.technologies.map((tech, index) => (
                    <span key={index} className="border-purple-900 p-2 rounded-lg bg-purple-900/20 shadow-lg">
                      {tech}
                    </span>
                  ))}
                </div>
               
                <div className='flex space-x-4'>
                   
                    <a href={project.links.github}
                        className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                    transition duration-300'>
                        <AiOutlineGithub/>
                    </a>
             
                    <a href={project.links.site}
                        className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                    transition duration-300'>
                        <CiLink/>
                    </a>

                </div>

            </div>

        </div>
        </Reveal>
    ))}

</div>
</div>
)
}

export default Projects
import { SiGithub } from 'react-icons/si'

const Card = (props) => {

    return (
    <>
        <div className="card">
            <img
                src={props.thumbnail}
                alt="thumbnail"
                className="w-full object-cover"
            />
            <div className="p-7 text-center">
                <div className="flex justify-start">
                    <span className="tag">{props.filter1}</span>
                    <span className="ml-2 tag">{props.filter2}</span>
                </div>
                <h2 className="font-semibold text-xl text-left mb-4 block"> 
                    {props.title}
                </h2>
                <p className="text-left text-base font-normal leading-relaxed mb-7">
                    {props.description}
                </p>
                <div className='flex flex-col justify-around'>
                    <a className="badge-2" href={props.demoUrl} rel="noopener noreferrer" target="_blank">
                        Live Demo
                    </a>
                    
                    <a className="badge-1" href={props.githubUrl} rel="noopener noreferrer" target="_blank">
                        <SiGithub/>
                    </a>
                </div>
            </div>
        </div>
    </>
    )
}

export default Card


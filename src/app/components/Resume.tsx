import { ReactNode } from "react";
import { resume } from "../content/resume";


const bio = {
    title: resume.title,
    tagline: resume.tagline,
    address: resume.address,
    postcode: resume.postcode
}


function Experience() {

    const experience = resume.experience

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-base-100 font-bold text-xl">Experience</h1>
            <div className="flex flex-col gap-5">
                {experience.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="flex flex-col pb-2">
                                <h2 className="text-base-100 font-bold text-lg">{`${item.company} -  ${item.title}`}</h2>
                                <span>{`${item.time.start.month} ${item.time.start.year} - ${item.time.end.month} ${item.time.end.year}`}</span>
                            </div>
                            <ul className=''>
                                {item.details.map((item, index) => {
                                    return (
                                        <li key={index} className='list-disc list-inside'>{item}</li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}

            </div>
        </div>
    )
}



function Education() {

    const education = resume.education

    return (
        <>
            <div className="flex flex-col gap-4">
                <h1 className="text-base-100 font-bold text-xl">Education</h1>
                <div className="flex flex-col gap-5">
                    {education.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className="flex flex-col pb-2">
                                    <h2 className="text-base-100 font-bold text-lg">{`${item.establishment} ${item.subject != null ? " - " + item.subject : ""}`}</h2>
                                    <span>{`${item.time.start.year} - ${item.time.end.year}`}</span>
                                </div>
                                <ul className=''>
                                    {item.details.map((item, index) => {
                                        return (
                                            <li key={index} className='list-disc list-inside'>{item}</li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}

                </div>
            </div>
        </>
    )
}

function Skills() {

    const skills = resume.skills

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-base-100 font-bold text-xl">Skills</h2>
            <ul className="flex flex-col gap-2">
                {skills.map((item, index) => {
                    return (
                        <li key={index} className='hover:scale-105 hover:translate-x-2 hover:text-base-100'>{item}</li>

                    )
                })}
            </ul>
        </div>
    )
}

function Interests() {

    const interests = resume.interests

    return (
        <>
            <div className="flex flex-col gap-2">
                <h2 className="text-base-100 font-bold text-xl">Interests</h2>
                <ul className="flex flex-col gap-2">
                    {interests.map((item, index) => {
                        return (
                            <li key={index} className='hover:scale-105 hover:translate-x-2 hover:text-base-100'>{item}</li>

                        )
                    })}
                </ul>
            </div>
        </>
    )
}

function Certificates() {

    const certificates = resume.certificates

    return (
        <>
            <div className="flex flex-col gap-2">
                <h2 className="text-base-100 font-bold text-xl">Certificates</h2>
                <ul className="flex flex-col gap-2">
                    {certificates.map((item, index) => {
                        return (
                            <li key={index} className='hover:scale-105 hover:translate-x-2 hover:text-base-100 cursor-pointer'>{item}</li>

                        )
                    })}
                </ul>
            </div>
        </>
    )
}


function Section() {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-wrap md:flex-nowrap w-full h-fit justify-between gap-16">
                <div className="md:w-3/5 ">
                    <Experience />
                </div>
                <div className="md:w-2/5 flex flex-col gap-10">
                    <Skills />
                    <Interests />
                    <Certificates />
                </div>
            </div>
            <div>
                <Education />
            </div>
        </div>
    )
}

export { bio, Experience, Education, Skills, Interests, Certificates, Section }
import React from 'react'

const Skills = () => {
  return (
    <div className='my-20'>
        <h2 className='text-5xl'>Technologies I work with</h2>
        <div className='flex flex-row justify-between mx-96 mt-8'>
            <ul>
                <header className='text-2xl mb-4'>Languages</header>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SCSS / Sass</li>
                <li>Liquid</li>
            </ul>
            <ul>
                <header className='text-2xl mb-4'>Frameworks</header>
                <li>React</li>
                <li>AngularJS</li>
                <li>Hydrogen</li>
            </ul>
            <ul>
                <header className='text-2xl mb-4'>Additional</header>
                <li>Git</li>
                <li>NodeJS</li>
                <li>Bootstrap</li>
                <li>MaterialUI</li>
                <li>Tailwind</li>
                <li>Docker</li>
            </ul>
        </div>
    </div>
  )
}

export default Skills
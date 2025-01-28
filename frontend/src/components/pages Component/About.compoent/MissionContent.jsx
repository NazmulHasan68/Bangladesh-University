import React from 'react'

export default function MissionContent() {
  return (
    <div className='max-w-5xl mx-4 md:mx-auto flex flex-col gap-5 my-10'>
        <div className='flex flex-col gap-1 p-4 rounded-3xl bg-slate-200'>
            <h1 className='text-red-500 text-xl font-bold py-2'>Mission</h1>
            <h2 className='text-red-400 font-semibold text-lg '>The mission of Bangladesh University may focus on:</h2>
            <p className='text-slate-600 italic py-2 '>
                Providing Quality Education: A commitment to delivering high-quality education that meets international standards.
                Research and Innovation: Encouraging research and innovation to address national and global challenges.
                Community Engagement: Engaging with the community to foster social, cultural, and economic development.
                Skill Development: Equipping students with the skills and knowledge necessary to excel in their professional lives and contribute to the nation's development.
            </p>
        </div>
        <div className='max-w-4xl mx-auto p-4 rounded-3xl bg-sky-400 h-32 w-full'>

        </div>
        <div className='flex flex-col gap-1 p-4 rounded-3xl bg-slate-200'>
            <h1 className='text-red-500 text-xl font-bold py-2'>Vision</h1>
            <h2 className='text-red-400 font-semibold text-lg '> The vision of Bangladesh University might include: </h2>
            <p className='text-slate-600 italic py-2 '>
                Becoming a Leading Institution: Aspiring to be a leading university in Bangladesh and recognized globally for its academic excellence.
                Creating Knowledge Leaders: Developing leaders who are knowledgeable, innovative, and capable of making significant contributions to society.
                Sustainable Development: Promoting sustainable development through education, research, and community service.
            
            </p>
        </div>
       
       

      </div>
  )
}

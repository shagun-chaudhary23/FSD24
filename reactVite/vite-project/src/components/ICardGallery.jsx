import React from 'react'
import ICard from './ICard'
function ICardGallery() {
  const student={
    college:'ABES Engineering College',
    pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6nBMQ1F_W-Yva5cLK04TWWVRUFWw6sACmFcn_icun3Q&s',
    rollNo:'1010',
    name:'Shagun Chaudhary',
    branch:'CSE',
    section:'24',
    skills:'Java , DSA'
  }  
  return (
    <div>
        {/* <ICard 
        college="ABES ENGINEERING COLLEGE" 
        pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6nBMQ1F_W-Yva5cLK04TWWVRUFWw6sACmFcn_icun3Q&s"
        rollNo="2400320101019" 
        name="Shagun Chaudhary" 
        branch="CSE" 
        section="24" 
        skills="Java , MERN Stack , DSA , Vibe Coding"
        />
        <ICard 
        college="ABES ENGINEERING COLLEGE" 
        rollNo="2400320101020"
        name="John Doe"
        branch="CSE" 
        section="24"
        skills="Python , React , DSA"
        />
        <ICard 
        college="ABES ENGINEERING COLLEGE"
        rollNo="2400320101021"
        name="Jane Smith"
        branch="CSE"
        section="24"
        skills="JavaScript , Node.js , DSA"
        /> */}
 {/* <ICard data={student}/> */}

 {student.map((ele)=>(
    <Icard data={ele}/>
 ))}
    </div>
  )
}

export default ICardGallery
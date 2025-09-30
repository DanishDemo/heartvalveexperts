import React from 'react'
import BreadCrumb from '../../component/BreadCrumb'
import Mision from '@/component/Mision'
import TaviSection from '@/component/Services/TaviSection'
import Doctors from '@/component/Doctors'
import AppointmentCTA from '@/component/AppointmentCTA'
import FollowUpSection from '@/component/Services/FollowUpSection'
import ASDClosureSection from '@/component/Services/ASDClosureSection'

const cardiologistspage = () => {
  return (
    <>
    <BreadCrumb title='Cardiologists' subpage='false' image="/images/service/teer/bread.png"/>
      <TaviSection
        imageSrc="/images/service/tavi.webp"
        imageAlt="TAVI Surgery"
        tag="About"
        title="What is TAVI Surgery/Procedure?"
        description={[
          "TAVI, or Transcatheter Aortic Valve Implantation, is a minimally invasive procedure used to treat a narrowed aortic valve, also known as aortic stenosis. It is also referred to as TAVR surgery/procedure, which stands for Transcatheter Aortic Valve Replacement. Instead of opening the chest as in traditional surgery, the TAVI surgery in Mumbai is a suture-less procedure.",
          "It involves inserting a new valve through a catheter, usually via the femoral artery in the thigh, and positioning it inside the damaged valve. The TAVI procedure in Mumbai is especially recommended for patients who are at high risk for open-heart surgery due to advanced age or other underlying health conditions."
        ]}
        buttonText="Book Appointment Now"
      />
      <Mision/>
      <Doctors />
      <section className="animate-gradient-circle text-white relative overflow-hidden">
        <FollowUpSection
          tag="Procedure Follow Up"
          title="Long-Term Follow Up After TAVI Procedure"
          intro="Modern transcatheter valves are designed for durability, but like all bioprosthetic valves, they can show structural deterioration over time."
          subIntro="The 10-year NOTION trial, which evaluated earlier generation TAVI devices, found that:"
          bulletPoints={[
            "TAVI valves had comparable long-term clinical outcomes to surgical valves, with similar rates of mortality, stroke, and myocardial infarction.",
            "TAVI valves showed a lower rate of severe structural valve deterioration (SVD) compared to surgical valves at 10 years.",
            "Hemodynamic performance was favorable for TAVI valves.",
            "The overall rate of bioprosthetic valve failure was similar between TAVI and surgical valves."
          ]}
          conclusion="This highlights the importance of long-term planning with your heart team, considering factors like valve type, patient anatomy, and individual risks to ensure the best possible care throughout your lifetime."
          buttonText="Book Appointment Now"
          imageSrc="/images/service/process.jpg"
          imageAlt="Doctor Consultation"
        />
      </section>
       <ASDClosureSection
          tag="How It's Done"
          title="How Is ASD Closure Done?"
          imageSrc="/images/service/process.jpg"
          imageAlt="ASD Closure Illustration"
          steps={[
            { text: <>A small incision is made in the <b>femoral vein</b> in the groin.</> },
            { text: <>A catheter is guided to the heart using <b>fluoroscopy, TEE, and ICE</b> for defect visualization.</> },
            { text: <>The size of the <b>atrial septal defect</b> is carefully assessed.</> },
            { text: <>A <b>ASD closure device</b> is positioned across the defect via catheter.</> },
            { text: <>The device is released once proper positioning is confirmed.</> },
            { text: <>The catheter is withdrawn, and the puncture site is closed with a stitch or compression dressing.</> },
            { text: <><b>Post-procedure recovery</b> is generally faster, with lower chances of complications.</> },
          ]}
        />
      <AppointmentCTA/> 
    </>
  )
}

export default cardiologistspage
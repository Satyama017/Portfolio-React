import EducationCard from "./EducationCard";

function Education(){
    return(
        <section className="education">
  <h2 className="section-title">Education</h2>
  <div className="timeline">
  <EducationCard
    year="2020 - 2024"
    degree="Bachelor of Technology in Computer Science and Engineering"
    institute="Pimpri Chinchwad College Of Engineering"
    score="CGPA: 8 out of 10"
  ></EducationCard>

  <EducationCard
    year="2019 - 2021"
    degree="Higher Secondary Certificate"
    institute="Innovative Junior College"
    score="95.2% in HSC"
  ></EducationCard>
    
  <EducationCard
    year="2018 - 2019"
    degree="Secondary School Certificate (SSC)"
    institute="Innovative Public School"
    score="93% in SSC"
  ></EducationCard>

</div>
  </section>
  )
}

export default Education;
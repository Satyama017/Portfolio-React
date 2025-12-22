function SkillPill({ name,skillURL }) {
  return (
    <div className="skill-pill">
      <img className="skill-icon" src={skillURL}/>
      <span>{name}</span>
    </div>
  );
}

export default SkillPill;
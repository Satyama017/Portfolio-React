function EducationCard({year, degree, institute, score}){
    return(
    <div data-aos="fade-up" className="timeline-item">
        <span className="year">{year}</span>
        <div className="dot"></div>
        <div className="content">
            <h3>{degree}</h3>
            <p>{institute}</p>
            <span className="badge">{score}</span>
        </div>
    </div>
    )
}

export default EducationCard;
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const ProjectCard = ({ title, description, imgUrl, icon }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
         < br/>
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
    </Col>
  )
}

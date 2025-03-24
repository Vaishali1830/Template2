import React from "react"
import { Link } from "react-router-dom"

interface LinkComponentProps {
    title : string,
    route : string,
}
const LinkComponent:React.FC<LinkComponentProps> = ({ title , route }) => {
  return (
    <div>
      <Link to={route} className="text-sm anchor-text">{title}</Link>
    </div>
  )
}

export default LinkComponent

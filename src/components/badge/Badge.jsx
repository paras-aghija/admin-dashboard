import './Badge.css'


const Badge = (props) => {
    return (
        <span className={`badge badge-${props.style}`}>
            {props.content}
        </span>
    )
}

export default Badge
  
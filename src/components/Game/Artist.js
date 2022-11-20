import './styles.css'

const Artist = (props) => {
    return (
        <button>{props.name}</button> // needs onclick event of choosing this artist
    )
}

export default Artist
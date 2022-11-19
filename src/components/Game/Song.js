import './styles.css'

const Song = (props) => {
    return (
        <button className='Song'>{props.name}</button> // needs onclick event for playing song
    )
}

export default Song
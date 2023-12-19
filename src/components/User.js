const User = ({ name }) => {
    return <div className="user-card">
        <div className="user-img">
            <img alt="Kulamani-img"></img>
        </div>
        <div className="user-datails">
            <h1>{name}</h1>
            <h3>Software Engineer</h3>
            <h3>Fullstack Developer</h3>
        </div>
    </div>
}
export default User;
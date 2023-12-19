import { render } from "react-dom";
import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userinfo: {
                name: "alex",
                avatar_url: "https://dummy.com",
                followers: 0,
                following: 0,
                public_repos: 0,
            },
        };
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Kulamanipradhan");
        const json = await data.json();

        this.setState({
            userinfo: json,
        });
    }
    componentDidUpdate() {

        alert("userProfile Updated")
    }
    componentWillUnmount() {
        alert("you are leaving")
    }
    render() {

        const { name, avatar_url, followers, following, public_repos } =
            this.state.userinfo;

        return (
            <div className="user-card">
                <div className="user-img">
                    <img src={avatar_url} alt="Kulamani-img"></img>
                    <div>
                        <h3 style={{ color: "black" }}>
                            Followers: {followers} {"          "} following:{following}
                        </h3>
                    </div>
                </div>
                <div className="user-datails">
                    <h1>{name}</h1>
                    <h3>Software Engineer</h3>
                    <h3>Fullstack Developer</h3>
                    <h3> Github Repository {public_repos}</h3>
                </div>
            </div>
        );
    }
}
export default UserClass;

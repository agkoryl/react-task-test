import React from 'react';


import './Users.css';

class Users extends React.Component {

    state = {
        users: []
    }

    fetchUsers() {
        const users = [];
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(data => {
                data.results.forEach(user => {
                    users.push({ userId: user.login.uuid, userName: user.name.first, userLastName: user.name.last, userEmail: user.email, img: user.picture.large })
                });
                this.setState({ users });
            })
            .catch(error => { console.error('error'); });
    }

    componentDidMount() {
        this.fetchUsers();
    }

    render() {
        const { users } = this.state;

        return (
            <div className="content-container">
                {users.map(user =>
                    <div className="user-content-container" key={user.userId}>
                        <div><img src={user.img} className="user-photo" alt="user-face"></img></div>
                        <div className="user-details">
                            <p>Imię: {user.userName}</p>
                            <p>Nazwisko: {user.userLastName}</p>
                            <p>Email: {user.userEmail}</p>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}


export default Users;


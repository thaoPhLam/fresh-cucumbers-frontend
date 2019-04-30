import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
            <div className="FormCenter">
                <h2>Registration</h2>
                <form onSubmit={this.handleSubmit} className="FormFields">
                    <div className="FormField">
                        <input
                            type="text"
                            id="name"
                            className="FormField_Input"
                            placeholder="Enter your full name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange} />
                        <br/>
                        <label className="FormField_Label" htmlFor="name">Full Name</label>

                    </div>
                    <div className="FormField">
                        <input
                            type="password"
                            id="password"
                            className="FormField_Input"
                            placeholder="Enter your password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange} />
                        <br/>
                        <label className="FormField_Label" htmlFor="password">Password</label>
                    </div>
                    <div className="FormField">
                        <input
                            type="email"
                            id="email"
                            className="FormField_Input"
                            placeholder="Enter your email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange} />
                        <br/>
                        <label className="FormField_Label" htmlFor="email">E-Mail Address</label>
                    </div>
                    <div className="FormField">
                        <button className="FormField_Button mr-20">Sign Up</button> <Link to="/login" className="FormField_Link">I'm already member</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;
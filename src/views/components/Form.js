import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add_user } from '../../redux/actionsCreators/Creators';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

class Form extends Component {
    constructor(props) {
        super(props);        

        this.state = {
            id: 2,
            firstname: '',
            lastname: '',
            email: '',
            open: false,
            transition: undefined
        };

    }
    
    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    onFormSubmit = (event) => {        
        this.props.handleSubmit(this.state);
        const { firstname, lastname, email } = this.state;
        event.preventDefault();
        this.props.add_user(firstname, lastname, email);
    }
    onClickUp = () => {
        this.setState((prevState) => {
            return {
                id: prevState.id + 1,
            }
        })
    };

    TransitionUp(props) {
        return <Slide {...props} direction="up" />;
    }

    onSnackbarOpen(Transition) {
        this.setState(state => ({ transition: Transition, open: true }))
    }

    render() {
        const { firstname, lastname, email } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <div class="block"><label for="firstname">FirstName</label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={firstname}
                        onChange={this.handleChange} 
                    />
                </div>

                <div class="block"><label for="lastname">LastName</label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={lastname}
                        onChange={this.handleChange}
                    />
                </div>

                <div class="block">
                    <label for="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                </div >

                <div class="block1">
                    <button type="submit" onClick={this.onClickUp, () => this.setState({ open: true, transition: this.TransitionUp })}> 
                        Add User
                    </button>
                    <Snackbar                    
                        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                        open={this.state.open}
                        onClose={() => this.setState({ open: false })}
                        TransitionComponent={this.state.transition}
                        message="User added!"
                        key={this.state.transition ? this.state.transition.name : ''}
                        autoHideDuration={2000}
                        transitionDuration={500}
                    />
                </div>

                <h3>Users</h3>
                
            </form>

        );
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        add_user: (firstname, lastname, email) => dispatch(add_user(firstname, lastname, email))
    }
}

export default connect(null, mapDispatchToProps)(Form);
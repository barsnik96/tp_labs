import React, { Component } from 'react';
import '../../css/App.css';
import Table from './Table';
import Form from './Form';
import { connect } from 'react-redux';
import { delete_user } from '../../redux/actionsCreators/Creators';
import FooterThunkButton from './FooterThunkButton';

class App extends Component {
    state = {
        characters: this.props.data
    };
    handleSubmit = character => {
        this.setState({ characters: [...this.props.data, character] });
    }
    handleSubmit2 = data => {
        this.setState({ characters: this.props.data} );
    }


    render() {
        const { characters } = this.state ;
        return (
            <div className="container">
                <h1>Add user</h1>
                <Form handleSubmit={this.handleSubmit} />
                <br></br>
                <Table
                    handleSubmit={this.handleSubmit2}
                    characterData={characters}
                    removeCharacter={this.props.removeCharacter}
                />
                <FooterThunkButton/>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        data: state.table_reducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeCharacter: (id) => dispatch(delete_user(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
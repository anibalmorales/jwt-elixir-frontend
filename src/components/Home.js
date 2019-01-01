import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';

import axios from 'axios';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
          name: '',
          error: ''
        }
      }
    
    componentDidMount(){
        axios({
            method: 'GET',
            url: 'http://localhost:4000/api/v1/hoteles',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' +  localStorage.getItem('jwt')
            },
        }).then((response) => {
          this.setState({
            name: response.data.data
          });
        }).catch((error) => {
          this.setState({
            error: 'Error retrieving data'
          });
        });
    }

    render() {
        const {isAuthenticated} = this.props.auth;
        const { name } = this.state;
        const authLinks = (
            Object.keys(name).map(key => (
                <li key={key}>{name[key].name} </li>
             ))
        )
      const guestLinks = (
        <h2>Bienvenido a Home componente usted no esta logeado</h2>
      )
        return(
            <div className="container" style={{ marginTop: '20px'}}>
               {isAuthenticated ? authLinks : guestLinks}
            </div>
            
        );
    }
}

Home.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { loginUser })(withRouter(Home));
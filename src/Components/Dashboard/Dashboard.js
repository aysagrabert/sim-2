import React, {Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'

class Dashboard extends Component{
    constructor(){
        super();
        this.state = {
            name: '', 
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }



    render(){
        return(
            <div className='dashboard'>
             <p className='name-dash'>Dashboard</p>

            <Link to='/wizard'><button>Add New Property</button></Link>  
                <House/>
            </div>
        )
    }
}

export default Dashboard;
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Wizard extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: '', 
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState ({
            [name]: value
        })
    }


    render(){
        return(
            <div className='wizard'>
                <section className='name-cancel'>
                    <p>Add New Listing</p>

                    <Link to='/'><button>Cancel</button></Link>
                </section>
                
                <article className='input-container'>
                    <p>Property Name</p>
                    <input className='input-name' name='name' value={this.state.name}onChange={e => this.handleChange(e)}/>

                    <p>Address</p>
                    <input className='input-address' name='address' value={this.state.address} onChange={e => this.handleChange(e)}/>

                    <p>City</p>
                    <input className='input-city' name='city' value={this.state.city}onChange={e => this.handleChange(e)}/>

                    <p>State</p>
                    <input className='input-state' name='state' value={this.state.state}onChange={e => this.handleChange(e)}/>

                    <p>Zip</p>
                    <input className='input-zip' name='zipcode' value={this.state.zipcode} onChange={e => this.handleChange(e)}/>
                </article>
            </div>
        )
    }
}
export default Wizard;
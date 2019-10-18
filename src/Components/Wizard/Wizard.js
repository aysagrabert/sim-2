import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Wizard extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
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
                    <input/>

                    <p>Address</p>
                    <input/>

                    <p>City</p>
                    <input/>

                    <p>State</p>
                    <input/>

                    <p>Zip</p>
                    <input/>
                </article>
            </div>
        )
    }
}
export default Wizard;
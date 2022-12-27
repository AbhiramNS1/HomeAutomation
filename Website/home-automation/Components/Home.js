import React from 'react'
import styles from './Home.module.css'
import "react-toggle/style.css"
import Toggle from 'react-toggle'
class Home extends  React.Component{

    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <h2 style={{padding:10}}>OVERVIEW</h2>
                <div className={styles.box}>
                    Light
                    <label>
                    <Toggle
                        defaultChecked={false}
                        icons={false}
                      //  onChange={this.handleTofuChange} 
                        />
                  
                    </label>
                </div>
            </div>
        )
    }

}

export default Home
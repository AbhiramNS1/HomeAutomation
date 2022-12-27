import styles from './SideBar.module.css'
import logo from '../public/res/pluto.png'
import Image from 'next/image'
import {Component}  from 'react'

class SideBar extends Component{
    state={width:0,height:0}
    constructor(){
        super()
    }
    updatedimen=()=>{
        this.setState({width:window.innerWidth,height:window.innerWidth})
    }
    componentDidMount(){
        window.addEventListener('resize',this.updatedimen)
    }
    componentWillUnmount(){
        window.removeEventListener('resize',this.updatedimen)
    }
    
    render(){
        let imageDim,containerWidth,fontS
        if(this.state.width>900){
            if(this.state.width<1200){
                //  900px < W < 1200px
                    imageDim='14vw'
                    containerWidth='25vw'
                    
            }
            else{
                // W > 1200px
                    imageDim=160
                    containerWidth=300
            }

        }
        else{
            // W < 900
            imageDim=60
            containerWidth=60
        }
        


        return (
            <div className={styles.parent} style={{width:containerWidth}}>
                    <h1 style={{fontSize:10,padding:10}}>PLUTO</h1>
                    <Image style={{padding:10,width:imageDim,height:imageDim}}  draggable={false}   src={logo} />
            </div>)
    }
}

export default SideBar
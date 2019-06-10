import React from 'react'
import './Layout.scss';
import Toolbar from './../../components/Navigation/Toolbar/Toolbar';
import Footer from './../../components/Footer/Footer';
import './Layout.scss';
const layout = (props) =>(
    <div className = "Layout">
        <>
      
        <Toolbar/>
        <main className="Content">
                {props.children}
        </main>
        <Footer/>
      
        
        </>
    </div>
  
)

export default layout;
import './Main.css'
import React from 'react'
import Header from './Header'

export default props =>
 <React.Fragment> {/*Utilizado para renderizar multiplos conteúdos */}
    <Header {...props}/>
    <main className=' container-fluid'>
        <div className="p-3 mt-3">
            {props.children}
        </div>
    </main>

 </React.Fragment>
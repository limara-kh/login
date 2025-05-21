import {useState} from 'react'
import './HW2.css'

function HW2(){
    const[isLoggedIN, setLoggedIN] = useState(false)
    const[isRegister, setRegister] = useState(false)
    return(
        <div className='container'>
            <div className='section' style={{
                display: isRegister ? 'none' : 'block'
            }}>
               <h1>{isLoggedIN ? 'Бастапқы бетке қош келдіңіз' : 'Жүйеге кіру қажет'}</h1>
               <button className='btn' onClick={()=>setLoggedIN(!isLoggedIN)}>{isLoggedIN ? 'Logout' : 'Login'}</button>
                {isLoggedIN && <button className='btn' onClick={()=>{setRegister(!isRegister)}}>Register</button>}
            </div>
            <div className='section' style={{
                display: !isRegister ? 'none' : 'block'
            }
            }>
                <input className='input' type="text" placeholder="Аты-жөніңіз"/>
                <input className='input' type="text"placeholder="Телефон нөмеріңіз"/>
                <button className='btn' onClick={()=> setRegister(!isRegister)}>Register</button>
                
            </div>
        </div>
    )
}
export default HW2;

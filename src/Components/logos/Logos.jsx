import React from 'react'
import "./logos.css"
import ll1 from './../../assets/img/ll1.svg'
import ll2 from './../../assets/img/ll2svg.svg'
import ll3 from './../../assets/img/ll3.svg'
import ll4 from './../../assets/img/ll4.svg'

function Logos() {
  return (
    <div className='Logos'>
        <h1>الجهات ذات الصلة</h1>
        <div className='log'>
       <div className='one'>
       <img src={ll4}/>
       <h2>الهيئة الناظمة للاتصالات</h2>
       </div>
       <div className='two'>
       <img src={ll3}/>
       <h2>البريد السوري</h2>
       </div>
       <div className='three'>
       <img src={ll2}/>
       <h2>السورية للاتصالات</h2>
       </div>
       <div className='four'>
       <img src={ll1}/>
       <h2>مركز خدمة المواطن</h2>
       </div>

        </div>
    </div>
  )
}

export default Logos
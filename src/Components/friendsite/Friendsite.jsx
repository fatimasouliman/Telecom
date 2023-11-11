import React from 'react'
import "./friendsite.css"
import f1 from './../../assets/img/f1.svg'
import f2 from './../../assets/img/f2.svg'
import f3 from './../../assets/img/f3.svg'
import f4 from './../../assets/img/f4.svg'
import f5 from './../../assets/img/f5.svg'
function Friendsite() {
  return (
    <div className='friend'>
        <h1>المواقع الصديقة</h1>
        <div className='fri'>
            <div className='ff'>
            <img src={f5}/>
            <h2>الأمم المتحدة
            الإسكوا</h2>
            </div>
            <div className='ff'>
            <img src={f4}/>
            <h2>مجلس الشعب</h2>
            </div>
            <div className='ff'>
            <img src={f3}/>
            <h2>الحكومة  الالكترونية</h2>
            </div>
            <div className='ff'>  
            <img src={f2}/>
            <h2>الجمعية العلمية
            للمعلوماتية</h2>
            </div>
            <div className='ff'>
            <img src={f1}/>
            <h2>مجلس الوزراء</h2>
            </div>
            
        </div>
    </div>
  )
}

export default Friendsite
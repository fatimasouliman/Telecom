import React from 'react'
import "./media.css"
import media from './../../assets/img/media.svg'
import arrow from '../../assets/img/more.svg'
function Media() {
  return (
    <div className='cont'>
      <h1 className='title'>المركز الاعلامي</h1>
      <div className='media-center'>
        <div className='pic'><img src={media} alt="pic" /></div>
        <div className='lines'>
          <h2 className='font'>مباحثات سورية تونسية لتطوير التعاون المشترك بمجال الاتصالات والتقانة </h2>
          <h2 className='font'>ورشة عمل حول توظيف التوقيع الرقمي بمنظومات وزارة المالية </h2>
          <h2 className='font'>وزارة الاتصالات والتقانة تعلن للمرة الثانية عن إجراء مناقصة داخلية للقيام بأعمال تنظيف لبنائيها </h2>
          <h2 className='font'>مباحثات سورية إيرانية لتطوير العلاقات المشتركةبقطاع الاتصالات </h2>
          <img className='more-btn' src={arrow} />
        </div>
        
      </div>
    </div>
  )
}

export default Media
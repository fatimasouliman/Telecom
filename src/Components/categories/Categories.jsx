import React, { useRef } from 'react'
import "./categories.css"
import { useState , useEffect } from 'react'
import plus from './../../assets/img/plus.svg'
import plus2 from './../../assets/img/plus.svg'
import axios from 'axios'


function Categories() {
    const [data , setData] = useState() 
    useEffect( () => {
        async function get() {
          await axios.get("https://unnerving-departure.000webhostapp.com/api/mainCategories")
      .then(res => setData(res.data.data))
      // console.log(data)
      }
      get()
      } , [])
 
    const [open , setOpen] = useState(false);
    const list = ["المكتبة الالكترونية" ,"النشاطات والفعاليات","SAS Expo" ,"إعلان الاعتمادية السورية لشركات البرمجيات"
    ,"إعلان التعاقد السنوي", "استراتيجية التحول الرقمي للخدمات الحكومية","السياسات البريدية", "سياسة الخدمة الشاملة"];
    window.addEventListener('click', (e)=>{
        if(e.target !== listRef.current && e.target !== imgRef.current ){
            setOpen(false);
        }
         } );
         
const listRef = useRef();
const imgRef = useRef();

         const [open2 , setOpen2] = useState(false);
         const list2 = [" لمحة تاريخية" ,"المهام والأهداف ","الهيئات والمؤسسات " ," الهيكل التنظيمي"
         ," الخطط الاستثمارية", ];
         window.addEventListener('click', (e)=>{
             if(e.target !== listRef2.current && e.target !== imgRef2.current ){
                 setOpen2(false);
             }
              } );
              const listRef2 = useRef();
const imgRef2 = useRef();


const [open3 , setOpen3] = useState(false);
const list3 = ["قانون الإتصالات " ,"قانون المعاملات الإلكترونية "," قانون حماية الحقوق" ,"قانون التوقيع الرقمي    "
,"قانون البريد  "];
window.addEventListener('click', (e)=>{
    if(e.target !== listRef3.current && e.target !== imgRef3.current ){
        setOpen3(false);
    }
     } );


const listRef3 = useRef();
const imgRef3 = useRef();

 
     return (
       <div className='container-catg'>
         <h1 className='t-catg'>التصنيفات الرئيسية</h1>
      
         <div className="Categories">
            
         {
          data? data.map(ele => [
            <div className='blue'><h2> {ele.title.ar}</h2></div>
          ]
          ):null
        }
         </div> 

     
   
         <div className='responsive'>
   
          <div className='res'>
           <img onClick={() => setOpen(!open)}
           ref={imgRef}
           className='plus1'
           src={plus} alt='plus'
           /> 
           <h2 className='tt'>التصنيفات الرئيسية</h2> 
         
   {open && (
    <div ref={listRef} className='ll'>
           <ul >
           {list.map ((item) => (
               <li onClick={() => setOpen(false)}
                key={item}> 
               {item}
               </li>
             ) )}
          </ul>
          </div>)}
        
         
          </div> 

      <div className='res2'>
      <img onClick={() => setOpen2(!open2)}
           ref={imgRef2}
           className='plus2'
           src={plus2} alt='plus'
           /> 
        <h2  className='tt'>عن الوزارة</h2>
        {open2 && (
    <div ref={listRef2} className='ll'>
           <ul >
           {list2.map ((item) => (
               <li onClick={() => setOpen2(false)}
                key={item}> 
               {item}
               </li>
             ) )}
          </ul>
          </div>)}
      </div>

      <div className='res3'>
      <img onClick={() => setOpen3(!open3)}
           ref={imgRef3}
           className='plus3'
           src={plus2} alt='plus'
           /> 
        <h2  className='tt'>قوانين الوزارة</h2>
        {open3 && (
    <div ref={listRef3} className='ll'>
           <ul >
           {list3.map ((item) => (
               <li onClick={() => setOpen3(false)}
                key={item}> 
               {item}
               </li>
             ) )}
          </ul>
          </div>)}
      </div>
   
         </div>
         
       



       
       
     </div>
      
     )
   }

export default Categories
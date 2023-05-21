import { height } from '@mui/system'
import React from 'react'

function Sidebar() {
  return (
    <div className='flex justify-between'>
<div style={{
            textAlign:"start",
            // borderBlockColor:"GrayText",
          width: "93%",
          height: "920px",
          marginLeft:"2.5%",
          marginTop:"2%",
          //   paddingLeft:"5%",
          //   paddingRight:"5%",
          //   paddingTop:"2%",
          //   marginLeft: "2%",
        }} >
      <textarea
        placeholder="Type @ Insert "
        style={{
            // textAlign:"start",
            // borderBlockColor:"GrayText",
            wordWrap:"break-word", 
            marginLeft:"2.5%",
            marginTop:"2%",
            width:"93%",
        //   backgroundColor:"red",
          height:"900px",
        //   lineHeight:"900px",
        //   height:"22px"
          paddingLeft:"8%",
          paddingRight:"5%",
          paddingTop:"10%",
        //   marginLeft: "2%",
        }}
      />
    </div>
        <div className='mr-2 ' >

      <img src={"https://th.bing.com/th/id/OIP.jQRY8noDXq8vwcVEIr6UWQHaHa?pid=ImgDet&rs=1"}
      className='w-7 h-7 mt-4 mb-4 rounded-xl'
      />
      
      <img src={"https://th.bing.com/th/id/OIP.77f9C2YXiHoEWpJ-K-2uTwHaHa?pid=ImgDet&rs=1"}
      className='w-7 h-7 mt-4 mb-4 rounded-xl'
      />
      
      <img src={"https://blog.tcea.org/wp-content/uploads/2020/02/1200px-Google_Contacts_icon.svg.png"}
      className='w-7 h-7 mt-4 mb-4 rounded-xl'
      />
      
      <img src={"https://th.bing.com/th/id/OIP.PVMRPdMYbLyFYbBFINAHdAHaHa?pid=ImgDet&rs=1"}
      className='w-7 h-7 mt-4 mb-4 rounded-xl'
      />
      <div className='opacity-20 '>
      <span class="material-symbols-outlined">
horizontal_rule
</span>
      </div>
      <span class="material-symbols-outlined">
add
</span>
      </div>

    </div>
  )
}

export default Sidebar

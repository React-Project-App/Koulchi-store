import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetTeam } from '../../Actions/AboutTeam';
import HeaderBlog from '../../Components/HeaderBlog/HeaderBlog';
import Member from '../../Components/Member/Member'



function AboutUs() {
    const dispatch=useDispatch();
    useEffect(_=>{
        dispatch(GetTeam())
    },[])
    const team=useSelector(state=>state.AboutTeam)
    // console.log(team)
  return team.length>0?(
    <div className='content'>
      <HeaderBlog title="About Us "/>
      <div className="team-section container-fluid mb-3 ">
				{/* <!-- Container --> */}
				<div className="container">
					{/* <!-- Section Header --> */}
					<div className="text-center team-header ">
						<h3 className='text-dark fw-bold'>Our Excellent Team</h3>
						{/* <img src="https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/Logo%2Fseparator-1.png?alt=media&token=d4cde925-a9a0-4ba7-8dfb-0bfa8025bff2"  /> */}
					</div>
                    <div className='row mt-5'>
                    {
                        team.map((member)=>{
                            return(
                                <Member member={member}/>
                            )
                        })
                    }
                    </div>
				</div>
                
			</div>
    </div>
  ):(
    <div className='d-flex justify-content-center align-items-center load'>
  <div className='loader'></div>
      </div> )
}

export default AboutUs

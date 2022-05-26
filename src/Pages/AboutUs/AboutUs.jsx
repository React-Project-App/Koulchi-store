import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetTeam } from '../../Actions/AboutTeam';
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
      <div class="team-section container-fluid">
				{/* <!-- Container --> */}
				<div class="container">
					{/* <!-- Section Header --> */}
					<div class="text-center team-header ">
						<h3 >Our Excellent Team</h3>
						
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

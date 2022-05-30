import React from "react";

function HeaderBlog({title,para}) {
  return (

    <div class="page-banner  no-padding">
			
				<div class="">
					<div class="wrapper text-center">
						<h1 className='text-dark title-header'>{title}</h1>
						<img src="https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/Logo%2Fseparator-1.png?alt=media&token=d4cde925-a9a0-4ba7-8dfb-0bfa8025bff2"  />
						<p className='text-dark ms-3'>{para}</p>
					</div>
				</div>
			</div>
  )

}

export default HeaderBlog;

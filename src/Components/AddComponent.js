import '../Stylesheets/Stylegallery.css';
import React,{useState} from 'react';
import {image_data} from '../Shared/image';
function Addcomponent(){
	 
	 const [category,addcategory]=useState("all");
	
	return(
			<div className="react_gallery_container" >
				<div className="title_gallery">
					<h1>React Gallery</h1>
				</div>
				<div className="big_container">
				<div className="button_container">
					<button className="button_tags" onClick={()=>addcategory('Birds')}>Birds</button>
					<button className="button_tags" onClick={()=>addcategory('Mountain')}>Mountain</button>
					<button className="button_tags" onClick={()=>addcategory('Butterfly')}>Butterfly</button>
					<button className="button_tags" onClick={()=>addcategory('sea')}>Sea</button>
					<button className="button_tags" onClick={()=>addcategory('Food')}>Food</button>
					<button className="button_tags" onClick={()=>addcategory('all')}>All</button>
					{/*<button className="button_tags">Add Images</button>*/}
				</div>
					<div className="grid_container">
						{
							image_data.map((value)=>(
								(category==value.category)?
								<div className="grid_item">
									<img src={value.image_url} className="img"/>
								</div>
								:(category=="all")?
								<div className="grid_item">
									<img src={value.image_url} className="img"/>
								</div>
								:''

							))
						}
					</div>
				</div>
			</div>
		);
}
export default Addcomponent;
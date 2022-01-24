import '../Stylesheets/Stylegallery.css';
import React,{useState} from 'react';
import {image_data} from '../Shared/image';
function Addcomponent(){
	 
	 const [category,addcategory]=useState("all");
	 // console.log(category);
	 // const filterItem =(addcategory)=>{
	 // 	const updatedcategory=image_data.filter((viewcategory)=>{
	 // 		return viewcategory.category === addcategory;
	 // 	})
	 // 	setItems(updatedcategory)
	 // }
	 // const addcategory=(valuecategory)=>{
	 // 	const newcategry=image_data.filter((category)=>{
		// 	if(category.category === valuecategory){
		// 		// <img src={category.image_url} alt="">

		// 		console.log(category.image_url)
		// 	}

	 // 	})
	 // }
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
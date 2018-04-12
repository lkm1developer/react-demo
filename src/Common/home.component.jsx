import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {cars:[]};
      }
      componentDidMount() {
      /* 
        let user=fetch('http://localhost:5000/getallcars', { 
            method: 'get',
           
          })
          .then( (response) => {
            return response.json()    
         })
         .then( (json) => {
           if(json.status===true){
            
            const cars=  json.cars;
            this.setState({cars});
           
        }
            
           }) */
		   const data = [
            {
               
                media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg'
               

            },
            {
                
                media: 'http://media.ed.edmunds-media.com/mercedes-benz/amg-gt/2016/oem/2016_mercedes-benz_amg-gt_coupe_s_fq_oem_1_717.jpg'

            },
            {
                
                media: 'http://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_1_717.jpg'
                
            }
        ];
        // Update state
        this.setState({cars: data});
    };
       
      
    
      
    render(){
       
        // Map through cars and return linked cars
        const carNode = this.state.cars.map((car) => {
            return (
                <div className="col-md-4">
                   <img src={car.media}/>
                    
                </div>
            )
        });
        return (
            <div>
                <div className="row">
				<div className="col-md-6"><h2>Family Menu</h2></div>
                <div className="col-md-6"><h2>Member log in</h2></div>
				</div>
                <div className="row">
                    {carNode}
                </div>
				<div className="row">
                    {carNode}
                </div><div className="row">
                    {carNode}
                </div>
				<div className="innercontent">
						 <div className="row">
						<div className="col-md-4"></div>
						<div className="col-md-4 formmm">
						<h4 className="formheadr"> Lets find a perfect Family</h4>
						<h6 className="formheadrs"> Lets find a perfect Family Lets find a perfect Family</h6>
						<input type="text" placeholder="Zip code"/><br/>
						<button className="btn btn-primary"> Confidentials screening</button>
						</div>
						<div className="col-md-4"></div>
						</div>
                </div>
				
            </div>
        );
    }
}


export default Home
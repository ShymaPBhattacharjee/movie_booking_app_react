import Button  from 'react-bootstrap/Button';
import React ,{ useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'




import Qrgen from './Qrgen';





const Bookshow = (props) => {
    const [value0,setValue0]=useState('');

    const handleSelect0=(e)=>{
        setValue0(e)
    }

    const [value,setValue]=useState('none of the timings');

    const handleSelect=(e)=>{
        setValue(e)
    }

    const [value1,setValue1]=useState(0);

    const handleSelect1=(e)=>{
        setValue1(e)
    }
   
    const [count,setCount]=useState(0);
    const tempDate = new Date();
    const date = (tempDate.getDate()) + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getFullYear()  ;
    const date1 = (tempDate.getDate()+1) + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getFullYear()  ;
    const date2 = (tempDate.getDate()+2) + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getFullYear()  ;
    const date3 = (tempDate.getDate()+3) + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getFullYear()  ;
  

    return(
        <div style={{backgroundColor:"powderblue"}}>
        
       <h2 style={{color:"mediumvioletred"}}>Proceed to Book tickets for {props.detaildata.name}</h2>
        <div className="App container">

            <h4 style={{color:"darkorange"}}>Please select date</h4>
            <DropdownButton

                alignRight
                title=" Select Date"
                id="dropdown-menu-align-right"
                onSelect={handleSelect0}
                >

                <Dropdown.Item eventKey={date}>{date} </Dropdown.Item>
                <Dropdown.Item eventKey={date1}>{date1} </Dropdown.Item>
                <Dropdown.Item eventKey={date2}>{date2} </Dropdown.Item>
                <Dropdown.Item eventKey={date3}>{date3} </Dropdown.Item>
                
                <Dropdown.Divider />

            </DropdownButton>
            <h6> Date is {value0}</h6>
            <h4 style={{color:"darkorange"}}>Please select Timings</h4>

            <DropdownButton

                alignRight
                title=" Available show timings"
                id="dropdown-menu-align-right"
                onSelect={handleSelect}
                >

                <Dropdown.Item eventKey="11:30 AM Morning Show ">11:30 AM </Dropdown.Item>
                <Dropdown.Item eventKey="2:00 PM Matinee Show">2:00 PM</Dropdown.Item>
                <Dropdown.Item eventKey="6:00 PM First Show">6:00 PM</Dropdown.Item>
                <Dropdown.Item eventKey="9:00 PM Second Show">9:00 PM</Dropdown.Item>
                <Dropdown.Divider />
             
                </DropdownButton>
                <h6>Timings are {value}</h6>

                <h4 style={{color:"darkorange"}}>Please select Seats</h4>

                <div className="App container">

                <DropdownButton

                    alignRight
                    title="Choose Number of seats"
                    id="dropdown-menu-align-right"
                    onSelect={handleSelect1}
                    >

                    <Dropdown.Item eventKey="1 ">1 </Dropdown.Item>
                    <Dropdown.Item eventKey="2">2</Dropdown.Item>
                    <Dropdown.Item eventKey="3">3</Dropdown.Item>
                    <Dropdown.Item eventKey="4">4</Dropdown.Item>
                    <Dropdown.Divider />
                
                    </DropdownButton>

                    <h6>Total Seats are {value1}</h6>

                </div>  
                
        </div>
        <h3>{''}</h3>
        <center>
        <div>
                <Button variant="primary" onClick={()=>setCount(count+1)}><p style={{color:'White'}}>Book now</p></Button>
                {count? <div>
                    <h3>You have Successfully Booked tickets for {props.detaildata.name}</h3>
                    <Qrgen /> 
                    <h4>Selected date is {value0}</h4>
                    <h4>You selected {value}</h4>
                    <h4>Number of seats Booked are : {value1}</h4>
                    </div>: null}
        </div>
        </center>
       
        
      
     
    

       </div>
    )


}

export default Bookshow;

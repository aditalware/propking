import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';
import {Row,Col,Container,Button} from 'react-bootstrap';

import Modal from 'react-modal';
import { updateItem } from '../actions';


    
function Editor(props){

  const[newname,setName]=React.useState('');
  return(<Modal 
  isOpen={props.isOpen}

  >
   
      
                 <i className="fa fa-close close"  onClick={()=>{props.toggle(false); }}></i> 

                    <div className={"modal-div"}>
                      <div >

                        <label>Edit: </label>
                        <input type="text" name="newname" placeholder={props.name} onChange={(e)=>{setName(e.target.value)}}/>
                      </div>
                        <br></br>
                        <button  value="Done" className="mod" onClick={()=>{props.updateItem(props.id,newname); props.toggle(false)}}>Done</button>
                    </div>

  </Modal>)
}
  
function Item(props){ 
  
  
  const[open,setOpen]=React.useState(false);

  
  return(


            <>
         <Col xs={1} md={6} lg={4}>
          <Card height="300" width="200" className="mycard">
            <CardImg  src={`/${props.id}.jpg`} name={props.name} height="320" width="390" />
            <CardBody>

               <div style={{textAlign:"center",margin:"20px 0px"}}>
                 {props.name}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {props.area}
               </div>
               <div style={{textAlign:"center",marginBottom:"10px"}}>
                 {props.city}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {props.country}
               </div>


               <div style={{textAlign:"center",cursor:"pointer"}} onClick={()=>{setOpen(true)}}>
                 <Button variant="primary" className="but-update" disabled={!props.login}>Update</Button>
               </div>
               <div  style={{textAlign:"center"}}>
                 <Button variant="success" className="but-suc">Interested</Button>
               </div>
               


            </CardBody>
            </Card>
         </Col>
         <Editor
         name={props.name}
         id={props.id}
         isOpen={open}
         toggle={setOpen}
         updateItem={props.updateItem}

         />
         </>
)
}



export default Item
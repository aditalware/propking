import { Button } from 'bootstrap'
import React from 'react'
import {Navbar, NavbarBrand, Jumbotron,Nav,NavbarToggler,
    Collapse,NavItem,} from 'reactstrap'
    import Modal from 'react-modal';


    
function Editor(props){
  const [name,setName]=React.useState('');
  const [pass,setPass]=React.useState('');

  
  return(<Modal 
  isOpen={props.open}

  >
   
        <form onSubmit={(e)=>{e.preventDefault(); props.handleSubmit({username:name,password:pass});props.toggle(false) }}>
           <i className="fa fa-close close"  onClick={()=>{props.toggle(false); }}></i> 

                    <div className={"modal-div"}>
                      <div >

                        <label>Username: </label>
                        <input type="text" name="username" placeholder={"Enter username"} onChange={(e)=>{setName(e.target.value)}}/>
                      </div>
                        <br></br>

                        <div>

                        <label>Password: </label>
                        <input type="password" name="password" placeholder={"Enter password"} onChange={(e)=>{setPass(e.target.value)}}/>
                        </div>
                        <br></br>
                        <button type="submit" value="Done" className="mod">Done</button>
                    </div>
        </form>

  </Modal>)
}


function Header(props) {

     const[isOpen,setOpen]=React.useState(false);
    return (
        <div>
             <Navbar dark expand="md">
        <div className="container navbar-space">
      <Nav navbar>
      <NavItem style={{listStyle:"none"}}>
             <span className="fa fa-home fa-lg"></span>
             Home
      </NavItem>
      </Nav>


        <Nav  navbar className="login">
            
        {!props.login? 
                 <NavItem style={{listStyle:"none",cursor:"pointer"}} onClick={()=>{setOpen(true)}}>
                <span className="fa fa-sign-in fa-lg"></span>
                  Login
                </NavItem>:
                <NavItem style={{listStyle:"none",cursor:"pointer"}} onClick={()=>{localStorage.clear(); props.setLogin(false)}}>
                <span className="fa fa-sign-in fa-lg"></span>
                  Logout
                </NavItem>
          }
        </Nav>
        
        </div>
      </Navbar>
          <Editor
        open={isOpen}
        toggle={setOpen}
        handleSubmit={props.handleSubmit}
        />


        </div>
    )
}

export default Header

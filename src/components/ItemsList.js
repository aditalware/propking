import React from 'react'
import { connect } from 'react-redux'
import { updateItem } from '../actions'
import Item from './Item';
import {Col,Row,Container} from 'react-bootstrap';


const ItemsList = ({ items, updateItem,login }) => (
    <Container>

   <Row>

    <ul className={'item-list'} style={{display:"inline-flex"}}>
      
        {items.map((item,k) => (k<3)&&(
            <Item key={ item.id } {...item} updateItem={updateItem} login={login}/>
        ))}
    </ul>
   </Row>

   <Row>

    <ul className={'item-list'} style={{display:"inline-flex"}}>
      
        {items.map((item,k) => (k>=3)&&(
            <Item key={ item.id } {...item} updateItem={updateItem} login={login}/>
        ))}
    </ul>
   </Row>


    </Container>
)

const mapStateToProps = state => ({
    items: state.items
})

const mapDispatchToProps = dispatch => ({
    updateItem: (id,name) => dispatch(updateItem(id,name))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList)
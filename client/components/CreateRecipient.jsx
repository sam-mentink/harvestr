import React from 'react'
import {Link} from 'react-router'

import Header from './Header'
import api from '../api'

let name = null
let address = null
let contactPerson = null
let phone = null
let notes = null

export default React.createClass({
  createRecipient () {
    let newRecipient = {
      name: name.value,
      address: address.value,
      contactPerson: contactPerson.value,
      phone: phone.value,
      notes: notes.value
    }
    api.createRecipient(newRecipient)
  },

  render() {
    return (
      <div>
        <Header />
        <div className="recipientForm">
          <h2> Create a Recipient Profile </h2><br/><br/>
            <input name="name" type="text" placeholder="Name of Organisation" ref={function (input) {
                  name = input }}/><br/><br/>
              <input name="address" type="text" placeholder="Address" ref={function (input) {
                  address = input }} /><br/><br/>
              <input name="person" type="text" placeholder="Contact Person" ref={function (input) {
                  contactPerson = input }} /><br/><br/>
              <input name="phone" type="text" placeholder="Phone" ref={function (input) {
                  phone = input }} /><br/><br/>
              <input name="notes" type="text" placeholder="Additional Notes" ref={function (input) {
                  notes = input }} /><br/><br/>
              <Link to='/recipientsList'>
                <input className="button" type="submit" value="Submit" onClick={() => this.createRecipient()}/>
              </Link>
      </div>
    </div>
    )
  }
})

import React from 'react'
import {Link} from 'react-router'

import Header from './Header'
import api from '../api'

let ticket = null
let selectDonor = null
let expectedKg = null
let detailId = null

export default React.createClass({
    getInitialState() {
      return {
        donors: []
      }
    },

    handleChange(event) {
      this.setState({
        value: event.target.value,
        id: event.target.id
      })
    },

    componentDidMount() {
      api.getDonors(this.renderResults)
    },

    renderResults(err, donors) {
      this.setState({donors: donors})
    },

    addDonorTicket () {
      let newTicket = {
        donorId: selectDonor.value,
        expectedKg: expectedKg.value,
      }
      api.addTicket(newTicket)
    },

    render() {
      return (
        <div>
          <Header />
          <div className="donorForm">
            <h2> Create a Donor Ticket </h2><br/><br/>
            <select value={this.state.value} id={this.state.id} onChange={this.handleChange} ref={function (input) {
                selectDonor = input
              }}>
              <option value="0"> Select Donor Name </option>
              {this.state.donors.map((donor) => {
                return (
                  <option key={donor.id} id={donor.id} value={`${donor.id}|${donor.donorDetailsId}`}>
                    {donor.donorName}
                  </option>
                )
              })}
            </select>
            <br/><br/>
            <label htmlFor="weight"> Expected Weight: </label>
            <br/>
            <input name="weight" type="number" min="1" max="999" placeholder="Kilograms" ref={function (input) {
              expectedKg = input
            }} />
            <br/><br/>
            <Link to='/list'>
            <input className="button" type="submit" value="Submit" onClick={() => this.addDonorTicket()}/>
            </Link>
          </div>
        </div>
      )
    }
  })

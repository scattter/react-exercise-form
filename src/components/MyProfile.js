import React, { Component } from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    Name: 'Your name',
    Gender: 'male',
    Description: 'Description about yourself',
    Check: 'true',
  }

  handleFiled = (filed, event) => {
    this.setState({
      [filed]: event.target.value,
    })
  }
  handleCheck = (event) => {
    this.setState({
      Check: event.target.checked,
    })
  }
  handleSubmit = (event) => {
    console.log((JSON.stringify(this.state)));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>My Profile</h2>
        <div className='name'>
          <label htmlFor='name'>Name</label>
          <input type='text' value={this.state.Name} onChange={(event) => this.handleFiled('Name', event)}></input>
        </div>
        <div className='gender'>
          <label htmlFor='gender'>Gender</label>
          <select value={this.state.Gender} onChange={(event) => this.handleFiled('Gender', event)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className='description'>
          <label htmlFor='description'>Description</label>
          {/* <textarea type='text' value={this.state.Description} onChange={(event) => this.handleFiled('Description', event)}></textarea> */}
          <input type='text' value={this.state.Description} onChange={(event) => this.handleFiled('Description', event)}></input>
        </div>
        <div className='check'>
          <input className='check-input' type='checkbox' checked={this.state.Check} onChange={this.handleCheck}></input>
          <span> I have read the terms of conduct</span>
        </div>
        <input
          className='submit-input'
          type='submit'
          value='Submit'
          disabled={!this.state.Name || !this.state.Gender || !this.state.Check || !this.state.Description}
        ></input>
      </form>
    );
  }
}

export default MyProfile;



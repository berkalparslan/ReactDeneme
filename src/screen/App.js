import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import { loginControl } from '../Util'


export default class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      mail: '',
      pass: '',
      err: false,
      errorMessage: '',
      loginStatus: false,
      remember : false
    }
  }

  fncLogin = () => {
    const dt = {
      ref: "5380f5dbcc3b1021f93ab24c3a1aac24",
      userEmail: this.state.mail,
      userPass: this.state.pass,
      face: "no"
    }

    const url = "https://www.jsonbulut.com/json/userLogin.php"
    axios.get(url, { params: dt })
      .then(res => {
        //this.setState({ err: true, errorMessage: '' })
        if (res.status === 200) {
          const json = res.data
          const message = json.user[0].mesaj
          if (json.user[0].durum === true) {
            //const n = json.user[0].bilgiler.userName
            
            //console.log("json: " + JSON.stringify(json))
            //console.log("name: " + n)

            //session bilgilerini(token) alalım(kullanıcı bilgilerini tutmak için)
            //normalde token tutulur ama biz burada id kullanıyoruz, id vulnerability yaratabilir
            const id = json.user[0].bilgiler.userId
            sessionStorage.setItem("user", id)
            if(this.state.remember){
              localStorage.setItem("user", id)
            }
            this.setState({ err: false, errorMessage: '', loginStatus: true })

          } else {
            this.setState({ err: true, errorMessage: message })
          }

        }

      })
  }
  

  fncError = () => {

    return (

      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> {this.state.errorMessage}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

    )
  }

  fncRemember = (evt) => {
    const status = evt.target.checked
    console.log("status: " + status)
    this.setState({ remember: status })
  }
  
  render() {
    return (
      <div>

        {loginControl()}

        {this.state.loginStatus === true &&
          <Redirect to="/dashboard"></Redirect>
        }

        {this.state.err === true && this.fncError()}

        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input onChange={(evt) => { this.setState({ mail: evt.target.value }) }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input onChange={(evt) => { this.setState({ pass: evt.target.value }) }} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div class="form-group form-check">
          <input onChange={(evt) => {this.fncRemember(evt)}} type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Remember me by Coco </label>
        </div>
        <button onClick={this.fncLogin} class="btn btn-primary">Submit</button>

      </div>
    );
  }
}




/*import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mail:'',
      pass:'',
      err: false,
      errMessage: '',
    }
  }

  fncLogin = () => {
    const dt = {
      ref: "5380f5dbcc3b1021f93ab24c3a1aac24",
      userEmail: this.state.mail,
      userPass: this.state.pass,
      face: "no"
    }
    const url = "https://www.jsonbulut.com/json/userLogin.php"

    axios.get(url, { params: dt })
    .then(res => {
      //this.setState({ err:true, errMessage: '' })
      if (res.status === 200) {
        const json = res.data;
        const message = json.user[0].mesaj;
        if (json.user[0].durum === true){
          const n = json.user[0].bilgiler.userName;
          console.log("Name: "+ n);
          this.setState({err:false, errMessage:''});
          //session
          const id = json.user[0].bilgiler.userId; //normalde token olusturup bunu atmak gerekir.
          sessionStorage.setItem("user", id);
        }
        else{
          this.setState({ err:true, errMessage: message})
        }
      }
    });
  }

  fncError = () => {
    return(
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Error</strong> { this.state.errMessage }
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  }
  
  render() {
    return (
    <div>
      { this.state.err === true && this.fncError() }

      
    
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input onChange={ (evt) => {this.setState( { mail: evt.target.value } ) } } type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input onChange={ (evt) => {this.setState( { pass: evt.target.value } ) } }  type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button onClick={ this.fncLogin } className="btn btn-primary">Submit</button>
    
    </div>
    );
  }
}*/
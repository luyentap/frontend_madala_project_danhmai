import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class SignIn extends Component {
  handleEmailChange(e){
    this.setState({email:e.target.value})
  }
  handlePasswordChange(e){
      this.setState({password:e.target.value})
  }
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      email:'danhmai',
      password:'123456'
    };
}
// signIn(){
//   alert('ham chuyen trang ');            
// }

    render() {
      return (
      
        <div style={sForm}>
          
            <div class="form-style-6" style={form_style}>
            <h1 style={sAdmin}>Admin</h1>
            <form>
            <p style={font}>Email</p>
            <input type="email" name="field2" placeholder="Input your Email" style={sInput} onChange={this.handleEmailChange}/>
            <p style={font}>Password</p>
            <input name="field3" placeholder="Input your password" style={sInput}onChange={this.handlePasswordChange}></input>
            <p><a href="#" style={font}>Lost Password ?</a></p>
            <button type="submit" value="Sign In" style={sbutton}><Link to="/admin" onClick={this.signIn}>Sign In</Link></button>
            </form>
            </div>
          
        </div>
      );
    }
  }
//----------------------------------------------
    const sForm={
    backGroundColor: 'grey',
    textAlign: 'center',
    };
    const form_style={
    font: '95% Arial, Helvetica',
    maxWidth: '400px',
    margin: '10px auto',
    padding: '16px',
    background: '#F7F7F7',
    };
    const sAdmin={
        fontFamily:'UTM',
        background: '#43D1AF',
        padding: '20px 0',
        fontSize: '140%',
        fontWeight: '300',
        textAlign: 'center',
        color: '#fff',
        margin: '-16px -16px 16px -16px',
    }
    const sbutton={
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
        borderRadius: '12px',
        marginBottom: '20px',
        marginTop:'20px'
    }
    const sInput={
        marginBottom: '20px',
    }
    const font={
        fontFamily:'UTM',
        fontSize:'20px'
    }
    

  
import React, {Component} from 'react';
import { Link } from 'react-router';
import {reactLocalStorage} from 'reactjs-localstorage';
class Main extends Component {
    
    render(){
        const isLoggedIn = reactLocalStorage.getObject('user');

    let button = null;
    let buttonLogout = null;
    console.log(isLoggedIn.email);
    if (isLoggedIn.email) {
        button = <Link to="/profile">Hello {isLoggedIn.name} </Link>;
        buttonLogout = <li className="nav-item"><Link className="nav-link" to="/logout" activeClassName="active">logout</Link></li>;

    } else {
      button = <Link to="/signup">Sign Up Free</Link>;
    }
        return(
            <div>
                <header className="header_area animated sticky slideInDown">
       
    </header>
                            
                                
                           
                <div className="containerr">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main
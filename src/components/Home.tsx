//import axios from "axios";
import * as React from "react";
import { UserModel } from "../models/UserModel";
//import { connect } from "react-redux";
//import BlogInfo from "../provide-bloginfo";
import { Link } from "react-router-dom";
export interface IHomeProps {
  users?: UserModel[];
}

export class Home extends React.Component<IHomeProps, any> {
  render() {
    return (
      <div className="blog-page">
        <div className="d-flex align-items-center">
          <h5 className="my-0 mr-md-auto font-weight-bold">Company name</h5>

          <Link className="btn btn-primary" to="provide-bloginfo">
            Create
          </Link>
        </div>

        {/*  <BlogInfo /> */}
      </div>

      /*  
     // This is for CRUD
     <div>
        {["email", "firstName", "lastName", "phone", "city", "country"].map(
          x => (
            <input
              type="text"
              placeholder={x}
              onChange={e => this.setState({ [x]: e.target.value })}
            />
          )
        )}
        <button onClick={this.handleSubmit}>Submit</button>
        {this.props.users.map(userData => (
          <div key={userData.props.id}>{userData.props.email}</div>
        ))}
      </div> */
    );
  }
}

/* const mapStateToProps = () => ({ users: UserModel.list() });

export const Home = connect(mapStateToProps)(HomeImpl);
 */

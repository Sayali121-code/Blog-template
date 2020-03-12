import axios from "axios";
import * as React from "react";
import { UserModel } from "./models/UserModel";
import { Link, withRouter } from "react-router-dom";
//import { connect } from "react-redux";

export interface IBlogProps {
  users?: UserModel[];
  history: {
    location: {
      pathname: string;
    };
    push(path: any): void;
  };
}

class BlogInfo extends React.Component<IBlogProps, {}> {
  state = {
    /*  email: "",
        firstName: "",
        lastName: "",
        phone: "",
        city: "",
        country: "" */
    title: "",
    image: "",
    information: ""
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:8080/infoblog");
    new UserModel(res.data).$saveAll();
  }

  handleSubmit = async () => {
    const res = await axios
      .post("http://localhost:8080/infoblog/create", this.state)
      .then(function(response) {
        return response;
      });
    console.log(res, "res");
    if (res) {
      console.log(res.data, "response");
      new UserModel(res.data).$save();

      this.setState(
        {
          title: "",
          image: "",
          information: ""
        },
        () => this.props.history.push({ pathname: "/" })
      );
    }
  };

  render() {
    return (
      <div className="container-fluid form">
        <div className="form-border">
          <table>
            <tr>
              <td>Title : </td>
              <td>
                <input
                  type="text"
                  value={this.state.title}
                  onChange={e => this.setState({ title: e.target.value })}
                />
              </td>
              <td>
                <span>{this.state.title.length ? "" : " Enter Title"}</span>
              </td>
            </tr>

            <tr>
              <td>Image URL : </td>
              <td>
                <input
                  value={this.state.image}
                  type="text"
                  onChange={e => this.setState({ image: e.target.value })}
                />
              </td>
              <td>
                <span>{this.state.image.length ? "" : " Enter Image URL"}</span>
              </td>
            </tr>

            <tr>
              <td>Information : </td>
              <td>
                <textarea
                  value={this.state.information}
                  placeholder="Enter the text..."
                  onChange={e => this.setState({ information: e.target.value })}
                ></textarea>
              </td>
              <td>
                <span>
                  {this.state.information.length ? "" : " Enter Information"}
                </span>
              </td>
            </tr>
          </table>
          <br /> <br />
          {/* <Link to="Homepage"> */}
          <button
            disabled={
              this.state.title.length &&
              this.state.image.length &&
              this.state.information.length
                ? false
                : true
            }
            onClick={this.handleSubmit}
          >
            Submit
          </button>
          {/* </Link> */}
        </div>
      </div>
    );
  }
}

export default withRouter(BlogInfo as any);

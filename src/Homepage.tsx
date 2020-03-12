import * as React from "react";
import Bigimage from "./images/daisies.jpg";
import { UserModel } from "./models/UserModel";
import { connect } from "react-redux";
//import DetailedInfo from "./detailPage/detailedInfo";
import { Link, RouteComponentProps } from "react-router-dom";
import { Home } from "./components/Home";
import axios from "axios";
import { BaseModel } from "./models/BaseModel";
import { userInfo } from "os";

export interface IHomeProps extends RouteComponentProps {
  users?: UserModel[];
  // history?: { match: { params: { id: any } } };
}

class HomePageImpl extends React.Component<IHomeProps, {}> {
  async componentDidMount() {
    const res = await axios.get("http://localhost:8080/infoblog");
    new UserModel(res.data).$saveAll();
  }

  handleClick = (id: string) => {
    //  console.log(">> history ", this.props.history);
    this.props.history.push(`/detailedInfo/${id}`);
  };

  handleDelete = (id: any) => {
    // console.log(id, "user id");
    const data = this.props.users;
    const a: any = data?.filter(ele => ele.props.id !== id);
    console.log(">> a", a);

    new UserModel({ ...a }).delete(id);
  };
  render() {
    return (
      <>
        <Home />
        <div className="container">
          <div className="cards">
            <div className="row">
              <div className="col-sm-8">
                <div className="card">
                  <a href="#">
                    <div className="card-body">
                      <img width="680px" src={Bigimage} />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card">
                  <a href="#">
                    <div className="card-body">
                      <h3>Scientific name: Bellis perennis</h3>
                      <p className="card-text">
                        Bellis perennis is a common European species of daisy,
                        of the family Asteraceae, often considered the
                        archetypal species of that name. Many related plants
                        also share the name "daisy", so to distinguish this
                        species from other daisies it is sometimes qualified as
                        common daisy, lawn daisy or English daisy. It is a
                        perennial herbaceous plant with short creeping rhizomes
                        and rosettes of small rounded or spoon-shaped leaves
                        that are from 3/4 to 2 inches (approx. 2–5 cm) long and
                        grow flat to the ground.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="row">
              {this.props.users?.map(info => (
                <div className="col-sm-4" key={info.props.id}>
                  <img
                    onClick={() => this.handleDelete(info.props.id)}
                    width="20"
                    src="https://p7.hiclipart.com/preview/15/992/904/computer-icons-iconfinder-clip-art-clear-delete-remove-icon-png.jpg"
                  />
                  <div
                    className="card"
                    onClick={() => this.handleClick(info.props.id)}
                  >
                    <Link to="detailedInfo">
                      <div className="card-body">
                        <img width="300px" src={info.props.image} />

                        <p className="card-text">
                          {info.props.title} <br /> <br />
                          {info.props.information}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/*  {this.props.users?.map(info => (
          <div key={info.props.id}>
            {info.props.id} {info.props.title}
            <img src={info.props.image} />
          </div>
        ))} */}
        </div>
      </>

      /*  </div> */
    );
  }
}

const mapStateToProps = () => {
  const usersData = UserModel.list();
  return { users: usersData };
};

export const HomePage = connect(mapStateToProps)(HomePageImpl);
export default HomePage;

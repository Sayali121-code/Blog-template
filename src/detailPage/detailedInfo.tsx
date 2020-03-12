import * as React from "react";
import { UserModel } from "../models/UserModel";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";

export interface DetailedProps extends RouteComponentProps {
  users?: UserModel[];
  id: string;
  match: any;
}

class DetailedInfoImp extends React.Component<DetailedProps, {}> {
  render() {
    console.log(">> this.props.his", this.props.match);
    console.log(">> UserModel.get", UserModel.get(this.props.match.params.id));
    const userBlock = UserModel.get(this.props.match.params.id);
    console.log(">> userBlock", userBlock);

    return (
      <div className="container-fluid">
        <h1>
          <i>
            Spring is nature's way of saying ,"Lets Party" <br /> Welcome Spring
          </i>
        </h1>
        <div className="display-img">
          <img src="https://www.invosflowers.ru/images/slide/BANNER_INVOS.jpg" />
        </div>
        <div className="image-info">
          {this.props.users?.map(element => {
            /*  console.log(">> element.id", element.props.id);
              console.log(">> userBlock.id", userBlock.props.id); */
            if (element.props.id === userBlock.props.id) {
              console.log(">> element", element);
              return (
                <div className="display-details">
                  <p>{element.props.title}</p>
                  <p>
                    <img width="600" src={element.props.image} />
                  </p>
                  <p className="info-para">{element.props.information}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

//export default DetailedInfo;

const mapStateToProps = () => ({ users: UserModel.list() });

export const DetailedInfo = connect(mapStateToProps)(DetailedInfoImp);
export default DetailedInfo;

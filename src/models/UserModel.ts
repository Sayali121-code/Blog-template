import { BaseModel } from "./BaseModel";
interface IUserModelProps {
  name: string;
  id: string;
  login: string;

  // email: string;
  title: string;
  image: any;
  information: string;
  history?: {
    location: {
      pathname: string;
    };
    push(path: any): void;
  };
}

export class UserModel extends BaseModel<IUserModelProps> {
  constructor(props: any) {
    super(props);
    this.props = props;
  }
  static resource = "user";
}

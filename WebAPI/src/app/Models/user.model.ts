export class User {
  public userId: number;
  public userName: string;
  public email: string;
  public password: string;
  public registerDate: Date;

  constructor(
    userid: number,
    username: string,
    email: string,
    password: string,
    registerdate: Date
  ) {
    this.userId = userid;
    this.userName = username;
    this.email = email;
    this.password = password;
    this.registerDate = registerdate;
  }
}

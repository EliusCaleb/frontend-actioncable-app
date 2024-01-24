import { UserType } from "../type";

type Props = {
  user: UserType;
};

const User = ({ user }: Props) => {
  const isCurrentUser = (user: UserType) => {
    const currentUser: UserType = JSON.parse(
      localStorage.getItem("currentUser") || "{}"
    );
    return currentUser.username === user.username;
  };
  return (
    <div>
      <div
        className={`${[
          isCurrentUser(user) ? "bg-ill-secondary" : "bg-ill-main",
        ]}`}
      >
        {user.username}
      </div>
    </div>
  );
};

export default User;

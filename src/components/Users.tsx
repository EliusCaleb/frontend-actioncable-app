import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addUser, selectUsers } from "../features/users/usersSlice";
import { UserType } from "../type";
import User from "./User";
import ActionCable from "actioncable";
import { useEffect } from "react";

const Users = () => {
  const users: UserType[] = useAppSelector(selectUsers);
  const cable = ActionCable.createConsumer("ws://localhost:3090/cable");
  const dispatch = useAppDispatch();

  const createSubscription = () => {
    cable.subscriptions.create(
      { channel: "UsersChannel" },
      { received: (message) => handleReceivedMessage(message) }
    );
  };

  const handleReceivedMessage = (message: any) => {
    dispatch(addUser(message));
  };

  useEffect(() => {
    createSubscription();
  }, []);
  return (
    <div>
      <div className="p-1">
        {users.map((user) => (
          <User key={user.username} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;

import { MessageType } from "../type";

type Props = {
  message: MessageType
}

const Message = ({message}: Props) => {
  return (
    <div>
          {message.content}
    </div>
  )
}

export default Message

const configMessage = {
  messageClass: 'message',
  messageHeaderClass: 'message-header',
  messageBodyClass: 'message-body',
};

export default function Message({ class: classList, title, config = configMessage }, children) {
  return (<div class={ [config.messageClass, classList] }>
      <div class={ config.messageHeaderClass }>
        <p>{ title }</p>
      </div>
      <div class={ config.messageBodyClass }>
        { children }
      </div>
    </div>);
}
Message.config = configMessage;

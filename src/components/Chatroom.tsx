import 'firebase/firestore';
import '../styles/styles.scss'

export const Chatroom = () => {

    // const messagesRef = firestore.collection('messages');



    return (
        <div className="chat">
            <div className="chat-title">
                <h1>Name</h1>
                <h2>Argentina</h2>
                <figure className="avatar">
                    <img alt='img'/>
                </figure>
            </div>
            <div className="messages">
                <div className="messages-content"></div>
            </div>
            <div className="message-box">
                <textarea className="message-input" placeholder="Type Message ..."></textarea>
                <button type="submit" className="message-submit">Send</button>
            </div>
        </div>
    )
};

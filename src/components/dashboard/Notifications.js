import React from 'react'
import moment from 'moment'

const Notifications = (props) => {
  const {notifications} = props;

  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {/* if there is notications please map else ignore */}
            {notifications && notifications.map(data => {
              return (
                <li key={data.id}>
                  <span className="pink-text">{data.user} </span>
                  <span>{data.content}</span>
                  <div className="grey-text note-date">
                    {moment(data.time.toDate()).fromNow()}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Notifications
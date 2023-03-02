import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {name, bloodGroup, Location, ContactNo} = userDetails
  return (
    <li className="user-card-container">
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {bloodGroup} </p>
        <p className="user-designation"> {Location} </p>
        <p className="user-designation"> {ContactNo} </p>
      </div>
    </li>
  )
}
export default UserProfile

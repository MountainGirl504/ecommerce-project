// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { getUserInfo } from './../../ducks/reducer'


// class Profile extends Component {
//     constructor(props) {
//         super(props);

//         this.state={
//             userData: {}
//         }
//     }

//     componentDidMount(){
//         this.props.getUserInfo();
//     }

//   render() {
//       let userInfo = this.props.userData;
//       return(
//               <div>
//                   <div>{userInfo.user_name}</div>
//               </div>
//       )

//     return (
//       <div>
//           <p>User Profile</p>
//         {userInfo}
//       </div>
//     )
//   }
// }
// function mapStateToProps (state){
//     return {
//         userData: state.user
//     }
// }
// export default connect (mapStateToProps, {getUserInfo})(Profile)

import React, {useContext} from 'react'
import ChildB from './ChildB'
// import { UserContext } from '../App';

const ChildA = () => {
    // const user = useContext(UserContext);
  return (
    <div>
        {/* {user.name} */}
        <ChildB/>
    </div>
  )
}

export default ChildA
import React, {useState} from 'react';
import axios from 'axios'

export const GroupContext = React.createContext()

function GroupProvider(props) {
    const [groups, setGroups] = useState([])

    function getAllGroups() {
        axios.get("/group")
            .then(res => setGroups(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    return (
        <GroupContext.Provider
            value={{
                groups,
                getAllGroups
            }}
        >
            {props.children}
        </GroupContext.Provider>
    );
}

export default GroupProvider;
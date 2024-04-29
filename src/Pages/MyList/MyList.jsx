import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/MyList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      });
  }, [user]);
  console.log(list);
  return (
    <div>
      <p>list</p>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Spot</th>
              <th>location</th>
              <th>Time</th>
              <th>Aproximate Cost</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {list.map((singleList, index) => (
              <tr key={index} className="bg-base-200">
                <td>{singleList.spot}</td>
                <td>{singleList.location}</td>
                <td>{singleList.time}</td>
                <td>{singleList.price}$ Per person</td>
                <td>
                  <Link to={`/Update/${singleList._id}`} className="btn">Update</Link>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;

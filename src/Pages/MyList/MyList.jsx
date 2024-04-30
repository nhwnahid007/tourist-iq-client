import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

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

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {

            fetch(`http://localhost:5000/tourist/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        const remaining = list.filter(remainingList => remainingList._id !== _id)
                        setList(remaining)
                    }
                })
        }
    });
}
  return (
    <div>
      <Helmet>
        <title>My List</title>
      </Helmet>

      <div className="overflow-x-auto min-h-screen">
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
                <button onClick={() => handleDelete(singleList._id)} className='btn'> Delete </button>
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

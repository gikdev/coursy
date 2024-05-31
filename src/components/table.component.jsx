export default function Table({ courses, totalPrice, totalInternet }) {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-max mx-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>URL</th>
            <th>Price</th>
            <th>Internet</th>
            <th>Instructor</th>
            <th>Bought</th>
            <th>Downloaded</th>
            <th>Watched</th>
            <th>Notes</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(
            ({ id, name, url, price, internet, instructor, bought, downloaded, watched, notes }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td><a className="link link-primary" href={url}>Link</a></td>
                <td>{price}</td>
                <td>{internet}</td>
                <td>{instructor}</td>
                <td><span className="badge badge-neutral">{bought}</span></td>
                <td><span className="badge badge-neutral">{downloaded}</span></td>
                <td><span className="badge badge-neutral">{watched}</span></td>
                <td>{notes}</td>
                <td><button disabled className="btn btn-secondary">Edit</button></td>
                <td><button disabled className="btn btn-error">Delete</button></td>
              </tr>
            )
          )}
          <tr>
            <th>Total: </th>
            <td>{courses.length}</td>
            <td></td>
            <td>{totalPrice}</td>
            <td>{totalInternet}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
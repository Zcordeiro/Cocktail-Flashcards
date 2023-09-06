const AdminLinks = () => {
  return (
    <div className="flex flex-wrap justify-center my-10">
      
      <div>
        {" "}
        <a className="mx-2 btn btn-outline btn-secondary" href="/admin/view">
          View all cocktails
        </a>{" "}
      </div>
      <div>
        {" "}
        <a className="mx-2 btn btn-outline btn-success" href="/admin/add">
          Add a new cocktail
        </a>{" "}
      </div>
      <div>
        {" "}
        <a className="mx-2 btn btn-outline btn-info" href="/admin/edit">
          Edit an existing cocktail
        </a>{" "}
      </div>
      <div>
        {" "}
        <a className="mx-2 btn btn-outline btn-error" href="/admin/delete">
          Delete an existing cocktail
        </a>{" "}
      </div>
      <div>
        {" "}
        <a className="mt-5 btn btn-outline btn-primary" href="/admin">
          Go back to Admin Page
        </a>{" "}
      </div>
    </div>
  );
};

export default AdminLinks;

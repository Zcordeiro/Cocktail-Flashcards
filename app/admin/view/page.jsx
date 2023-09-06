const viewAllPage = () => {
    return (
      <div className="text-center min-h-screen p-12">
        <h1 className="text-5xl">Welcome to Admin Page</h1>
        <div className="text-3xl"> What would you like to do today? </div>
        <div className="flex flex-wrap justify-center my-10">
          <div>
            {" "}
            <a className="mx-2 btn btn-primary" href="/admin">
                Go back to Admin Page
            </a>{" "}
            </div>
          <div>
            {" "}
            <a className="mx-2 btn btn-success" href="/admin/add">
              Add a new cocktail
            </a>{" "}
          </div>
          <div>
            {" "}
            <a className="mx-2 btn btn-info" href="/admin/edit">
              Edit an existing cocktail
            </a>{" "}
          </div>
          <div>
            {" "}
            <a className="mx-2 btn btn-error" href="/admin/delete">
              Delete an existing cocktail
            </a>{" "}
          </div>
        </div>
      </div>
    );
  };
  
  export default viewAllPage;
  
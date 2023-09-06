import AdminLinks from "@/components/AdminLinks";

const adminPage = () => {
  return (
    <div className="text-center min-h-screen p-12">
      <h1 className="text-5xl">Welcome to Admin Page</h1>
      <div className="text-3xl"> What would you like to do today? </div>
      <AdminLinks />
    </div>
  );
};

export default adminPage;

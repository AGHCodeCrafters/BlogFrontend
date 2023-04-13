import Topbar from "../components/Topbar";

function ErrorPage() {
  return (
    <>
      <Topbar />
      <main className="h-[90vh] flex flex-col items-center">
        <h1 className="mt-[40px] text-[24px] font-bold text-gray_300">
          An error accured
        </h1>
        <p className="mt-[20px] text-[18px] font-semibold text-gray_500">
          Could not find this page
        </p>
      </main>
    </>
  );
}

export default ErrorPage;

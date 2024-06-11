const NotFound = () => {
  return (
    <div className="flex flex-col  items-center justify-center min-h-screen">
      <h1 className="text-9xl">404</h1>
      <div className="text-center">
        <h3>Not Found</h3>

        <blockquote>
          <cite>This page isn't here</cite>
        </blockquote>

        <div className="my-5">
          <a href="/" className="text-blue-600">
            <span>Back to home</span> 👈🏿
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

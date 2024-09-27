const Footer = () => {

  const today = new Date();
  const year = today.getFullYear();

  return (
    <section className="hidden sm:block">
      <footer className="bg-sky-300 px-36 text-gray-800 h-44"></footer>
      <footer className="bg-blue-300 px-36 text-gray-400">
        <div className="container p-5 mx-auto flex justify-between sm:flex-row flex-col">
          <p className="text-sm font-medium">
            <small>© {year} Davide Lombardo</small>
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

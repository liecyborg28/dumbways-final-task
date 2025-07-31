function Footer() {
  return (
    <div className="flex flex-col w-full py-10 bg-slate-50">
      <span className="text-slate-600 text-center">
        &copy; 2025 Designed and Coded With &hearts; by Fernando Lie
      </span>
      <div className="flex w-full justify-center gap-4 pt-2">
        <a href="" target="_blank" rel="noopener noreferrer">
          <img
            className="w-6"
            src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000"
            alt="github_logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/fernando-lie-08936b234"
          target="_blank"
          rel="noopener noreferrer">
          <img
            className="w-6"
            src="https://img.icons8.com/?size=100&id=IuI5Yd3J3qcC&format=png&color=000000"
            alt="linkedin_logo"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;

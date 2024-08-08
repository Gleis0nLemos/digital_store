const Information = ({ title, informations }) => {
  return (
    <div>
      <h1 className="text-custom-h1 font-semibold leading-custom-h1 tracking-custom-h1 text-left mb-1.5 md:mr-16 md:mb-6">
        {title}
      </h1>
      <ul>
        {informations.map((info, index) => (
          <li key={index} className="mb-1">
            <a href={info.link} className="hover:underline font-extralight">
              {info.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Information;
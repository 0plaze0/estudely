const List = ({ data }) => {
  return (
    <ul>
      {data.map((app) => {
        const { id, name, url, image } = app;
        return (
          <li key={id} className="software">
            <a href={url}>
              <img src={image} alt={name} />
              <h4>{name}</h4>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default List;

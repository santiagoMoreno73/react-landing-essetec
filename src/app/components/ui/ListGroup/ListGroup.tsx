export const ListGroup = ({ items, itemId, onSelect }) => {
  return (
    <>
      <div className="list-group list-group-flush mb-4">
        {items.map((item: any, index: number) => (
          <button
            key={index}
            type="button"
            className={`list-group-item list-group-item-action ${
              itemId === item.id ? "active" : ""
            }`}
            onClick={() => onSelect(item.id)}
            aria-current="true"
          >
            {item.name}
          </button>
        ))}
      </div>
    </>
  );
};

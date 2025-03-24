interface ListProps {
  title: string;
  items: string[];
}

interface ListPropsData {
  ListData: ListProps[];
}

export const ListComp: React.FC<ListPropsData> = ({ ListData }) => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-6 m-6" >
      {ListData.map((list, index) => (
        <div key={index}>
          <h2 className="text-primary text-lg font-semibold">{list.title}</h2>
          <ul className="list-inside text-secondary mt-4 cursor-pointer">
            {list.items.map((subitem, i) => (
              <li key={i} className="p-1 ">{subitem}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

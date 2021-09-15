interface props {
  list: any[];
  now: string | string[];
  checkStyle: any;
  callback(e): void;
  name: string;
}

export default function List({ list, now, checkStyle, callback, name }: props) {
  return (
    <>
      {list.map((res, index) => {
        return (
          <label
            key={index}
            style={(index + 1).toString() === now ? checkStyle : {}}
          >
            <input
              type="radio"
              name={name}
              value={index + 1}
              onClick={callback}
            />
            {res}
          </label>
        );
      })}
    </>
  );
}

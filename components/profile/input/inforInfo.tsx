export default function InforInput({ name, placeholder, data, callback }) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      onChange={callback}
      defaultValue={data[name]}
    />
  );
}

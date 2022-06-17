const Table = ({ items }) => {
  return (
    <table>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            {Object.entries(item).map(([key, value]) => (
              <td key={`${item.id}-${key}`}>{JSON.stringify(value)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

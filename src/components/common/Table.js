import React from 'react';

const Table = ({ data, column }) => {
  function getContent(col, row) {
    if(col.content)
      return col.content(row);
    return row[col.name];
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {column.map(col => (
            <th key={col.name}>{col.label}</th>
          ))}
        </tr>
        {data.map(row => (
          <tr key={row.id}>
            {column.map(col => (
              <th key={row.id + col.name}>{getContent(col, row)}</th>
            ))}
          </tr>
        ))}
      </thead>
    </table>
  );
};

export default Table;
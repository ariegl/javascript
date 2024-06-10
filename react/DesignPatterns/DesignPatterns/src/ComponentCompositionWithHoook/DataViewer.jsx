import React from "react";

function DataViewer(props) {
  const { loading, error, data } = props;

  if (loading && !error) {
    return <h1>Realizando peticion</h1>;
  }

  if (error) {
    return <h1>Hubo un error</h1>;
  }

  if (!data) {
    return undefined;
  }

  return (
    <div>
      <ul>
        {data.map((element, index) => {
					if (index < 5) {
						return (
							<li key={"element" + index}>lalalala</li>
						)
					}
				})}
      </ul>
    </div>
  );
}

export default DataViewer;

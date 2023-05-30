import React from 'react'
import { makeStyles, shorthands, Spinner } from "@fluentui/react-components";

const useStyles = makeStyles({
    container: {
      "> div": { ...shorthands.padding("20px") },
    },
  });

function Loader() {
    const styles = useStyles();
    return (
      <div className="flex justify-start items-center text-black">
        <Spinner labelPosition="below" label="Cargando" />
      </div>
    );
  };

export default Loader
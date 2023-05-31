import React from 'react'
import { makeStyles, shorthands, Spinner } from "@fluentui/react-components";
import { Button } from '@fluentui/react-components';

const useStyles = makeStyles({
  container: {
    "> div": { ...shorthands.padding("20px") },
  },
});

function Loader() {
    const styles = useStyles();
    return (
      <div className={styles.container}>
        <Spinner labelPosition="below" label="Validando..." />
      </div>
    );
  };

export default Loader
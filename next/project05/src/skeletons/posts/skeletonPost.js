import React from 'react'
import {
    Skeleton,
    SkeletonItem,
    SkeletonProps,
    makeStyles,
    shorthands,
  } from "@fluentui/react-components";

const useStyles = makeStyles({
    firstRow: {
        alignItems: "center",
        display: "grid",
        width: "100%",
        paddingTop: "10px",
        paddingBottom: "10px",
        position: "relative",
        ...shorthands.gap("10px"),
        gridTemplateColumns: "min-content 20% 20% 15% 15%",
      },
      secondThirdRow: {
        paddingBottom: "10px",
        position: "relative",
        ...shorthands.gap("10px"),
        },
    fourRow: {
        alignItems: "center",
        display: "grid",
        width: "100%",
        paddingTop: "10px",
        paddingBottom: "10px",
        position: "relative",
        ...shorthands.gap("10px"),
        gridTemplateColumns: "min-content 80%",
    }
})

function SkeletonPost(props) {
    const styles = useStyles();
    return (
        <div className="border bg-slate-200 border-gray-300 w-full my-4 px-10">
          <Skeleton {...props}>
            <div className={styles.firstRow}>
                <SkeletonItem shape="circle" size={56} />
                <SkeletonItem shape="rectangle" size={16} />
                <SkeletonItem shape="rectangle" size={16} />
            </div>
            <div className={styles.secondThirdRow}>
                <SkeletonItem size={16} />
            </div>
            <div className={styles.secondThirdRow}>
                <SkeletonItem size={16} />
            </div>
            <div className={styles.secondThirdRow}>
                <SkeletonItem size={16} />
            </div>
            <div className={styles.secondThirdRow}>
                <SkeletonItem size={16} />
            </div>
            <div className={styles.fourRow}>
                <SkeletonItem shape="square" size={128} />
            </div>
        </Skeleton>
        </div>
      );
}

export default SkeletonPost
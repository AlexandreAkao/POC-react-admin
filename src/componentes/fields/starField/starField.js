import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const styles = {
    star: {
        margin: 0,
    },
    label: {
        margin: '0 0 0 30%'
    }
};

// const StarField = ({ record = {}, source, classes }) =>
//     <a href={record[source]} className={classes.link}>
//         {record[source]}
//         <StarIcon className={classes.icon} />
//     </a>;

// export default withStyles(styles)(StarField);

const StarField = ({ record = {}, source, classes }) => {
    
    console.log({ record, source, classes })
    return (
        <Box className={classes.star} component="fieldset" mb={3} borderColor="transparent">
            <Typography className={classes.label} component="legend">{record.avaliacao}</Typography>
            <Rating precision={0.1} value={2.5} readOnly />
        </Box>
    );
}

export default withStyles(styles)(StarField);
  
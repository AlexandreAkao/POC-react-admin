import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import LaunchIcon from '@material-ui/icons/Launch';


import Rating from '@material-ui/lab/Rating';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// import StarIcon from "@material-ui/icons/Stars"

const styles = {
    link: {
        border: 0,
    },
    icon: {
        width: '0.5em',
        paddingLeft: 2,
    },
};

// const StarField = ({ record = {}, source, classes }) =>
//     <a href={record[source]} className={classes.link}>
//         {record[source]}
//         <StarIcon className={classes.icon} />
//     </a>;

// export default withStyles(styles)(StarField);

const StarField = () => {
    const [value, setValue] = React.useState(2);
  
    return (
        <div className={styles.link}>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                />
            </Box>
        </div>
    );
}

export default withStyles(styles)(StarField);
  
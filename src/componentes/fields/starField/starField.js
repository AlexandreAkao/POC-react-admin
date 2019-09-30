import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import LaunchIcon from '@material-ui/icons/Launch';


import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// import StarIcon from "@material-ui/icons/Stars"

// const styles = {
//     link: {
//         textDecoration: 'none',
//     },
//     icon: {
//         width: '0.5em',
//         paddingLeft: 2,
//     },
// };

// const StarField = ({ record = {}, source, classes }) =>
//     <a href={record[source]} className={classes.link}>
//         {record[source]}
//         <StarIcon className={classes.icon} />
//     </a>;

// export default withStyles(styles)(StarField);

export default function StarField() {
    const [value, setValue] = React.useState(2);
  
    return (
      <div>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Controlled</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Read only</Typography>
          <Rating value={value} readOnly />
        </Box>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Disabled</Typography>
          <Rating name="disabled" value={value} disabled />
        </Box>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Pristine</Typography>
          <Rating name="pristine" value={null} />
        </Box>
      </div>
    );
  }
  
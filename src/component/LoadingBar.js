import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';
 
 const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
    },
});
      
function LoadingBar(props) {
    const { classes } = props;
    return (
        <div className="centerContent">
            <CircularProgress 
                className={classes.progress} 
                style={{ color: purple[500] }} thickness={7}
                size={100} />
        </div>
    );
}
LoadingBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(LoadingBar);      
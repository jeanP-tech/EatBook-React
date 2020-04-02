import React from "react";
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const GoBack = ({history}) => {
    return (
      <div>
        <Link to="/library"><i className="fa fa-arrow-left fa-3x" /></Link>
      </div>
    );
};

export default GoBack;

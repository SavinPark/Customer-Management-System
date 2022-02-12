// React 라이브러리
import React from 'react';

// Material UI
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


function Customer({id, image, name, birthday, gender, job}) {
    return (
      <TableRow>
        <TableCell>{id}</TableCell>
        <TableCell><img src={image} alt="profile image"/></TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{birthday}</TableCell>
        <TableCell>{gender}</TableCell>
        <TableCell>{job}</TableCell>
      </TableRow>
    );

  }

// 내보내기 
export default Customer;